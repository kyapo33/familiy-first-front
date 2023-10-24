import { AxiosError, AxiosResponse } from 'axios';
import { AuthModel, LoginInputDto } from '../../schemas/Interfaces';
import { useMutation } from '@tanstack/react-query';
import makeRequest from '../../Client';

export const useLogin = () => {
  const url = 'auth/login';

  return useMutation<AxiosResponse<AuthModel>, AxiosError, LoginInputDto>({
    mutationFn: (data) => makeRequest<AuthModel>(url, 'POST', data)
  });
};
