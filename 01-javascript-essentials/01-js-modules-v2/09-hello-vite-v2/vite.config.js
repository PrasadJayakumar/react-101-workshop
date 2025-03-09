import { defineConfig } from 'vite';
import path from 'path';
import importMap from './vite-plugins/importMap.js';

export default defineConfig(({ mode }) => ({
    build: {
        outDir: './dist'
    },
    resolve: {
        alias: {
            'lodash': 'lodash-es',
        },
    },
    plugins: [
        importMap(mode,
            {
                'TimeUtils':
                    mode === 'development' ?
                        path.resolve(__dirname, './public/lib/timeUtils.js').replace(/\\/g, '/') :
                        '/lib/timeUtils.js'
            }),
    ],
}));