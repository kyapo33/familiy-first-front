import { z } from 'zod';

export const LoginDetailsSchema = z.object({
  email: z.string({ required_error: 'Ce champ est obligatoire' }).email("L'adresse e-mail n'est pas un mail valide"),
  password: z
    .string({ required_error: 'Ce champ est obligatoire' })
    .min(6, 'Le mot de passe doit contenir 6 lettres minimum')
    .refine((password) => /[0-9]/.test(password), 'Le mot de passe doit contenir au moins un chiffre')
    .refine((password) => /[A-Z]/.test(password), 'Le mot de passe doit contenir une majuscule')
    .refine(
      (password) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password),
      'Le mot de passe doit contenir un character spécial (!@#$%^&*()_+{}[]:;<>,.?~\\/-)'
    )
});
