import type { QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import client from '../../client';
import type {
  UserControllerGetBySerialNumberQueryResponse,
  UserControllerGetBySerialNumberPathParams
} from '../../models/user/UserControllerGetBySerialNumber';

export const userControllerGetBySerialNumberQueryKey = (
  serialNumber: UserControllerGetBySerialNumberPathParams['serialNumber']
) => [{ url: `/user/serial/${serialNumber}`, params: { serialNumber: serialNumber } }] as const;

export function userControllerGetBySerialNumberQueryOptions<
  TData = UserControllerGetBySerialNumberQueryResponse,
  TError = unknown
>(
  serialNumber: UserControllerGetBySerialNumberPathParams['serialNumber'],
  options: Partial<Parameters<typeof client>[0]> = {}
): UseQueryOptions<TData, TError> {
  const queryKey = userControllerGetBySerialNumberQueryKey(serialNumber);

  return {
    queryKey,
    queryFn: () => {
      return client<TData, TError>({
        method: 'get',
        url: `/user/serial/${serialNumber}`,

        ...options
      }).then((res) => res.data);
    }
  };
}

/**
 * @link /user/serial/:serialNumber
 */

export function useUserControllerGetBySerialNumber<
  TData = UserControllerGetBySerialNumberQueryResponse,
  TError = unknown
>(
  serialNumber: UserControllerGetBySerialNumberPathParams['serialNumber'],
  options: {
    query?: UseQueryOptions<TData, TError>;
    client?: Partial<Parameters<typeof client<TData, TError>>[0]>;
  } = {}
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? userControllerGetBySerialNumberQueryKey(serialNumber);

  const query = useQuery<TData, TError>({
    ...userControllerGetBySerialNumberQueryOptions<TData, TError>(serialNumber, clientOptions),
    ...queryOptions
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}
