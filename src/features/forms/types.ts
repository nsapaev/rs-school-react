interface CountryStateInterface {
  countries: string[];
  selectedCountry: string | null;
}

interface FormInterface {
  name: string;
  age: number | null;
  email: string;
  password: string;
  confirmPassword: string;
  gender: 'male' | 'female';
  accept: boolean;
  image: File | null;
  selectedCountry: string;
  countries?: string[];
}

interface FormsInterface {
  reactHookForm: FormInterface;
  uncontrolledForm: FormInterface;
}

export type { FormsInterface, FormInterface };
