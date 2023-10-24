import { FormikWizard, Step } from 'formik-wizard-form';
import { FormikValues } from 'formik';
import { Box, Button, Container, IconButton, Stack } from '@mui/joy';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router';
import { FormModeType } from './types';

interface MultiStepFormProps<T> {
  initialValues: T;
  handleSubmit: (values: T) => void;
  steps: Step[];
  mode: FormModeType;
}

const MultiStepForm = <T extends FormikValues>({ initialValues, handleSubmit, steps, mode }: MultiStepFormProps<T>) => {
  const navigate = useNavigate();

  return (
    <FormikWizard
      initialValues={initialValues}
      onSubmit={(values: any) => handleSubmit(values)}
      validateOnNext
      activeStepIndex={0}
      steps={steps}
    >
      {({ renderComponent, handlePrev, handleNext, isLastStep, isFirstStep }) => (
        <Stack component={Container} maxWidth="md">
          {renderComponent()}
          <Box>
            {mode === FormModeType.SIGNUP && (
              <Stack flexDirection="row" display="flex" paddingTop="20px" justifyContent="space-between">
                <IconButton
                  variant="solid"
                  color="primary"
                  size="sm"
                  onClick={!isFirstStep ? handlePrev : () => navigate(-1)}
                >
                  <ArrowBackIosNewIcon />
                </IconButton>
                <IconButton variant="solid" color="primary" size="sm" disabled={isLastStep} onClick={handleNext}>
                  <ArrowForwardIosIcon />
                </IconButton>
              </Stack>
            )}
            {isLastStep && (
              <Stack flexDirection="row" display="flex" paddingTop="20px" justifyContent="center">
                <Button fullWidth size="md" onClick={handleNext}>
                  {mode === FormModeType.SIGNUP ? 'Créer mon compte' : 'Se connecter'}
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
