import { json } from '@sveltejs/kit';
import { getTopicBySlug } from '$lib/articleUtils';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params, setHeaders }) => {
	const themeSlug = params.theme as string;
	const topicSlug = params.subtopic as string;
	const topic = getTopicBySlug(themeSlug, topicSlug);
	
	if (!topic) {
		return json({ error: 'Topic not found' }, { status: 404 });
	}
	
	// Set Cache-Control header
	setHeaders({
		'Cache-Control': 'public, max-age=3600'
	});
	
	return json(topic);
};