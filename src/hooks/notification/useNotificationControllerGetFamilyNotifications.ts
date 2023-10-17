import type { QueryKey, UseQueryResult, UseQueryOptions, QueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import client from '../../client';
import type {
  NotificationControllerGetFamilyNotificationsQueryResponse,
  NotificationControllerGetFamilyNotificationsPathParams
} from '../../models/notification/NotificationControllerGetFamilyNotifications';

export const notificationControllerGetFamilyNotificationsQueryKey = (
  familyId: NotificationControllerGetFamilyNotificationsPathParams['familyId']
) => [{ url: `/notification/family/${familyId}`, params: { familyId: familyId } }] as const;

export function notificationControllerGetFamilyNotificationsQueryOptions<
  TData = NotificationControllerGetFamilyNotificationsQueryResponse,
  TError = unknown
>(
  familyId: NotificationControllerGetFamilyNotificationsPathParams['familyId'],
  options: Partial<Parameters<typeof client>[0]> = {}
): UseQueryOptions<TData, TError> {
  const queryKey = notificationControllerGetFamilyNotificationsQueryKey(familyId);

  return {
    queryKey,
    queryFn: () => {
      return client<TData, TError>({
        method: 'get',
        url: `/notification/family/${familyId}`,

        ...options
      }).then((res) => res.data);
    }
  };
}

/**
 * @link /notification/family/:familyId
 */

export function useNotificationControllerGetFamilyNotifications<
  TData = NotificationControllerGetFamilyNotificationsQueryResponse,
  TError = unknown
>(
  familyId: NotificationControllerGetFamilyNotificationsPathParams['familyId'],
  options: {
    query?: UseQueryOptions<TData, TError>;
    client?: Partial<Parameters<typeof client<TData, TError>>[0]>;
  } = {}
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const { query: queryOptions, client: clientOptions = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? notificationControllerGetFamilyNotificationsQueryKey(familyId);

  const query = useQuery<TData, TError>({
    ...notificationControllerGetFamilyNotificationsQueryOptions<TData, TError>(familyId, clientOptions),
    ...queryOptions
  }) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey as QueryKey;

  return query;
}
