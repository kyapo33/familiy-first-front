import { Camera, CameraResultType, Photo } from '@capacitor/camera';
import { useState } from 'react';
import { useImageUpload } from '../../../hooks/mutations/useImageUpload';
import { useNavigate } from 'react-router';
import { useUpdateUser } from '../../../hooks/mutations/useUpdateUser';
import { useUserStore } from '../../../assets/store/UserStore';

export const useProfilPicture = (setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>) => {
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();

  const [imageSrc, setImageSrc] = useState<string | null>(user?.profilePictureUrl ?? null);
  const [loadingImage, setLoadingImage] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const uploadImageMutation = useImageUpload();
  const updateUserMutation = useUpdateUser();

  const handleClose = () => {
    setOpenDialog(false);
    navigate('/');
  };

  const takePicture = async () => {
    setLoadingImage(true);
    try {
      const image: Photo = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });

      const imageUrl: string | undefined = image.webPath;

      if (imageUrl) {
        setImageSrc(imageUrl);
      }
    } catch (error) {
      setError(true);
      console.error('Error taking a picture:', error);
    } finally {
      setLoadingImage(false);
    }
  };

  const onUpload = async (src: string) => {
    const responseImg = await fetch(src);
    const blob = await responseImg.blob();
    const formData = new FormData();
    formData.append('file', blob);
    const response = await uploadImageMutation.mutateAsync(formData);
    if (user) {
      setUser({ ...user, profilePictureUrl: response.data.url });
    }
    await updateUserMutation?.mutateAsync({ profilePictureId: response.data.public_id });
    setOpenDialog(false);
    navigate('/');
  };

  return {
    imageSrc,
    error,
    takePicture,
    onUpload,
    loading: uploadImageMutation.isPending || loadingImage,
    uploadError: uploadImageMutation.error,
    handleClose
  };
};
