import { SignUpInputDto } from '../../../schemas/Interfaces';
import { FC } from 'react';
import { Stack } from '@mui/joy';
import { useSignUpForm } from './useSignUpForm';
import MultiStepForm from '../../../components/form/MultiStepForm/MultiStepForm';
import { Backdrop, CircularProgress } from '@mui/material';

const SignUpForm: FC = () => {
  const { onSubmit, steps, initialValues, loading } = useSignUpForm();

  return (
    <>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="primary" />
      </Backdrop>
      <MultiStepForm<SignUpInputDto>
        initialValues={initialValues}
        handleSubmit={(values) => onSubmit(values)}
        steps={steps}
      />
    </>
  );
};

export default SignUpForm;
