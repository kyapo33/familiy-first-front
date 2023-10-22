import { FormikErrors, FormikHandlers, FormikValues } from 'formik';
import { SignUpInputDto } from '../../../../../schemas/Interfaces';
import { FC } from 'react';
import InputField from '../../../../components/form/fields/input/InputField';
import { Box, Stack, Typography } from '@mui/joy';

interface PasswordDetailsProps {
  errors: FormikErrors<SignUpInputDto>;
  values: FormikValues;
  handleChange: FormikHandlers['handleChange'];
}

const PasswordDetails: FC<PasswordDetailsProps> = ({ errors, values, handleChange }) => {
  return (
    <Box>
      <Box>
        <Stack component={Typography} fontSize="20px" level="h4">
          Mot de passe
        </Stack>
        <br />
        <Stack component={Typography} fontSize="12px" level="body-md">
          Choisissez un mot de passe qui répond aux critères suivants : <br />
          Le mot de passe doit contenir au moins 6 caractères, qui peuvent être des lettres ou des chiffres. <br />
          Il doit également inclure au moins 1 chiffre, 1 lettre majuscule et 1 caractère spécial. <br />
        </Stack>
        <br />
      </Box>
      <InputField
        error={!!errors.password}
        name="password"
        value={values.password}
        onChange={handleChange}
        type="password"
        placeholder="Mot de passe"
        errorMessage={errors.password}
      />
    </Box>
  );
};

export default PasswordDetails;
