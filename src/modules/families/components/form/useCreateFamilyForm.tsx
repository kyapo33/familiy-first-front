import { toFormikValidationSchema } from 'zod-formik-adapter';
import FamilyDetails from './components/fields/FamilyDetails';
import { FamilyDetailsSchema } from './components/fields/ValidationSchemas';
import { CreateFamilyInputDto } from '../../../../schemas/Interfaces';
import { useCreateFamily } from '../../../../hooks/mutations/useCreateFamily';
import { useQueryClient } from '@tanstack/react-query';

export const useCreateFamilyForm = (setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>) => {
  const queryClient = useQueryClient();
  const createFamilyMutation = useCreateFamily(queryClient);

  const onSubmit = async (values: CreateFamilyInputDto) => {
    console.log(values);
    await createFamilyMutation.mutateAsync(values, {
      onSuccess: () => setOpenDialog(false)
    });
  };

  const steps = [
    {
      component: FamilyDetails,
      validationSchema: toFormikValidationSchema(FamilyDetailsSchema)
    }
  ];

  const initialValues = {
    name: ''
  };

  return {
    onSubmit,
    steps,
    initialValues,
    loading: createFamilyMutation.isPending,
    error: createFamilyMutation.isError,
    success: createFamilyMutation.isSuccess
  };
};
