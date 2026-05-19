import { text } from '@sveltejs/kit';
import { getMarkdownContent } from '../../../../../../lib/articleUtils';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = ({ params }) => {
	const { theme, topic, lang, type } = params;

	// Validate language parameter
	if (!['en', 'am'].includes(lang!)) {
		return text('Invalid language. Use "en" or "am"', { status: 400 });
	}

	// Validate type parameter
	if (!['devotional', 'study_material'].includes(type!)) {
		return text('Invalid type. Use "devotional" or "study_material"', { status: 400 });
	}

	const content = getMarkdownContent(theme!, topic!, lang!, type!);

	if (!content) {
		return text('Content not found', { status: 404 });
	}

	return text(content, {
		headers: {
			'Content-Type': 'text/markdown; charset=utf-8',
			'Content-Disposition': `inline; filename="${topic}-${lang}-${type}.md"`
		}
	});
};
