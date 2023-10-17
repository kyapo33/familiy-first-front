import type { UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import client from '../../client';
import type { ResponseConfig } from '../../client';
import type {
  UserControllerUpdateUserMutationRequest,
  UserControllerUpdateUserMutationResponse,
  UserControllerUpdateUserPathParams
} from '../../models/user/UserControllerUpdateUser';

/**
 * @link /user/update/:userId
 */

export function useUserControllerUpdateUser<
  TData = UserControllerUpdateUserMutationResponse,
  TError = unknown,
  TVariables = UserControllerUpdateUserMutationRequest
>(
  userId: UserControllerUpdateUserPathParams['userId'],
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
        url: `/user/update/${userId}`,
        data,

        ...clientOptions
      });
    },
    ...mutationOptions
  });
}
