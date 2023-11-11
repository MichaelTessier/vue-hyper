import { Client, cacheExchange, fetchExchange } from '@urql/vue'
import { authExchange } from '@urql/exchange-auth'

export const urqlClient = new Client({
  url: `${import.meta.env.VITE_SUPABASE_URL}/graphql/v1`,
  exchanges: [
    cacheExchange,
    authExchange(async (utilities) => {
      return {
        addAuthToOperation(operation) {
          return utilities.appendHeaders(operation, {
            ApiKey: import.meta.env.VITE_SUPABASE_KEY,
          })
        },
        didAuthError(error) {
          return error.graphQLErrors.some(
            (e) => e.extensions?.code === 'FORBIDDEN'
          )
        },
        async refreshAuth() {},
      }
    }),
    fetchExchange,
  ],
})
