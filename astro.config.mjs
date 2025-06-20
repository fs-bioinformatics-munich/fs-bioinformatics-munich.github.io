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
			favicon: '/favicon.png',
			components: {
				Header: './src/components/starlight/Header.astro',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Prospectives',
					translations: {
						de: 'Studieninteressierte',
					},
					items: [
						{ 
							label: 'What is Bioinformatics?',
							translations: {
								de: 'Was ist Bioinformatik?',
							},
							link: 'prospectives/what-is-bioinformatics' 
						},
						{ 
							label: 'Program Contents',
							translations: {
								de: 'Studieninhalte',
							},
							link: 'prospectives/program-contents' 
						},
						{ 
							label: 'Study Materials',
							translations: {
								de: 'Schnuppermaterialien',
							},
							link: 'prospectives/study-materials' 
						},
						{ 
							label: 'Application Process',
							translations: {
								de: 'Aufnahmeverfahren',
							},
							link: 'prospectives/application-process' 
						},
						{ 
							label: 'Career Perspectives',
							translations: {
								de: 'Berufsaussichten',
							},
							link: 'prospectives/career-perspectives' 
						},
						{ 
							label: 'For Master Students',
							translations: {
								de: 'Für Master-Interessierte',
							},
							link: 'prospectives/master-students' 
						},
						{ 
							label: 'Munich vs Other Locations',
							translations: {
								de: 'München und andere Standorte',
							},
							link: 'prospectives/munich_vs_other_locations' 
						},
					],
				},
				{
					label: 'Student Council',
					translations: {
						de: 'Fachschaft',
					},
					items: [
						{ 
							label: 'About Us',
							translations: {
								de: 'Über uns',
							},
							link: 'student-council/about-us' 
						},
						{ 
							label: 'Committees',
							translations: {
								de: 'Gremien',
							},
							link: 'student-council/committees' 
						},
						{ 
							label: 'Events',
							translations: {
								de: 'Veranstaltungen',
							},
							link: 'student-council/events' 
						},
						{ 
							label: 'Join Us',
							translations: {
								de: 'Mitmachen',
							},
							link: 'student-council/join-us' 
						},
						{ 
							label: 'Organization',
							translations: {
								de: 'Organisation',
							},
							link: 'student-council/organization' 
						},
					],
				},
				{
					label: 'Students',
					translations: {
						de: 'Studierende',
					},
					items: [
						{ 
							label: 'For Students',
							translations: {
								de: 'Für Studierende',
							},
							link: 'students/index' 
						},
						{ 
							label: 'Living',
							translations: {
								de: 'Wohnen',
							},
							link: 'students/living' 
						},
						{
							label: 'Exam & Module Registration',
							translations: {
								de: 'Prüfungs- und Modulanmeldung',
							},
							link: 'students/exam-module-registration'
						},
						{ 
							label: 'Bachelor-Master Transition',
							translations: {
								de: 'Übergang Bachelor-Master',
							},
							link: 'students/bachelor-master-transition' 
						},
						{ 
							label: 'Examination Regulations',
							translations: {
								de: 'Prüfungsordnung',
							},
							link: 'students/examination-regulations' 
						},
						{ 
							label: 'Link Collection',
							translations: {
								de: 'Linksammlung',
							},
							link: 'students/link-collection' 
						},
						{ 
							label: 'First-Year Onboarding',
							translations: {
								de: 'Ersti-Onboarding',
							},
							link: 'students/onboarding' 
						},
						{ 
							label: 'Study Abroad',
							translations: {
								de: 'Auslandsaufenthalt',
							},
							link: 'students/study-abroad' 
						},
						{ 
							label: 'Thesis',
							translations: {
								de: 'Abschlussarbeit',
							},
							link: 'students/thesis' 
						},
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
