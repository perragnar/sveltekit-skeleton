import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';

const production = process.env.NODE_ENV !== 'development';

const config = {
	preprocess: [
		sveltePreprocess({
			sourceMap: !production,
			scss: {
				prependData: '@import "src/scss/_variables.scss";'
			}
		})
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
