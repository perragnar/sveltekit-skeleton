const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
module.exports = {
	plugins: [
		require('@tailwindcss/nesting'),
		require('tailwindcss'),
		require('autoprefixer'),
		tailwindcss(),
		autoprefixer
	]
}
