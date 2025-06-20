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
					items: [
						{ label: 'Was ist Bioinformatik?', link: 'prospectives/what-is-bioinformatics' },
						{ label: 'Studieninhalte', link: 'prospectives/program-contents' },
						{ label: 'Schnuppermaterialien', link: 'prospectives/study-materials' },
						{ label: 'Aufnahmeverfahren', link: 'prospectives/application-process' },
						{ label: 'Berufsaussichten', link: 'prospectives/career-perspectives' },
						{ label: 'Für Master-Interessierte', link: 'prospectives/master-students' },
						{ label: 'München und andere Standorte', link: 'prospectives/munich_vs_other_locations' },
					],
				},
				{
					label: 'Student Council',
					items: [
						{ label: 'Über uns', link: 'student-council/about-us' },
						{ label: 'Gremien', link: 'student-council/committees' },
						{ label: 'Veranstaltungen', link: 'student-council/events' },
						{ label: 'Mitmachen', link: 'student-council/join-us' },
						{ label: 'Organisation', link: 'student-council/organization' },
					],
				},
				{
					label: 'Students',
					items: [
						{ label: 'Für Studierende', link: 'students/index' },
						{ label: 'Übergang Bachelor-Master', link: 'students/bachelor-master-transition' },
						{ label: 'Prüfungsordnung', link: 'students/examination-regulations' },
						{ label: 'Linksammlung', link: 'students/link-collection' },
						{ label: 'Ersti-Onboarding', link: 'students/onboarding' },
						{ label: 'Auslandsaufenthalt', link: 'students/study-abroad' },
						{ label: 'Abschlussarbeit', link: 'students/thesis' },
					],
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
