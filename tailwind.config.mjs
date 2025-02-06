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

					//Medium Turquoise Color Brand
					//Default 400
					'turquoise': {
						DEFAULT: '#50d1c5',
						'50': '#f1fcfa',
						'100': '#cff8f0',
						'200': '#9ef1e4',
						'300': '#66e2d2',
						'400': '#50d1c5',
						'500': '#1dafa4',
						'600': '#158c86',
						'700': '#15706c',
						'800': '#155a57',
						'900': '#164b49',
						'950': '#062d2d',
					},
					//Light Orange Color Brand
					//Default 300
					'tangelo': {
						DEFAULT: '#ffb86c',
						'50': '#fff7ed',
						'100': '#ffedd4',
						'200': '#ffd8a9',
						'300': '#ffb86c',
						'400': '#fe9339',
						'500': '#fc7313',
						'600': '#ed5809',
						'700': '#c54109',
						'800': '#9c3410',
						'900': '#7e2d10',
						'950': '#441406',
					},
					//Dark Gray Color Brand
					//Default 950
					'charleston': {
						DEFAULT: '#272727',
						'50': '#f6f6f6',
						'100': '#e7e7e7',
						'200': '#d1d1d1',
						'300': '#b0b0b0',
						'400': '#888888',
						'500': '#6d6d6d',
						'600': '#5d5d5d',
						'700': '#4f4f4f',
						'800': '#454545',
						'900': '#3d3d3d',
						'950': '#272727',
						'990': '#0D0D0D',
					},
				},
				theme: {
					// Backgrounds
					'siteBackground': "#121212", // Fondo general del sitio web
					'heroBackground': "#1E1E1E", // Fondo de las tarjetas
					'cardBackground': "#1E1E1E", // Fondo de las tarjetas
					'footerBackground': "#1E1E1E", // Fondo de las tarjetas
					'cardBorder': "#263238", // Borde de las tarjetas (opcional, para consistencia con tags)
					
					// Text Colors
					'textPrimary': "#FFFFFF", // Texto principal (títulos)
					'textSecondary': "#B0BEC5", // Texto secundario (descripciones)
					'textMuted': "#90A4AE", // Texto menos destacado (fechas, detalles menores)
					
					//Tags Colors
					'tagBackground': "#263238", // Fondo de los tags
					'tagHoverBackground': "#37474F", // Fondo en hover de los tags
					'textTags': "#80CBC4", // Texto dentro de los tags

					// Primary Buttons
					'buttonBackground': '#FFFFFF', // Fondo para los botones
					'buttonHoverBackground': '#E0E0E0', // Fondo gris claro para los botones en hover

					'buttonTextCharleston': "#272727", // Texto charleston o Gris oscuro
					'buttonHoverTextCharleston': "#0D0D0D", // Texto charleston o Gris oscuro
					'buttonHoverRingCharleston': "#0D0D0D", // Texto charleston o Gris oscuro

					'buttonTextTurquoise': "#005A50", // Texto turquesa 
					'buttonHoverTextTurquoise': "#007D73", // Texto turquesa en hover
					'buttonHoverRingTurquoise': "#007D73", // Texto turquesa en hover

					'buttonTextTangelo': "#964000", // Texto tangelo
					'buttonHoverTextTangelo': "#D9752A", // Texto tangelo en hover
					'buttonHoverRingTangelo': "#D9752A", // Ring rojo en focus

					'buttonTextRed': "#9C1010", // Texto rojo 
					'buttonHoverTextRed': "#B31212", // Texto rojo en hover
					'buttonHoverRingRed': "#B31212", // Ring rojo en focus


					//Secundary Button
					'buttonSecondaryText': "#FFFFFF", // Texto del botón secundario
					'buttonSecondaryHoverText': "#CBCBCB", // Texto del botón secundario en Hover
					'buttonSecondaryBorder': "#FFFFFF", // Borde del botón secundario					
					'buttonSecondaryHoverBorder': "#CBCBCB", // Borde del botón secundario en Hover

					'linkText': "#FFFFFF", // Color inicial del texto
        			'linkTextHover': "#CBCBCB", // Color del texto en hover
				}
			}
		}
	},
	plugins: [require('flowbite/plugin'), require('@tailwindcss/typography')]
}
