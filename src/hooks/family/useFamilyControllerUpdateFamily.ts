import type { UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import client from '../../client';
import type { ResponseConfig } from '../../client';
import type {
  FamilyControllerUpdateFamilyMutationRequest,
  FamilyControllerUpdateFamilyMutationResponse,
  FamilyControllerUpdateFamilyPathParams
} from '../../models/family/FamilyControllerUpdateFamily';

/**
 * @link /family/update/:familyId
 */

export function useFamilyControllerUpdateFamily<
  TData = FamilyControllerUpdateFamilyMutationResponse,
  TError = unknown,
  TVariables = FamilyControllerUpdateFamilyMutationRequest
>(
  familyId: FamilyControllerUpdateFamilyPathParams['familyId'],
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
        url: `/family/update/${familyId}`,
        data,

        ...clientOptions
      });
    },
    ...mutationOptions
  });
}
