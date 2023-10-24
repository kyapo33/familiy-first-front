import { useGetUserFamilies } from '../../../../hooks/queries/useGetUserFamilies';
import { useUserStore } from '../../../../assets/store/UserStore';

export const useFamiliesList = () => {
  const { user } = useUserStore();
  const { data, isLoading } = useGetUserFamilies(user?.id ?? null);

  return {
    families: data?.data,
    isLoading,
    user
  };
};
