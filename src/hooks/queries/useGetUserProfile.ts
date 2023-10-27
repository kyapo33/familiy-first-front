import { AxiosError } from 'axios';
import { GetUserModelDto } from '../../schemas/Interfaces';
import { useQuery } from '@tanstack/react-query';
import makeRequest from '../../Client';
import { Preferences } from '@capacitor/preferences';

const url = 'user/profile';

export const getUserProfile = async () => {
  const response = await makeRequest<GetUserModelDto>(url, 'GET');
  return response.data;
};

export const useGetUserProfile = () => {
  return useQuery<GetUserModelDto, AxiosError>({
    queryKey: ['current-user'],
    queryFn: async () => await getUserProfile()
  });
};
