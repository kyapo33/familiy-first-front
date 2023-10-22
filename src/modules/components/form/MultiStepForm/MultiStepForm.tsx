import { FormikWizard, Step } from 'formik-wizard-form';
import { FormikValues } from 'formik';
import { Box, Button, Container, IconButton, Stack } from '@mui/joy';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface MultiStepFormProps<T> {
  initialValues: T;
  handleSubmit: (values: T) => void;
  steps: Step[];
}

const MultiStepForm = <T extends FormikValues>({ initialValues, handleSubmit, steps }: MultiStepFormProps<T>) => {
  return (
    <FormikWizard
      initialValues={initialValues}
      onSubmit={(values: any) => handleSubmit(values)}
      validateOnNext
      activeStepIndex={0}
      steps={steps}
    >
      {({ renderComponent, handlePrev, handleNext, isPrevDisabled, isLastStep }) => (
        <Stack component={Container} maxWidth="md">
          {renderComponent()}
          <Box>
            {
              <Stack flexDirection="row" display="flex" paddingTop="20px" justifyContent="space-between">
                <IconButton variant="solid" color="primary" size="sm" disabled={isPrevDisabled} onClick={handlePrev}>
                  <ArrowBackIosNewIcon />
                </IconButton>
                <IconButton variant="solid" color="primary" size="sm" disabled={isLastStep} onClick={handleNext}>
                  <ArrowForwardIosIcon />
                </IconButton>
              </Stack>
            }
            {isLastStep && (
              <Stack flexDirection="row" display="flex" paddingTop="20px" justifyContent="center">
                <Button fullWidth size="md" onClick={handleNext}>
                  {'Créer mon Compte'}
                </Button>
              </Stack>
            )}
          </Box>
        </Stack>
      )}
    </FormikWizard>
  );
};

export default MultiStepForm;
