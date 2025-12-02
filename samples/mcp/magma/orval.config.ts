import { defineConfig } from 'orval';

export default defineConfig({
  magmaApi: {
    input: {
      target: 'http://localhost:3230/api-json',
    },
    output: {
      mode: 'single',
      client: 'mcp',
      workspace: './src/sdk/magma-api',
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
