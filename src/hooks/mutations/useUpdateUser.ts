import { AxiosError } from 'axios';
import makeRequest from '../../Client';
import { GetUserModelDto, UpdateUserInputDto } from '../../schemas/Interfaces';
import { QueryClient, useMutation } from '@tanstack/react-query';
import { Preferences } from '@capacitor/preferences';

export const useUpdateUser = () => {
  const updateUser = async (data: UpdateUserInputDto) => {
    const { value } = await Preferences.get({ key: 'user' });
    if (!value) {
      throw new Error('User ID not found');
    }
    const url = `user/update/${JSON.parse(value).id}`;
    const response = await makeRequest<GetUserModelDto>(url, 'PATCH', data);
    await Preferences.set({
      key: 'user',
      value: JSON.stringify(response.data)
    });
    return response.data;
  };

  return useMutation<GetUserModelDto, AxiosError, UpdateUserInputDto>({
    mutationFn: async (data) => await updateUser(data)
  });
};
