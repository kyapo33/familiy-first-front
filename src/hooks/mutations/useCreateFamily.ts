import { AxiosError, AxiosResponse } from 'axios';
import { CreateFamilyInputDto, GetFamilyModelDto } from '../../schemas/Interfaces';
import { QueryClient, useMutation } from '@tanstack/react-query';
import makeRequest from '../../Client';

export const useCreateFamily = (queryClient: QueryClient) => {
  const url = 'family/create';

  return useMutation<AxiosResponse<GetFamilyModelDto>, AxiosError, CreateFamilyInputDto>({
    mutationFn: (data) => makeRequest<GetFamilyModelDto>(url, 'POST', data),
    onSuccess: async (data) => {
      const previousData = queryClient.getQueryData(['families']);
      queryClient.setQueryData(['families'], (old: CreateFamilyInputDto[]) => [...old, data.data]);
      return { previousData };
    }
  });
};
