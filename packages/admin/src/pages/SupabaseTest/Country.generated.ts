import type * as Types from '../../graphql/__generated__/graphql';

import gql from 'graphql-tag';
import * as Urql from '@urql/vue';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type GetCountriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCountriesQuery = (
  { __typename?: 'Query' }
  & { countriesCollection?: Types.Maybe<(
    { __typename?: 'countriesConnection' }
    & { edges: Array<(
      { __typename?: 'countriesEdge' }
      & { node: (
        { __typename?: 'countries' }
        & Pick<Types.Countries, 'name' | 'id'>
      ) }
    )> }
  )> }
);


export const GetCountriesDocument = gql`
    query getCountries {
  countriesCollection {
    edges {
      node {
        name
        id
      }
    }
  }
}
    `;

export function useGetCountriesQuery(options: Omit<Urql.UseQueryArgs<never, GetCountriesQueryVariables>, 'query'>) {
  return Urql.useQuery<GetCountriesQuery, GetCountriesQueryVariables>({ query: GetCountriesDocument, ...options });
};