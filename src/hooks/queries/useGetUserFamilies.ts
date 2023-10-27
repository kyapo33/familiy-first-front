import { AxiosError, AxiosResponse } from 'axios';
import { GetFamilyModelDto, GetUserModelDto } from '../../schemas/Interfaces';
import { useQuery } from '@tanstack/react-query';
import makeRequest from '../../Client';

const url = 'family/user/families';

export const getUserFamilies = async () => {
  const response = await makeRequest<GetFamilyModelDto[]>(url, 'GET');
  return response.data;
};

export const useGetUserFamilies = (userId: string | null) => {
  return useQuery<GetFamilyModelDto[], AxiosError>({
    queryKey: ['families'],
    queryFn: getUserFamilies,
    enabled: Boolean(userId)
  });
};
