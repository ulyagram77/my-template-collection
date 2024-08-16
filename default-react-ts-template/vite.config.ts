import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            src: '/src',
            assets: '/src/assets',
            components: '/src/components',
            core: '/src/core',
            styles: '/src/styles',
        },
    },
});
