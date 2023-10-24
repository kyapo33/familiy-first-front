import { FormikErrors, FormikHandlers, FormikValues } from 'formik';
import { FC } from 'react';
import { SignUpInputDto } from '../../../../../schemas/Interfaces';
import { Box, Grid, Stack, Typography } from '@mui/joy';
import InputField from '../../../../../components/form/fields/input/InputField';

interface ContactDetailsProps {
  errors: FormikErrors<SignUpInputDto>;
  values: FormikValues;
  handleChange: FormikHandlers['handleChange'];
}

const LoginDetails: FC<ContactDetailsProps> = ({ errors, values, handleChange }) => {
  return (
    <Box>
      <Box>
        <Stack component={Typography} fontSize="23px" level="h4">
          Connexion à votre espace utilisateur
        </Stack>
        <br />
      </Box>
      <Grid container rowSpacing={3} spacing={2}>
        <Grid xs={12}>
          <InputField
            error={!!errors.email}
            name="email"
            value={values.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            errorMessage={errors.email}
          />
        </Grid>
        <Grid xs={12}>
          <InputField
            error={!!errors.password}
            name="password"
            value={values.password}
            onChange={handleChange}
            type="password"
            placeholder="Mot de passe"
            errorMessage={errors.password}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginDetails;
