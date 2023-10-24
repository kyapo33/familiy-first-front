import { AxiosError, AxiosResponse } from 'axios';
import makeRequest from '../../Client';
import { CloudinaryUploadResponse } from '../../schemas/Interfaces';
import { useMutation } from '@tanstack/react-query';

export const useImageUpload = () => {
  const url = 'files/upload';

  return useMutation<AxiosResponse<CloudinaryUploadResponse>, AxiosError, FormData>({
    mutationFn: (data) => makeRequest<CloudinaryUploadResponse>(url, 'POST', data, 'multipart/form-data')
  });
};
