module.exports = {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	plugins: [require('daisyui'), require('@tailwindcss/typography')],

	daisyui: {
		themes: [
			{
				default: {
					primary: '#e0a52d',
					secondary: '#f1d192',
					accent: '#71a7f8',
					'base-100': '#202024',
					'base-200': '#17171b',
					'base-300': '#0e0e11',
					'base-content': '#c4cad7',
					neutral: '#393e49',
					'neutral-content': '#70788b',
					info: '#f0ddb5',
					success: '#9DB787',
					warning: '#FFD25F',
					error: '#FC9581',

					'--rounded-btn': '0.5rem', // border radius rounded-btn utility class, used in buttons and similar element
					'--btn-text-case': 'normal' // set default text transform for buttons
				}
			}
		]
	},

	theme: {
		extend: {
			screens: {
				hovermq: { raw: '(hover: hover)' }
			}
		},
		screens: {
			xs: '475px',
			// => @media (min-width: 475px) { ... }

			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px'
			// => @media (min-width: 1536px) { ... }
		}
	}
}
