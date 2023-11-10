import { CodegenConfig } from '@graphql-codegen/cli'
import dotenv from 'dotenv'

dotenv.config({ path: `.env.local`, override: true })

const schemaUrl = `${process.env.VITE_SUPABASE_URL}/graphql/v1`

const config: CodegenConfig = {
  schema: [
    {
      [schemaUrl]: {
        headers: {
          apiKey: process.env.VITE_SUPABASE_KEY!,
        },
      },
    },
  ],
  documents: ['src/**/*.graphql'],
  ignoreNoDocuments: true,
  config: {
    useTypeImports: true,
    preResolveTypes: false,
  },
  generates: {
    'src/graphql/__generated__/': {
      preset: 'client',
      config: {
        useTypeImports: true,
      },
      plugins: [],
    },
    'src/': {
      preset: 'near-operation-file',
      plugins: ['typescript-operations', 'typescript-vue-urql'],
      presetConfig: {
        baseTypesPath: 'graphql/__generated__/graphql.ts',
      },
      config: {
        useTypeImports: true,
      },
    },
  },
}

export default config
