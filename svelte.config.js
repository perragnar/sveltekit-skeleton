import adapter from '@sveltejs/adapter-auto'
import sveltePreprocess from 'svelte-preprocess'

const production = process.env.NODE_ENV !== 'development'

const config = {
	preprocess: [
		sveltePreprocess({
			sourceMap: !production,
			postcss: {}
		})
	],
	kit: {
		adapter: adapter()
	}
}

export default config
