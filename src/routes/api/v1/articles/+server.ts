import { json } from '@sveltejs/kit';
import { getThemes } from '$lib/articleUtils';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ setHeaders }) => {
	const themes = getThemes();
	
	// Set Cache-Control header
	setHeaders({
		'Cache-Control': 'public, max-age=3600'
	});
	
	return json({
		themes
	});
};