// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog'
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
	site: 'https://bioinfo.fs.lmu.de',
	base: process.env.ASTRO_BASE || '/',
	integrations: [
		starlight({
			plugins: [
				starlightBlog({
					authors: {
						'fs-team': {
							name: 'FS Bioinformatics Team',
							title: 'Munich Bioinformatics Student Council',
							picture: '/favicon.png',
							url: 'https://bioinfo.fs.lmu.de'
						}
					}
				}), 
				catppuccin({
					dark: { flavor: "macchiato", accent: "sky" },
					light: { flavor: "latte", accent: "sky" },
				}),
			],
			title: {
				en: 'Munich bioinformatics student council',
				de: 'Fachschaft Bioinformatik München',
			},
			favicon: '/favicon.png',
			head: [
				{
					tag: 'style',
					content: `
						:root { --sidebar-left-width: var(--sl-sidebar-width); }
						@media (min-width: 50rem) {
							.sidebar-pane { width: var(--sidebar-left-width); }
							html[data-has-sidebar] { --sl-content-inline-start: var(--sidebar-left-width); }
							.sidebar-resizer { position: fixed; top: var(--sl-nav-height); bottom: 0; left: calc(var(--sidebar-left-width) - 4px); width: 8px; cursor: col-resize; z-index: 30; touch-action: none; }
							.sidebar-resizer:hover, .sidebar-resizer.dragging { background: var(--sl-color-accent); opacity: 0.5; }
							html.sidebar-collapsed { --sidebar-left-width: 0px !important; }
							html.sidebar-collapsed .sidebar-pane, html.sidebar-collapsed .sidebar-resizer { display: none; }
							.sidebar-toggle { position: fixed; top: calc(var(--sl-nav-height) + 0.5rem); left: var(--sidebar-left-width); z-index: 31; width: 1.5rem; height: 2.5rem; padding: 0; display: flex; align-items: center; justify-content: center; border: 1px solid var(--sl-color-hairline-shade); border-left: 0; border-radius: 0 0.4rem 0.4rem 0; background: var(--sl-color-bg-sidebar); color: var(--sl-color-gray-2); cursor: pointer; }
							.sidebar-toggle:hover { color: var(--sl-color-white); background: var(--sl-color-gray-6); }
							body.sidebar-resizing { cursor: col-resize; user-select: none; }
							body.sidebar-resizing iframe { pointer-events: none; }
						}
						@media (max-width: 49.99rem) { .sidebar-resizer, .sidebar-toggle { display: none; } }
					`,
				},
				{
					tag: 'script',
					content: `
						(() => {
							const KEY = 'sidebar-width', MIN = 200, MAX = 600;
							const root = document.documentElement;
							const clamp = (w) => Math.min(MAX, Math.max(MIN, w));
							try { if (localStorage.getItem('sidebar-collapsed') === '1') root.classList.add('sidebar-collapsed'); } catch {}
							try { const w = +localStorage.getItem(KEY); if (w) root.style.setProperty('--sidebar-left-width', clamp(w) + 'px'); } catch {}
							addEventListener('DOMContentLoaded', () => {
								const pane = document.querySelector('.sidebar-pane');
								if (!pane) return;
								const bar = document.createElement('div');
								bar.className = 'sidebar-resizer';
								bar.setAttribute('role', 'separator');
								bar.setAttribute('aria-orientation', 'vertical');
								document.body.appendChild(bar);
								let width, dragging = false;
								bar.addEventListener('pointerdown', (e) => {
									e.preventDefault();
									dragging = true;
									bar.classList.add('dragging');
									document.body.classList.add('sidebar-resizing');
								});
								document.addEventListener('pointermove', (e) => {
									if (!dragging) return;
									width = clamp(e.clientX);
									root.style.setProperty('--sidebar-left-width', width + 'px');
								});
								const stop = () => {
									if (!dragging) return;
									dragging = false;
									bar.classList.remove('dragging');
									document.body.classList.remove('sidebar-resizing');
									if (width) try { localStorage.setItem(KEY, String(width)); } catch {}
								};
								document.addEventListener('pointerup', stop);
								document.addEventListener('pointercancel', stop);
								const toggle = document.createElement('button');
								toggle.className = 'sidebar-toggle';
								toggle.type = 'button';
								document.body.appendChild(toggle);
								const sync = () => {
									const c = root.classList.contains('sidebar-collapsed');
									toggle.textContent = c ? '\u203A' : '\u2039';
									toggle.title = toggle.ariaLabel = c ? 'Show sidebar' : 'Hide sidebar';
									toggle.setAttribute('aria-expanded', String(!c));
								};
								toggle.addEventListener('click', () => {
									const c = root.classList.toggle('sidebar-collapsed');
									try { localStorage.setItem('sidebar-collapsed', c ? '1' : '0'); } catch {}
									sync();
								});
								sync();
								bar.addEventListener('dblclick', () => {
									root.style.removeProperty('--sidebar-left-width');
									try { localStorage.removeItem(KEY); } catch {}
								});
							});
						})();
					`,
				},
			],
			components: {
				Header: './src/components/starlight/Header.astro',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/fs-bioinformatics-munich' },
				{ icon: 'rss', label: 'RSS Feed', href: '/en/blog/rss.xml' }
			],
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
							label: 'Why Munich?',
							translations: {
								de: 'Warum München?',
							},
							link: 'prospectives/why-munich' 
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
							label: 'Freshman Days',
							translations: {
								de: 'Ersti-Tage',
							},
							link: 'students/freshman-days' 
						},
						{
							label: 'Ersti-Reader',
							translations: {
								de: 'Ersti-Reader',
							},
							link: 'students/ersti-reader'
						},
						{
							label: 'Stundenplaner Master',
							translations: {
								de: 'Stundenplaner Master',
							},
							link: 'students/stundenplan'
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
							label: 'Study Abroad',
							translations: {
								de: 'Auslandsaufenthalt',
							},
							link: 'students/study-abroad' 
						},
						{ 
							label: 'Internships',
							translations: {
								de: 'Praktika',
							},
							link: 'students/internships' 
						},
						{ 
							label: 'Leave of Absence',
							translations: {
								de: 'Urlaubssemester',
							},
							link: 'students/leave-of-absence' 
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
