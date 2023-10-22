import { FormikErrors, FormikHandlers, FormikValues } from 'formik';
import { FC } from 'react';
import { SignUpInputDto } from '../../../../../schemas/Interfaces';
import InputField from '../../../../components/form/fields/input/InputField';
import { Box, Typography, Grid, Stack } from '@mui/joy';

interface PersonalDetailsProps {
  errors: FormikErrors<SignUpInputDto>;
  values: FormikValues;
  handleChange: FormikHandlers['handleChange'];
}

const PersonalDetails: FC<PersonalDetailsProps> = ({ errors, values, handleChange }) => {
  console.log(errors);
  return (
    <Box>
      <Box>
        <Stack fontSize="20px" component={Typography} level="h4">
          Informations personnelles
        </Stack>
        <br />
        <Stack fontSize="12px" lineHeight="1.3em" component={Typography} level="body-md">
          Indiquez votre nom de tous les jours et votre date de naissance.
        </Stack>
        <br />
      </Box>
      <Grid container rowSpacing={3} spacing={2}>
        <Grid xs={12}>
          <InputField
            error={!!errors.firstName}
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            type="text"
            placeholder="Prénom"
            errorMessage={errors.firstName}
          />
        </Grid>
        <Grid xs={12}>
          <InputField
            error={!!errors.firstName}
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            type="text"
            placeholder="Nom de famille"
            errorMessage={errors.lastName}
          />
        </Grid>
        <Grid xs={12}>
          <InputField
            error={!!errors.birthdate}
            name="birthdate"
            value={values.birthdate}
            onChange={handleChange}
            type="text"
            placeholder="Date de naissance"
            errorMessage={errors.birthdate}
            helperText="Veuillez saisir la date au format JJ/MM/AAAA"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalDetails;