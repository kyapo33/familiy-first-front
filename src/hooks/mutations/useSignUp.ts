import { AxiosError, AxiosResponse } from 'axios';
import axiosClient from '../../Client';
import { AuthModel, SignUpInputDto } from '../../schemas/Interfaces';
import { useMutation } from '@tanstack/react-query';

export const useSignUp = () => {
  const url = 'auth/signup';

  return useMutation<AxiosResponse<AuthModel>, AxiosError, SignUpInputDto>({
    mutationFn: (data) => axiosClient.post<AuthModel>(url, data)
  });
};
