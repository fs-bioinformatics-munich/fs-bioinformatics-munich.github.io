// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog'
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [
				starlightBlog(), 
				catppuccin({
					dark: { flavor: "macchiato", accent: "sky" },
					light: { flavor: "latte", accent: "sky" },
				}),
			],
			title: 'Munich bioinformatics student council',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Prospectives',
					autogenerate: { directory: 'prospectives' },
				},
				{
					label: 'Student Council',
					autogenerate: { directory: 'student-council' },
				},
				{
					label: 'Students',
					autogenerate: { directory: 'students' },
				},
			],
			defaultLocale: 'en',
			locales: {
				en: {
					label: 'English',
					lang: 'en',
				},
				de: {
					label: 'Deutsch',
					lang: 'de',
				},
			},
		}),
	],
});
