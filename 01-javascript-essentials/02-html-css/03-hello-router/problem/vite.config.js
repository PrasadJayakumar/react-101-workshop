import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: {
            lodash: 'lodash-es'
        }
    },
    build: {
        outDir: './dist',
    }
});