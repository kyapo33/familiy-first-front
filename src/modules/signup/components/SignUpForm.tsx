import { SignUpInputDto } from '../../../schemas/Interfaces';
import { FC } from 'react';
import { useSignUpForm } from './useSignUpForm';
import MultiStepForm from '../../../components/form/MultiStepForm/MultiStepForm';
import { Backdrop, CircularProgress } from '@mui/material';
import CustomSnackbar from '../../../components/snackbar/CustomSnackbar';
import { FormModeType } from '../../../components/form/MultiStepForm/types';

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
        mode={FormModeType.SIGNUP}
      />
      <CustomSnackbar isOpen={error?.response?.status === 400} severity="error" message="Cet utilisateur existe déjà" />
    </>
  );
};

export default SignUpForm;
