import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	preview: {
		port: 4173,
		strictPort: true
	},
	server: {
		port: 4173,
		strictPort: true
	}
});
