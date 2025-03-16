import { z } from 'zod';

const passwordSchema = z
  .string()
  .refine(
    (password) =>
      /[0-9]/.test(password) &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[\W_]/.test(password),
    {
      message:
        'Password must contain at least 6 characters, including an uppercase letter, a lowercase letter, a number, and a special character',
    }
  );
const nameSchema = z
  .string()
  .min(1, 'Field is required')
  .refine(
    (value) => {
      return value.charAt(0) === value.charAt(0).toUpperCase();
    },
    {
      message: 'First letter must be uppercase',
    }
  );
const ageSchema = z.number().positive().min(1, 'Field is required');
const emailSchema = z.string().email().min(1, 'Field is required');
const acceptScheme = z.boolean().refine((val) => val === true, {
  message: 'You must accept the terms',
});
const selectedCountryScheme = z.string().min(1, 'Selected country is required');

export const userSchema = z
  .object({
    name: nameSchema,
    age: ageSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
    gender: z.string(),
    accept: acceptScheme,
    selectedCountry: selectedCountryScheme,
  })
  .refine(
    (data) => {
      console.log('data', data);
      return data.password === data.confirmPassword;
    },
    {
      message: 'Passwords must match',
      path: ['confirmPassword'],
    }
  );
