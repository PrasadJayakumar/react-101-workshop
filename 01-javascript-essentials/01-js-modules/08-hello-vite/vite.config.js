import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        outDir: './dist'
    },
    resolve: {
        alias: {
            TimeUtils: path.resolve(__dirname, './lib/timeUtils.js'),
        },
    },
});