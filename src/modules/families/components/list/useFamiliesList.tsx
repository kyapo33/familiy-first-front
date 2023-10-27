import { useGetUserFamilies } from '../../../../hooks/queries/useGetUserFamilies';
import { useUserStore } from '../../../../assets/store/UserStore';
import { useState } from 'react';

export const useFamiliesList = () => {
  const { user } = useUserStore();
  const { data, isLoading } = useGetUserFamilies(user?.id ?? null);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  return {
    families: data,
    isLoading,
    user,
    openDialog,
    setOpenDialog
  };
};
