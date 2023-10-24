import { AxiosError, AxiosResponse } from 'axios';
import { GetFamilyModelDto } from '../../schemas/Interfaces';
import { useQuery } from '@tanstack/react-query';
import makeRequest from '../../Client';

const url = 'family/user/families';

export const useGetUserFamilies = (userId: string | null) => {
  return useQuery<AxiosResponse<GetFamilyModelDto[]>, AxiosError>({
    queryKey: ['families', userId],
    queryFn: () => makeRequest<GetFamilyModelDto[]>(url, 'GET'),
    enabled: Boolean(userId)
  });
};
