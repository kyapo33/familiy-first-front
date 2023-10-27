import { FormikErrors, FormikHandlers, FormikValues } from 'formik';
import { FC } from 'react';
import { Box, Grid } from '@mui/joy';
import { CreateFamilyInputDto } from '../../../../../../schemas/Interfaces';
import InputField from '../../../../../../components/form/fields/input/InputField';

interface FamilyDetailsProps {
  errors: FormikErrors<CreateFamilyInputDto>;
  values: FormikValues;
  handleChange: FormikHandlers['handleChange'];
}

const FamilyDetails: FC<FamilyDetailsProps> = ({ errors, values, handleChange }) => {
  return (
    <Box>
      <Grid container rowSpacing={3} spacing={2}>
        <Grid xs={12}>
          <InputField
            error={!!errors.name}
            name="name"
            value={values.name}
            onChange={handleChange}
            type="test"
            placeholder="Nom de la famille"
            errorMessage={errors.name}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FamilyDetails;
