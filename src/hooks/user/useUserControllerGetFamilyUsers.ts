import type { QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import client from '../../client';
import type {
  UserControllerGetFamilyUsersQueryResponse,
  UserControllerGetFamilyUsersPathParams
} from '../../models/user/UserControllerGetFamilyUsers';

export const userControllerGetFamilyUsersQueryKey = (familyId: UserControllerGetFamilyUsersPathParams['familyId']) =>
  [{ url: `/user/family/${familyId}`, params: { familyId: familyId } }] as const;

export function userControllerGetFamilyUsersQueryOptions<
  TData = UserControllerGetFamilyUsersQueryResponse,
  TError = unknown
>(
  familyId: UserControllerGetFamilyUsersPathParams['familyId'],
  options: Partial<Parameters<typeof client>[0]> = {}
): UseQueryOptions<TData, TError> {
  const queryKey = userControllerGetFamilyUsersQueryKey(familyId);

  return {
    queryKey,
    queryFn: () => {
      return client<TData, TError>({
        method: 'get',
        url: `/user/family/${familyId}`,

        ...options
      }).then((res) => res.data);
    }
  };
}

/**
 * @link /user/family/:familyId
 */

export function useUserControllerGetFamilyUsers<TData = UserControllerGetFamilyUsersQueryResponse, TError = unknown>(
  familyId: UserControllerGetFamilyUsersPathParams['familyId'],
  options: {
    query?: UseQueryOptions<TData, TError>;
    client?: Partial<Parameters<typeof client<TData, TError>>[0]>;
  } = {}
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? userControllerGetFamilyUsersQueryKey(familyId);

  const query = useQuery<TData, TError>({
    ...userControllerGetFamilyUsersQueryOptions<TData, TError>(familyId, clientOptions),
    ...queryOptions
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}
