module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['Montserrat'],
			accent: ['Nixie One', 'serif']
		},
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				silver: {
					light: '#84818e',
					DEFAULT: '#565264',
					dark: '#3f3c49'
				},
				lavender: {
					light: '#978f9c',
					DEFAULT: '#706677',
					dark: '#524b57'
				},
				pink: {
					light: '#bea2ab',
					DEFAULT: '#a6808c',
					dark: '#795e66'
				},
				silverPink: {
					light: '#d9cac4',
					DEFAULT: '#ccb7ae',
					dark: '#95867f',
					darkest: '#6f635e'
				},
				gray: {
					light: '#e1dcd9',
					DEFAULT: '#d6cfcb',
					dark: '#9c9794'
				}
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
