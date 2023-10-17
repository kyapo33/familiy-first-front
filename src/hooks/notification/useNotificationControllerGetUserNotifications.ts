import type { QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import client from '../../client';
import type { NotificationControllerGetUserNotificationsQueryResponse } from '../../models/notification/NotificationControllerGetUserNotifications';

export const notificationControllerGetUserNotificationsQueryKey = () => [{ url: `/notification/user` }] as const;

export function notificationControllerGetUserNotificationsQueryOptions<
  TData = NotificationControllerGetUserNotificationsQueryResponse,
  TError = unknown
>(options: Partial<Parameters<typeof client>[0]> = {}): UseQueryOptions<TData, TError> {
  const queryKey = notificationControllerGetUserNotificationsQueryKey();

  return {
    queryKey,
    queryFn: () => {
      return client<TData, TError>({
        method: 'get',
        url: `/notification/user`,

        ...options
      }).then((res) => res.data);
    }
  };
}

/**
 * @link /notification/user
 */

export function useNotificationControllerGetUserNotifications<
  TData = NotificationControllerGetUserNotificationsQueryResponse,
  TError = unknown
>(
  options: {
    query?: UseQueryOptions<TData, TError>;
    client?: Partial<Parameters<typeof client<TData, TError>>[0]>;
  } = {}
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? notificationControllerGetUserNotificationsQueryKey();

  const query = useQuery<TData, TError>({
    ...notificationControllerGetUserNotificationsQueryOptions<TData, TError>(clientOptions),
    ...queryOptions
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}
