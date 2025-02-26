import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    resolve: {
        alias: {
            lodash: 'lodash-es'
        }
    },
    build: {
        outDir: './dist',
    },
    plugins: [
        tailwindcss(),
    ],
});