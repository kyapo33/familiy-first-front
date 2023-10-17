import { defineConfig } from '@kubb/core'
import createSwagger from '@kubb/swagger'
import createSwaggerTS from '@kubb/swagger-ts'
import createSwaggerTanstackQuery from '@kubb/swagger-tanstack-query'

export default defineConfig(async () => {
  return {
    root: '.',
    input: {
      path: 'http://localhost:8080/swagger-json'
    },
    output: {
      path: './src',
    },
    plugins: [createSwagger({ output: false, validate: true }), createSwaggerTS({
      output: 'models', enumType: 'enum', dateType: 'date', groupBy: {
        /**
         * Tag will group based on the operation tag inside the Swagger file.
         */
        type: 'tag',
        /**
         * Relative path to save the grouped TypeScript Types.
         *
         * `{{tag}}` will be replaced by the current tagName.
         * @example `${output}/{{tag}}Controller` => `models/PetController`
         * @default `${output}/{{tag}}Controller`
         */
        output: `models/{{tag}}`
      }
    }), createSwaggerTanstackQuery({
      output: 'hooks', groupBy: {
        /**
         * Tag will group based on the operation tag inside the Swagger file.
         */
        type: 'tag',
        /**
         * Relative path to save the grouped TypeScript Types.
         *
         * `{{tag}}` will be replaced by the current tagName.
         * @example `${output}/{{tag}}Controller` => `models/PetController`
         * @default `${output}/{{tag}}Controller`
         */
        output: `hooks/{{tag}}`
      },
      client: './src/client.ts',
    })],
  }
})