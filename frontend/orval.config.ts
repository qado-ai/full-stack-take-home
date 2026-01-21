import { defineConfig } from 'orval';

export default defineConfig({
    api: {
        input: '../backend/openapi.json',
        output: {
            target: './src/api/generated.ts',
            mode: 'single',
            client: 'react-query',
            baseUrl: 'http://localhost:8000',
            override: {
                mutator: {
                    path: './src/api/custom-instance.ts',
                    name: 'customInstance',
                },
            },
        },
    },
});
