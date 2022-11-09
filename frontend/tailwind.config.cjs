/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*{vue, js,ts, jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['Fira Code', 'monospace'],
			},
			colors: {
				primaryBlack: '#01080E',
				primaryBlue: '#011627',
				primaryLightBlue: '#011221',
				secondaryLightBlue: '#607B96',
				secondaryGreen: '#3C9D93',
				secondaryPurple: '#4D5BCE',
				accentOrange: '#FEA55F',
				accentGreen: '#43D9AD',
				accentCream: '#E99287',
				accentPink: '#C98BDF',
				lines: '#1E2D3D',
			},
		},
	},
	plugins: [],
}
