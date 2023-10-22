import { toFormikValidationSchema } from 'zod-formik-adapter';
import PersonalDetails from './form/fields/PersonalDetails';
import ContactDetails from './form/fields/ContactDetails';
import PasswordDetails from './form/fields/PasswordDetails';
import { ContactDetailsSchema, PersonalDetailsSchema, passwordSchema } from './form/fields/ValidationSchemas';
import MultiStepForm from '../../components/form/MultiStepForm/MultiStepForm';
import { SignUpInputDto } from '../../../schemas/Interfaces';
import React, { FC } from 'react';
import { getCurrentDateInFormat } from './SignUpFormHelper';
import { Stack } from '@mui/joy';

const SignUpForm: FC = () => {
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

  return (
    <Stack height="100vh" width="100vw">
      <MultiStepForm<SignUpInputDto>
        initialValues={initialValues}
        handleSubmit={(values) => console.log(values)}
        steps={steps}
      />
    </Stack>
  );
};

export default SignUpForm;
