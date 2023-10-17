import type { UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import client from '../../client';
import type { ResponseConfig } from '../../client';
import type {
  FamilyControllerCreateFamilyRequestMutationResponse,
  FamilyControllerCreateFamilyRequestPathParams
} from '../../models/family/FamilyControllerCreateFamilyRequest';

/**
 * @link /family/request/:familyId/user/:userId
 */

export function useFamilyControllerCreateFamilyRequest<
  TData = FamilyControllerCreateFamilyRequestMutationResponse,
  TError = unknown
>(
  familyId: FamilyControllerCreateFamilyRequestPathParams['familyId'],
  userId: FamilyControllerCreateFamilyRequestPathParams['userId'],
  options: {
    mutation?: UseMutationOptions<ResponseConfig<TData>, TError, void>;
    client?: Partial<Parameters<typeof client<TData, TError, void>>[0]>;
  } = {}
): UseMutationResult<ResponseConfig<TData>, TError, void> {
  const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};

  return useMutation<ResponseConfig<TData>, TError, void>({
    mutationFn: () => {
      return client<TData, TError, void>({
        method: 'post',
        url: `/family/request/${familyId}/user/${userId}`,

        ...clientOptions
      });
    },
    ...mutationOptions
  });
}
