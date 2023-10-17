import type { QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import client from '../../client';
import type { UserControllerGetUserProfileQueryResponse } from '../../models/user/UserControllerGetUserProfile';

export const userControllerGetUserProfileQueryKey = () => [{ url: `/user/profile` }] as const;

export function userControllerGetUserProfileQueryOptions<
  TData = UserControllerGetUserProfileQueryResponse,
  TError = unknown
>(options: Partial<Parameters<typeof client>[0]> = {}): UseQueryOptions<TData, TError> {
  const queryKey = userControllerGetUserProfileQueryKey();

  return {
    queryKey,
    queryFn: () => {
      return client<TData, TError>({
        method: 'get',
        url: `/user/profile`,

        ...options
      }).then((res) => res.data);
    }
  };
}

/**
 * @link /user/profile
 */

export function useUserControllerGetUserProfile<TData = UserControllerGetUserProfileQueryResponse, TError = unknown>(
  options: {
    query?: UseQueryOptions<TData, TError>;
    client?: Partial<Parameters<typeof client<TData, TError>>[0]>;
  } = {}
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? userControllerGetUserProfileQueryKey();

  const query = useQuery<TData, TError>({
    ...userControllerGetUserProfileQueryOptions<TData, TError>(clientOptions),
    ...queryOptions
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}
