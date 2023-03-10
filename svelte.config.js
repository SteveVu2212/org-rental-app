import adapter from '@sveltejs/adapter-netlify';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'@api': path.resolve('./static/api'),
			'@components': path.resolve('./src/components')
		}
	}
};

export default config;
