import { AxiosError, AxiosResponse } from 'axios';
import axiosClient from '../../Client';
import { AuthModel, SignUpInputDto } from '../../schemas/Interfaces';
import { useMutation } from '@tanstack/react-query';
import makeRequest from '../../Client';

export const useSignUp = () => {
  const url = 'auth/signup';

  return useMutation<AxiosResponse<AuthModel>, AxiosError, SignUpInputDto>({
    mutationFn: (data) => makeRequest<AuthModel>(url, 'POST', data)
  });
};
