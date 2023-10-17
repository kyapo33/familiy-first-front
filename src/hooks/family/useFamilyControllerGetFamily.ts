import type { QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import client from '../../client';
import type {
  FamilyControllerGetFamilyQueryResponse,
  FamilyControllerGetFamilyPathParams
} from '../../models/family/FamilyControllerGetFamily';

export const familyControllerGetFamilyQueryKey = (familyId: FamilyControllerGetFamilyPathParams['familyId']) =>
  [{ url: `/family/${familyId}`, params: { familyId: familyId } }] as const;

export function familyControllerGetFamilyQueryOptions<TData = FamilyControllerGetFamilyQueryResponse, TError = unknown>(
  familyId: FamilyControllerGetFamilyPathParams['familyId'],
  options: Partial<Parameters<typeof client>[0]> = {}
): UseQueryOptions<TData, TError> {
  const queryKey = familyControllerGetFamilyQueryKey(familyId);

  return {
    queryKey,
    queryFn: () => {
      return client<TData, TError>({
        method: 'get',
        url: `/family/${familyId}`,

        ...options
      }).then((res) => res.data);
    }
  };
}

/**
 * @link /family/:familyId
 */

export function useFamilyControllerGetFamily<TData = FamilyControllerGetFamilyQueryResponse, TError = unknown>(
  familyId: FamilyControllerGetFamilyPathParams['familyId'],
  options: {
    query?: UseQueryOptions<TData, TError>;
    client?: Partial<Parameters<typeof client<TData, TError>>[0]>;
  } = {}
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? familyControllerGetFamilyQueryKey(familyId);

  const query = useQuery<TData, TError>({
    ...familyControllerGetFamilyQueryOptions<TData, TError>(familyId, clientOptions),
    ...queryOptions
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}
