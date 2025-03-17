import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import type { FieldValues } from 'react-hook-form';
import { FormInterface } from '../../features/forms/types';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { signUpSchema } from '../../helpers/zodSchemas/signUpSchema';
import { setReactHookForm } from '../../features/forms/forms';
import { fileToBase64 } from '../../helpers/fileToBase64';

type TSignUpSchema = z.infer<typeof signUpSchema>;

const ReactHookForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const reactHookForm: FormInterface = useAppSelector(
    (state) => state.forms.reactHookForm
  );
  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
    mode: 'all',
  });

  const onSubmit = async (data: TSignUpSchema) => {
    const image = await fileToBase64(data.image[0]);

    dispatch(setReactHookForm({ ...data, image: image } as FormInterface ));
    navigate('/');
    reset();
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <b>React hook Form </b>
        </div>
        <div className="block">
          <label>
            <b> Name </b>
            <input
              {...register('name')}
              name="name"
              autoComplete="username"
              type="text"
            />
            {errors.name && (
              <div className="error-message">{errors.name.message}</div>
            )}
          </label>
        </div>
        <div className="block">
          <label>
            <b>Age</b>
            <input
              {...register('age', {
                setValueAs: (value) =>
                  value === '' ? undefined : Number(value),
              })}
              name="age"
              type="number"
            />
            {errors.age && (
              <div className="error-message">{errors.age.message}</div>
            )}
          </label>
        </div>
        <div className="block">
          <label>
            <b> Email </b>
            <input
              {...register('email')}
              name="email"
              autoComplete="email"
              type="email"
            />
            {errors.email && (
              <div className="error-message">{errors.email.message}</div>
            )}
          </label>
        </div>
        <div className="block">
          <label>
            <b>Password</b>
            <input {...register('password')} name="password" type="password" />
            {errors.password && (
              <div className="error-message">{errors.password.message}</div>
            )}
          </label>
        </div>
        <div className="block">
          <label>
            <b>Confirm password</b>
            <input
              {...register('confirmPassword')}
              name="confirmPassword"
              type="password"
            />
            {errors.confirmPassword && (
              <div className="error-message">
                {errors.confirmPassword.message}
              </div>
            )}
          </label>
        </div>
        <div className="block">
          <legend>
            <b>Select Gender</b>
          </legend>
          <div className="radio-block">
            <input
              {...register('gender')}
              defaultChecked
              value="male"
              name="gender"
              type="radio"
              id="male"
            />
            <label htmlFor="male"> Male</label>
          </div>
          <div className="radio-block">
            <input
              {...register('gender')}
              value={'female'}
              name="gender"
              type="radio"
              id="female"
            />
            <label htmlFor="female"> Female</label>
          </div>
        </div>
        <div className="block">
          <label htmlFor="accept">
            <b>Conditions agreement</b>
          </label>
          <input {...register('accept')} type="checkbox" name="accept" />
          {errors.accept && (
            <div className="error-message">{errors.accept.message}</div>
          )}
        </div>
        <div className="block">
          <input {...register('image')} type="file" name="image" />
          {errors.image?.message && (
            <p className="error-message">{String(errors.image.message)}</p>
          )}
        </div>
        <div className="block">
          <legend>
            <b>Choose your Country</b>
          </legend>
          <input
            {...register('selectedCountry')}
            type="text"
            name="selectedCountry"
            list="countries"
          />
          {errors.selectedCountry && (
            <div className="error-message">
              {errors.selectedCountry.message}
            </div>
          )}

          <datalist id="countries">
            {reactHookForm.countries?.map((country) => {
              return <option value={country}>{country}</option>;
            })}
          </datalist>
        </div>
        <div className="block">
          <button type="submit" disabled={Object.keys(errors).length > 0}>
            Submit
          </button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
};

export { ReactHookForm };
