import { defineConfig } from 'orval';

export default defineConfig({
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
