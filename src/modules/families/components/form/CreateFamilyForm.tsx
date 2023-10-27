import { Container, Stack, Typography } from '@mui/joy';
import { Backdrop, CircularProgress, Dialog } from '@mui/material';
import { FC } from 'react';
import { useCreateFamilyForm } from './useCreateFamilyForm';
import CustomSnackbar from '../../../../components/snackbar/CustomSnackbar';
import MultiStepForm from '../../../../components/form/MultiStepForm/MultiStepForm';
import { FormModeType } from '../../../../components/form/MultiStepForm/types';
import { CreateFamilyInputDto } from '../../../../schemas/Interfaces';
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';

interface CreateFamilyFormProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateFamilyForm: FC<CreateFamilyFormProps> = ({ open, setOpen }) => {
  const { loading, error, onSubmit, initialValues, steps } = useCreateFamilyForm(setOpen);
  return (
    <>
      <Stack
        component={Fab}
        position={'absolute'}
        bottom={'15px'}
        right={'15px'}
        bgcolor="#0B6BCB"
        color="white"
        size="small"
        aria-label="add"
        onClick={() => setOpen(true)}
      >
        <AddIcon />
      </Stack>
      <CustomSnackbar isOpen={error} severity="error" message="Impossible de créer la famille" />
      <Dialog fullScreen open={open} onClose={() => setOpen(false)}>
        <Stack width="100%" height="100%" paddingTop="16px">
          <Stack component={Typography} textAlign="center" fontSize="15px" level="body-md">
            Choisissez le nom de votre nouvelle famille
          </Stack>
          <Stack width="100%" height="100%" paddingTop="16px">
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
              <CircularProgress color="primary" />
            </Backdrop>
            <MultiStepForm<CreateFamilyInputDto>
              initialValues={initialValues}
              handleSubmit={(values) => onSubmit(values)}
              steps={steps}
              mode={FormModeType.SOLO}
              submitButtonMessage="Enregistrer"
            />
          </Stack>
        </Stack>
      </Dialog>
    </>
  );
};

export default CreateFamilyForm;
