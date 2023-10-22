import { z } from 'zod';
import { compareDates, getCurrentDateInFormat } from '../../SignUpFormHelper';

export const customDateSchema = z
  .string({ required_error: 'Ce champ est obligatoire' })
  .refine((birthdate) => /^(\d{2})\/(\d{2})\/(\d{4})$/.test(birthdate), 'Le format est invalide')
  .refine(
    (birthdate) => compareDates(birthdate, getCurrentDateInFormat()) === -1,
    'La date de naissance doit être antérieure à la date actuelle'
  );

export const PersonalDetailsSchema = z.object({
  firstName: z.string({ required_error: 'Ce champ est obligatoire' }).min(1, 'Ce champ est obligatoire'),
  lastName: z.string({ required_error: 'Ce champ est obligatoire' }).min(1, 'Ce champ est obligatoire'),
  birthdate: customDateSchema
});

export const ContactDetailsSchema = z.object({
  email: z.string({ required_error: 'Ce champ est obligatoire' }).email("L'adresse e-mail n'est pas un mail valide"),
  phoneNumber: z
    .string()
    .refine((phoneNumber) => /^(\+\d{1,3}[- ]?)?\d{10}$/.test(phoneNumber), "Le numéro de téléphone n'est pas valide")
    .optional()
});

export const passwordSchema = z.object({
  password: z
    .string({ required_error: 'Ce champ est obligatoire' })
    .min(6, 'le mot de passe doit contenir 6 lettres minimum')
    .refine((password) => /[0-9]/.test(password), 'le mot de passe doit contenir au moins un chiffre')
    .refine((password) => /[A-Z]/.test(password), 'le mot de passe doit contenir une majuscule')
    .refine(
      (password) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password),
      'le mot de passe doit contenir un character spécial (!@#$%^&*()_+{}[]:;<>,.?~\\/-)'
    )
});
