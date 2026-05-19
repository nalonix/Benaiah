import { readFileSync } from 'fs';
import { join } from 'path';
import { themeList } from '../store/theme_list.svelte.js';

// Slugify function to convert titles to URL-safe slugs
export function slugify(text: string): string {
	return text
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-')
		.replace(/[^\w-]/g, '');
}

// Deslugify function to convert slugs back to readable format
export function deslugify(slug: string): string {
	return slug.split('-').join(' ');
}

// Get all themes with metadata
export function getThemes() {
	return themeList.themes
		.filter((theme) => theme.published)
		.map((theme) => ({
			slug: slugify(theme.theme_en),
			theme_en: theme.theme_en,
			theme_am: theme.theme_am,
			subtopics_count: theme.subtopics.length
		}));
}

// Get a specific theme by slug
export function getThemeBySlug(slug: string) {
	const theme = themeList.themes.find((t) => slugify(t.theme_en) === slug);
	if (!theme) return null;

	return {
		slug: slugify(theme.theme_en),
		theme_en: theme.theme_en,
		theme_am: theme.theme_am,
		subtopics: theme.subtopics.map((subtopic) => ({
			slug: slugify(subtopic.title_en),
			title_en: subtopic.title_en,
			title_am: subtopic.title_am,
			description_en: subtopic.description_en,
			description_am: subtopic.description_am
		}))
	};
}

// Get a specific topic by theme slug and topic slug
export function getTopicBySlug(themeSlug: string, topicSlug: string) {
	const theme = themeList.themes.find((t) => slugify(t.theme_en) === themeSlug);
	if (!theme) return null;

	const subtopic = theme.subtopics.find((s) => slugify(s.title_en) === topicSlug);
	if (!subtopic) return null;

	return {
		theme_en: theme.theme_en,
		theme_slug: themeSlug,
		title_en: subtopic.title_en,
		title_am: subtopic.title_am,
		slug: topicSlug,
		description_en: subtopic.description_en,
		description_am: subtopic.description_am,
		available_content: {
			devotional: {
				en: !!subtopic.devotional?.devotional_en,
				am: !!subtopic.devotional?.devotional_am
			},
			study_material: {
				en: !!subtopic.study_material?.study_material_en,
				am: !!subtopic.study_material?.study_material_am
			}
		},
		authors: {
			devotional_en: subtopic.devotional?.devotional_author_en || [],
			devotional_am: subtopic.devotional?.devotional_author_am || [],
			study_material_en: subtopic.study_material?.study_material_author_en || [],
			study_material_am: subtopic.study_material?.study_material_author_am || []
		}
	};
}

// Get markdown content
export function getMarkdownContent(themeSlug: string, topicSlug: string, lang: string, type: string) {
	const theme = themeList.themes.find((t) => slugify(t.theme_en) === themeSlug);
	if (!theme) return null;

	const subtopic = theme.subtopics.find((s) => slugify(s.title_en) === topicSlug);
	if (!subtopic) return null;

	let filePath: string | null = null;

	if (type === 'devotional' && lang === 'en') {
		filePath = subtopic.devotional?.devotional_en;
	} else if (type === 'devotional' && lang === 'am') {
		filePath = subtopic.devotional?.devotional_am;
	} else if (type === 'study_material' && lang === 'en') {
		filePath = subtopic.study_material?.study_material_en;
	} else if (type === 'study_material' && lang === 'am') {
		filePath = subtopic.study_material?.study_material_am;
	}

	if (!filePath) return null;

	try {
		// Convert the relative path to an absolute file path
		const fullPath = join(process.cwd(), 'src', 'articles', 'themes', filePath.replace('./articles/themes/', '') + '.md');
		const content = readFileSync(fullPath, 'utf-8');
		return content;
	} catch (error) {
		console.error(`Error reading file: ${filePath}`, error);
		return null;
	}
}
