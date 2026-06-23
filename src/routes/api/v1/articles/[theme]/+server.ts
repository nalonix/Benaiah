import { json } from '@sveltejs/kit';
import { getThemeBySlug } from '$lib/articleUtils';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params, setHeaders }) => {
	const themeSlug = params.theme as string;
	const theme = getThemeBySlug(themeSlug);
	
	if (!theme) {
		return json({ error: 'Theme not found' }, { status: 404 });
	}
	
	// Set Cache-Control header
	setHeaders({
		'Cache-Control': 'public, max-age=3600'
	});
	
	return json(theme);
};