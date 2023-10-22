import { useNavigate } from 'react-router';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { useSignUp } from '../../../hooks/mutations/useSignUp';
import { RoutesPath } from '../../../routes/Paths';
import { SignUpInputDto } from '../../../schemas/Interfaces';
import ContactDetails from './form/fields/ContactDetails';
import PasswordDetails from './form/fields/PasswordDetails';
import PersonalDetails from './form/fields/PersonalDetails';
import { PersonalDetailsSchema, ContactDetailsSchema, passwordSchema } from './form/fields/ValidationSchemas';
import { convertToISODate, getCurrentDateInFormat } from './SignUpFormHelper';
import { Preferences } from '@capacitor/preferences';

export const useSignUpForm = () => {
  const signUpMutation = useSignUp();

  const navigate = useNavigate();

  const onSubmit = async (values: SignUpInputDto) => {
    const newValues: SignUpInputDto = {
      ...values,
      birthdate: convertToISODate(values.birthdate ?? getCurrentDateInFormat()) ?? new Date().toISOString()
    };
    const response = await signUpMutation.mutateAsync(newValues);

    await Preferences.set({
      key: 'token',
      value: response.data.token
    });

    navigate(RoutesPath.News);
  };

  const steps = [
    {
      component: PersonalDetails,
      validationSchema: toFormikValidationSchema(PersonalDetailsSchema)
    },
    {
      component: ContactDetails,
      validationSchema: toFormikValidationSchema(ContactDetailsSchema)
    },
    {
      component: PasswordDetails,
      validationSchema: toFormikValidationSchema(passwordSchema)
    }
  ];

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthdate: ''
  };

  return { onSubmit, steps, initialValues, loading: signUpMutation.isPending };
};
