import { z } from 'zod';
const MAX_FILE_SIZE = 30 * 1024 * 1024; // 2MB
const ALLOWED_FORMATS = ['image/jpeg', 'image/png'];
const passwordSchema = z
  .string()
  .min(6, 'Password must be at least 6 characters long')
  .refine(
    (password) =>
      /[0-9]/.test(password) &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[\W_]/.test(password),
    {
      message:
        'Password must contain at least 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character',
    }
  );

const nameSchema = z
  .string()
  .min(1, 'Field is required')
  .refine((value) => value.charAt(0) === value.charAt(0).toUpperCase(), {
    message: 'First letter must be uppercase',
  });

const ageSchema = z.number().positive().min(1, 'Age is required');

const emailSchema = z
  .string()
  .email('Invalid email format')
  .min(1, 'Field is required');

const acceptSchema = z.boolean().refine((val) => val === true, {
  message: 'You must accept the terms and conditions',
});

const selectedCountrySchema = z.string().min(1, 'Selected country is required');

const pictureSchema = z
  .any()
  .refine(
    (files) => files?.[0]?.size <= MAX_FILE_SIZE,
    `Max image size is 5MB.`
  )
  .refine(
    (files) => ALLOWED_FORMATS.includes(files?.[0]?.type),
    'Only .jpg, .jpeg, .png and .webp formats are supported.'
  );

export const signUpSchema = z
  .object({
    name: nameSchema,
    age: ageSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
    gender: z.enum(['male', 'female', 'other']),
    accept: acceptSchema,
    selectedCountry: selectedCountrySchema,
    image: pictureSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });
