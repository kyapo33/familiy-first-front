import type { QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import client from '../../client';
import type { FamilyControllerGetUserFamiliesQueryResponse } from '../../models/family/FamilyControllerGetUserFamilies';

export const familyControllerGetUserFamiliesQueryKey = () => [{ url: `/family/user/families` }] as const;

export function familyControllerGetUserFamiliesQueryOptions<
  TData = FamilyControllerGetUserFamiliesQueryResponse,
  TError = unknown
>(options: Partial<Parameters<typeof client>[0]> = {}): UseQueryOptions<TData, TError> {
  const queryKey = familyControllerGetUserFamiliesQueryKey();

  return {
    queryKey,
    queryFn: () => {
      return client<TData, TError>({
        method: 'get',
        url: `/family/user/families`,

        ...options
      }).then((res) => res.data);
    }
  };
}

/**
 * @link /family/user/families
 */

export function useFamilyControllerGetUserFamilies<
  TData = FamilyControllerGetUserFamiliesQueryResponse,
  TError = unknown
>(
  options: {
    query?: UseQueryOptions<TData, TError>;
    client?: Partial<Parameters<typeof client<TData, TError>>[0]>;
  } = {}
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? familyControllerGetUserFamiliesQueryKey();

  const query = useQuery<TData, TError>({
    ...familyControllerGetUserFamiliesQueryOptions<TData, TError>(clientOptions),
    ...queryOptions
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}
