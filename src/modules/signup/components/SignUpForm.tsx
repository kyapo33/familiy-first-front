import { SignUpInputDto } from '../../../schemas/Interfaces';
import { FC, useEffect, useState } from 'react';
import { FormHelperText, Stack, colors } from '@mui/joy';
import { useSignUpForm } from './useSignUpForm';
import MultiStepForm from '../../../components/form/MultiStepForm/MultiStepForm';
import { Backdrop, CircularProgress, Snackbar, Alert } from '@mui/material';
import CustomSnackbar from '../../../components/snackbar/CustomSnackbar';

const SignUpForm: FC = () => {
  const { onSubmit, steps, initialValues, loading, error } = useSignUpForm();

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
      <CustomSnackbar isOpen={error?.response?.status === 400} severity="error" message="Cet utilisateur existe déjà" />
    </>
  );
};

export default SignUpForm;
