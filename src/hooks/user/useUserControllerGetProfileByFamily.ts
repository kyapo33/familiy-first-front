import type { QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import client from '../../client';
import type {
  UserControllerGetProfileByFamilyQueryResponse,
  UserControllerGetProfileByFamilyPathParams
} from '../../models/user/UserControllerGetProfileByFamily';

export const userControllerGetProfileByFamilyQueryKey = (
  userId: UserControllerGetProfileByFamilyPathParams['userId'],
  familyId: UserControllerGetProfileByFamilyPathParams['familyId']
) => [{ url: `/user/profile/${userId}/family/${familyId}`, params: { userId: userId, familyId: familyId } }] as const;

export function userControllerGetProfileByFamilyQueryOptions<
  TData = UserControllerGetProfileByFamilyQueryResponse,
  TError = unknown
>(
  userId: UserControllerGetProfileByFamilyPathParams['userId'],
  familyId: UserControllerGetProfileByFamilyPathParams['familyId'],
  options: Partial<Parameters<typeof client>[0]> = {}
): UseQueryOptions<TData, TError> {
  const queryKey = userControllerGetProfileByFamilyQueryKey(userId, familyId);

  return {
    queryKey,
    queryFn: () => {
      return client<TData, TError>({
        method: 'get',
        url: `/user/profile/${userId}/family/${familyId}`,

        ...options
      }).then((res) => res.data);
    }
  };
}

/**
 * @link /user/profile/:userId/family/:familyId
 */

export function useUserControllerGetProfileByFamily<
  TData = UserControllerGetProfileByFamilyQueryResponse,
  TError = unknown
>(
  userId: UserControllerGetProfileByFamilyPathParams['userId'],
  familyId: UserControllerGetProfileByFamilyPathParams['familyId'],
  options: {
    query?: UseQueryOptions<TData, TError>;
    client?: Partial<Parameters<typeof client<TData, TError>>[0]>;
  } = {}
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? userControllerGetProfileByFamilyQueryKey(userId, familyId);

  const query = useQuery<TData, TError>({
    ...userControllerGetProfileByFamilyQueryOptions<TData, TError>(userId, familyId, clientOptions),
    ...queryOptions
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}
