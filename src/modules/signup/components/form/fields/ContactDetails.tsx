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

const ContactDetails: FC<ContactDetailsProps> = ({ errors, values, handleChange }) => {
  return (
    <Box>
      <Box>
        <Stack component={Typography} fontSize="23px" level="h4">
          Informations de contact
        </Stack>
        <br />
        <Stack component={Typography} fontSize="15px" level="body-md">
          Veuillez indiquer votre adresse e-mail. <br />
          Le numéro de téléphone portable n'est pas obligatoire. <br />
          Si vous le renseignez, il pourra être consulté par les autres membres de votre famille
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
            error={!!errors.phoneNumber}
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
            type="tel"
            placeholder="Tel"
            errorMessage={errors.phoneNumber}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactDetails;
