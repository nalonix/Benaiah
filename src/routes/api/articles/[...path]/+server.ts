import { json, text } from '@sveltejs/kit';
import { getThemeBySlug, getTopicBySlug, getMarkdownContent } from '$lib/articleUtils';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = ({ params }) => {
	try {
		const parts = (params.path as string)?.split('/').filter(Boolean) || [];

		// Handle different endpoint patterns
		if (parts.length === 0) {
			// Return all themes
			return json({ message: 'Use /api/articles/* for specific content' });
		} else if (parts.length === 1) {
			// Return theme details: /api/articles/theme-name
			const theme = getThemeBySlug(parts[0]);
			if (!theme) {
				return json({ error: 'Theme not found' }, { status: 404 });
			}
			return json(theme);
		} else if (parts.length === 2) {
			// Return topic metadata: /api/articles/theme-name/topic-name
			const topic = getTopicBySlug(parts[0], parts[1]);
			if (!topic) {
				return json({ error: 'Topic not found' }, { status: 404 });
			}
			return json(topic);
		} else if (parts.length === 4) {
			// Return markdown content: /api/articles/theme-name/topic-name/lang/type
			const [theme, topic, lang, type] = parts;
			
			// Validate parameters
			if (!['en', 'am'].includes(lang)) {
				return text('Invalid language. Use "en" or "am"', { status: 400 });
			}
			
			if (!['devotional', 'study_material'].includes(type)) {
				return text('Invalid type. Use "devotional" or "study_material"', { status: 400 });
			}

			const content = getMarkdownContent(theme, topic, lang, type);
			if (!content) {
				return text('Content not found', { status: 404 });
			}

			return text(content, {
				headers: {
					'Content-Type': 'text/markdown; charset=utf-8',
					'Content-Disposition': `inline; filename="${topic}-${lang}-${type}.md"`
				}
			});
		} else {
			return json({ error: 'Invalid API path' }, { status: 400 });
		}
	} catch (error) {
		return json({ error: String(error) }, { status: 500 });
	}
};
