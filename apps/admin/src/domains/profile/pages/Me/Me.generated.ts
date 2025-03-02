import type * as Types from '../../../../graphql/__generated__/graphql';

import gql from 'graphql-tag';
import * as Urql from '@urql/vue';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type ProfileFragmentFragment = (
  { __typename?: 'profile' }
  & Pick<Types.Profile, 'first_name' | 'last_name' | 'email' | 'about' | 'linkedin' | 'facebook' | 'username' | 'avatar_url'>
);

export type GetProfileQueryVariables = Types.Exact<{
  id: Types.Scalars['UUID']['input'];
}>;


export type GetProfileQuery = (
  { __typename?: 'Query' }
  & { profileCollection?: Types.Maybe<(
    { __typename?: 'profileConnection' }
    & { edges: Array<(
      { __typename?: 'profileEdge' }
      & { node: (
        { __typename?: 'profile' }
        & Pick<Types.Profile, 'first_name' | 'last_name' | 'email' | 'about' | 'linkedin' | 'facebook' | 'username' | 'avatar_url'>
      ) }
    )> }
  )> }
);

export const ProfileFragmentFragmentDoc = gql`
    fragment ProfileFragment on profile {
  first_name
  last_name
  email
  about
  linkedin
  facebook
  username
  avatar_url
}
    `;
export const GetProfileDocument = gql`
    query getProfile($id: UUID!) {
  profileCollection(filter: {id: {eq: $id}}) {
    edges {
      node {
        ...ProfileFragment
      }
    }
  }
}
    ${ProfileFragmentFragmentDoc}`;

export function useGetProfileQuery(options: Omit<Urql.UseQueryArgs<never, GetProfileQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProfileQuery, GetProfileQueryVariables>({ query: GetProfileDocument, ...options });
};