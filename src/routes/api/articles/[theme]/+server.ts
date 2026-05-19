import { json } from '@sveltejs/kit';
import { getThemeBySlug } from '../../../../lib/articleUtils';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = ({ params }) => {
	const theme = getThemeBySlug(params.theme!);

	if (!theme) {
		return json(
			{ error: 'Theme not found' },
			{ status: 404 }
		);
	}

	return json(theme);
};
