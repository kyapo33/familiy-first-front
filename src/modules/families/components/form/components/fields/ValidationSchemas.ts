import { z } from 'zod';

export const FamilyDetailsSchema = z.object({
  name: z.string({ required_error: 'Ce champ est obligatoire' }).min(1, 'Ce champ est obligatoire')
});
