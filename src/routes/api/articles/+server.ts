import { json } from '@sveltejs/kit';
import { getThemes } from '../../../lib/articleUtils';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = () => {
	const themes = getThemes();
	return json({
		themes
	});
};
