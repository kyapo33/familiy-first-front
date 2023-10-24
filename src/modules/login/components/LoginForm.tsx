import { LoginInputDto } from '../../../schemas/Interfaces';
import { FC } from 'react';
import { useLoginForm } from './useLoginForm';
import MultiStepForm from '../../../components/form/MultiStepForm/MultiStepForm';
import { Backdrop, CircularProgress } from '@mui/material';
import CustomSnackbar from '../../../components/snackbar/CustomSnackbar';
import { Box, Stack, Typography } from '@mui/joy';
import { useNavigate } from 'react-router';
import { RoutesPath } from '../../../routes/Paths';
import { FormModeType } from '../../../components/form/MultiStepForm/types';

const SignUpForm: FC = () => {
  const { onSubmit, steps, initialValues, loading, error } = useLoginForm();

  const navigate = useNavigate();

  return (
    <>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="primary" />
      </Backdrop>
      <MultiStepForm<LoginInputDto>
        initialValues={initialValues}
        handleSubmit={(values) => onSubmit(values)}
        steps={steps}
        mode={FormModeType.LOGIN}
      />
      <CustomSnackbar
        isOpen={error?.response?.status === 401}
        severity="error"
        message="Cet utilisateur n'existe pas"
      />
      <Stack component={Box}>
        <Typography fontStyle={{ color: 'black' }} textAlign="center" paddingTop="5px" level="body-sm">
          Vous n'avez pas de compte
        </Typography>
        <Typography textAlign="center" color="primary" level="body-sm" onClick={() => navigate(RoutesPath.Signup)}>
          Incrivez-vous
        </Typography>
      </Stack>
    </>
  );
};

export default SignUpForm;
