// https://github.com/vitejs/vite/issues/2483
export default (mode, entries) => ({
    name: 'importMap',
    config: () => {
        const config = {
            build: {
                rollupOptions: {
                    external: Object.keys(entries),
                },
            },
        };

        if (mode === 'development') {
            config.resolve = {
                alias: entries,
            };
        }

        return config;
    },
    transformIndexHtml: (html) => {
        const content = Object.entries(entries).map(([from, to]) => `"${from}":"${to}"`).join(',');
        return html.replace(/^(\s*?)<title>.*?<\/title>/m, `$&$1<script type="importmap">{"imports":{${content}}}</script>`);
    },
});