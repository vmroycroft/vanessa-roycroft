const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.trueGray,
			red: colors.red,
			purple: colors.purple,
			pink: colors.pink
		},
		listStyleType: {
			circle: 'circle'
		},
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
