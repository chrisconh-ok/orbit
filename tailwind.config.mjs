/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			fontFamily: {
				lato: ['Lato', 'Arial', 'Helvetica', 'sans-serif']
			},
			colors: {
				brand: {
					dark: '#272727', // Color oscuro
					primary: '#50d1c5', // Color principal
					secundary: '#ffb86c' // Color de acento
				}
			}
		}
	},
	plugins: [require('flowbite/plugin')]
}
