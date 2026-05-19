import { json } from '@sveltejs/kit';
import { getTopicBySlug } from '$lib/articleUtils';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = ({ params }) => {
	const topic = getTopicBySlug(params.theme!, params.topic!);

	if (!topic) {
		return json(
			{ error: 'Topic not found' },
			{ status: 404 }
		);
	}

	return json(topic);
};
