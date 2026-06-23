import { json } from '@sveltejs/kit';
import { getMarkdownContent } from '$lib/articleUtils';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params, setHeaders }) => {
	const themeSlug = params.theme as string;
	const topicSlug = params.subtopic as string;
	const slug = params.slug as string;
	
	// Split slug on last underscore to get type and language
	const lastUnderscoreIndex = slug.lastIndexOf('_');
	if (lastUnderscoreIndex === -1) {
		return json({ error: 'Invalid slug format. Expected format: {type}_{lang} (e.g., devotional_en, study_material_am)' }, { status: 400 });
	}
	
	const type = slug.slice(0, lastUnderscoreIndex);
	const lang = slug.slice(lastUnderscoreIndex + 1);
	
	// Validate language
	if (!['en', 'am'].includes(lang)) {
		return json({ error: 'Invalid language. Must be "en" or "am"' }, { status: 400 });
	}
	
	// Validate content type
	if (!['devotional', 'study_material'].includes(type)) {
		return json({ error: 'Invalid content type. Must be "devotional" or "study_material"' }, { status: 400 });
	}
	
	const content = getMarkdownContent(themeSlug, topicSlug, lang, type);
	
	if (!content) {
		return json({ error: 'Article not found' }, { status: 404 });
	}
	
	// Set Cache-Control header
	setHeaders({
		'Cache-Control': 'public, max-age=3600',
		'Content-Type': 'text/plain; charset=utf-8'
	});
	
	// Return raw markdown content
	return new Response(content);
};