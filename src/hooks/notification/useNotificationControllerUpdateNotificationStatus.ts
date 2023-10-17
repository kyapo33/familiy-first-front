import type { UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import client from '../../client';
import type { ResponseConfig } from '../../client';
import type {
  NotificationControllerUpdateNotificationStatusMutationRequest,
  NotificationControllerUpdateNotificationStatusMutationResponse,
  NotificationControllerUpdateNotificationStatusPathParams
} from '../../models/notification/NotificationControllerUpdateNotificationStatus';

/**
 * @link /notification/update/:notificationId
 */

export function useNotificationControllerUpdateNotificationStatus<
  TData = NotificationControllerUpdateNotificationStatusMutationResponse,
  TError = unknown,
  TVariables = NotificationControllerUpdateNotificationStatusMutationRequest
>(
  notificationId: NotificationControllerUpdateNotificationStatusPathParams['notificationId'],
  options: {
    mutation?: UseMutationOptions<ResponseConfig<TData>, TError, TVariables>;
    client?: Partial<Parameters<typeof client<TData, TError, TVariables>>[0]>;
  } = {}
): UseMutationResult<ResponseConfig<TData>, TError, TVariables> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};

  return useMutation<ResponseConfig<TData>, TError, TVariables>({
    mutationFn: (data) => {
      return client<TData, TError, TVariables>({
        method: 'patch',
        url: `/notification/update/${notificationId}`,
        data,

        ...clientOptions
      });
    },
    ...mutationOptions
  });
}
