import { useNavigate } from 'react-router';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { RoutesPath } from '../../../routes/Paths';
import { LoginDetailsSchema } from './form/fields/ValidationSchemas';
import { Preferences } from '@capacitor/preferences';
import LoginDetails from './form/fields/LoginDetails';
import { LoginInputDto } from '../../../schemas/Interfaces';
import { useLogin } from '../../../hooks/mutations/useLogin';
import { useUserStore } from '../../../assets/store/UserStore';
import { getUserProfile } from '../../../hooks/queries/useGetUserProfile';

export const useLoginForm = () => {
  const loginMutation = useLogin();
  const { setUser } = useUserStore();

  const navigate = useNavigate();

  const onSubmit = async (values: LoginInputDto) => {
    await loginMutation.mutateAsync(values, {
      onSuccess: async (data) => {
        await Preferences.set({
          key: 'token',
          value: data.data.token
        });

        const userData = await getUserProfile();

        setUser({ ...userData });
        navigate('/');
      }
    });
  };

  const steps = [
    {
      component: LoginDetails,
      validationSchema: toFormikValidationSchema(LoginDetailsSchema)
    }
  ];

  const initialValues = {
    email: '',
    password: ''
  };

  return { onSubmit, steps, initialValues, loading: loginMutation.isPending, error: loginMutation.error };
};
