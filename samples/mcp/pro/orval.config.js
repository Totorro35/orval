"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orval_1 = require("orval");
exports.default = (0, orval_1.defineConfig)({
    proApi: {
        input: {
            target: 'http://localhost:3234/api-json',
        },
        output: {
            mode: 'single',
            client: 'mcp',
            workspace: './src/sdk/pro-api',
            target: './handlers.ts',
            schemas: './http-schemas',
            clean: true,
            prettier: true,
            override: {
                mutator: {
                    name: 'customFetch',
                    path: '../../custom-fetch.ts',
                },
                mcp: {
                    transport: 'http',
                },
            },
        },
    },
});
