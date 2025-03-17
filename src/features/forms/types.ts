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
  image: string;
  selectedCountry: string;
}

interface FormsInterface {
  forms: Array<FormInterface>;
  countries: Array<string>;
}

export type { FormsInterface, FormInterface };
