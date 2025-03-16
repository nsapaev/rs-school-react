import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { setUncontrolledForm } from '../../features/forms/forms';
import { FormInterface } from '../../features/forms/types';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { userSchema } from './helpers';

import './style.css';

const UncontrolledForm = () => {
  const dispatch = useAppDispatch();
  const uncontrolledFormData = useAppSelector(
    (state) => state.forms.uncontrolledForm
  );

  const refs = {
    nameRef: useRef<HTMLInputElement>(null),
    ageRef: useRef<HTMLInputElement>(null),
    emailRef: useRef<HTMLInputElement>(null),
    genderRef1: useRef<HTMLInputElement>(null),
    genderRef2: useRef<HTMLInputElement>(null),
    passwordRef: useRef<HTMLInputElement>(null),
    acceptRef: useRef<HTMLInputElement>(null),
    uploadFileRef: useRef<HTMLInputElement>(null),
    selectedCountryRef: useRef<HTMLInputElement>(null),
    submitButtonRef: useRef<HTMLButtonElement>(null),
    successSubmittedFormMessageRef: useRef<HTMLDivElement>(null),
    loadingRef: useRef<HTMLDivElement>(null),
    formRef: useRef<HTMLFormElement>(null),
    confirmPasswordRef: useRef<HTMLInputElement>(null),
  };

  useEffect(() => {
    if (refs.submitButtonRef.current) {
      refs.submitButtonRef.current.disabled = true;
    }
    if (refs.successSubmittedFormMessageRef.current) {
      refs.successSubmittedFormMessageRef.current.style.display = 'none';
    }
    if (refs.loadingRef.current) {
      refs.loadingRef.current.style.display = 'none';
    }
  }, []);

  const changeSubmitButtonState = () => {
    const disabledButton =
      !!refs.nameRef.current?.value.trim() &&
      !!refs.nameRef.current?.value.trim() &&
      !!refs.emailRef.current?.value.trim() &&
      !!(
        refs.genderRef1.current?.checked || refs.genderRef2.current?.checked
      ) &&
      !!refs.passwordRef.current?.value.trim() &&
      !!refs.confirmPasswordRef.current?.value.trim() &&
      !!refs.acceptRef.current?.checked &&
      !!refs.uploadFileRef.current?.files![0] &&
      !!refs.selectedCountryRef.current?.value.trim();

    if (refs.submitButtonRef.current) {
      refs.submitButtonRef.current.disabled = !disabledButton;
    }
  };

  const fetch = async (data: FormInterface) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        dispatch(setUncontrolledForm(data));
        return resolve('Everything is good');
      }, 1500);
    });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sendData: FormInterface = {
      name: (refs.nameRef.current?.value || '') as string,
      age: +refs.ageRef.current!.value || NaN,
      email: (refs.emailRef.current?.value || '') as string,
      accept: refs.acceptRef.current?.checked as boolean,
      gender: refs.genderRef1.current?.checked ? 'male' : 'female',
      selectedCountry: (refs.selectedCountryRef.current?.value || '') as string,
      image: refs.uploadFileRef.current?.files![0] as File | null,
      password: refs.passwordRef.current?.value as string,
      confirmPassword: refs.confirmPasswordRef.current?.value as string,
    };
    const validationResult = userSchema.safeParse(sendData);

    if (!validationResult.success) {
      const errors = validationResult.error.format();

      if (errors.name) {
        const ref = refs.nameRef.current;
        const errorElement = ref && ref.nextElementSibling;
        if (errorElement) {
          errorElement.innerHTML = errors.name
            ? errors.name._errors.join(', ')
            : '';
        }
      } else {
        const ref = refs.nameRef.current;
        const errorElement = ref && ref.nextElementSibling;
        if (errorElement) {
          errorElement.innerHTML = '';
        }
      }
      if (errors.email) {
        const ref = refs.emailRef.current;
        const errorElement = ref && ref.nextElementSibling;
        if (errorElement) {
          errorElement.innerHTML = errors.email
            ? errors.email._errors.join(', ')
            : '';
        }
      } else {
        const ref = refs.emailRef.current;
        const errorElement = ref && ref.nextElementSibling;
        if (errorElement) {
          errorElement.innerHTML = '';
        }
      }

      if (errors.age) {
        const ref = refs.ageRef.current;
        const errorElement = ref && ref.nextElementSibling;
        if (errorElement) {
          errorElement.innerHTML = errors.age
            ? errors.age._errors.join(', ')
            : '';
        }
      } else {
        const ref = refs.ageRef.current;
        const errorElement = ref && ref.nextElementSibling;
        if (errorElement) {
          errorElement.innerHTML = '';
        }
      }
      if (errors.password) {
        const ref = refs.passwordRef.current;
        const errorElement = ref && ref.nextElementSibling;
        if (errorElement) {
          errorElement.innerHTML = errors.password
            ? errors.password._errors.join(', ')
            : '';
        }
      } else {
        const ref = refs.passwordRef.current;
        const errorElement = ref && ref.nextElementSibling;
        if (errorElement) {
          errorElement.innerHTML = '';
        }
      }
      if (errors.confirmPassword) {
        const ref = refs.confirmPasswordRef.current;
        const errorElement = ref && ref.nextElementSibling;
        if (errorElement) {
          errorElement.innerHTML = errors.confirmPassword
            ? errors.confirmPassword._errors.join(', ')
            : '';
        }
      } else {
        const ref = refs.confirmPasswordRef.current;
        const errorElement = ref && ref.nextElementSibling;
        if (errorElement) {
          errorElement.innerHTML = '';
        }
      }
      if (errors.gender) {
        const ref = refs.genderRef1.current;
        const errorElement = ref && ref.nextElementSibling;
        if (errorElement) {
          errorElement.innerHTML = errors.gender
            ? errors.gender._errors.join(', ')
            : '';
        }
      } else {
        const ref = refs.genderRef1.current;
        const errorElement = ref && ref.nextElementSibling;
        if (errorElement) {
          errorElement.innerHTML = '';
        }
      }
      if (errors.accept) {
        const ref = refs.acceptRef.current;
        const errorElement = ref && ref.nextElementSibling;
        if (errorElement) {
          errorElement.innerHTML = errors.accept
            ? errors.accept._errors.join(', ')
            : '';
        }
      } else {
        const ref = refs.acceptRef.current;
        const errorElement = ref && ref.nextElementSibling;
        if (errorElement) {
          errorElement.innerHTML = '';
        }
      }
      if (errors.selectedCountry) {
        const ref = refs.selectedCountryRef.current;
        const errorElement = ref && ref.nextElementSibling;
        if (errorElement) {
          errorElement.innerHTML = errors.selectedCountry
            ? errors.selectedCountry._errors.join(', ')
            : '';
        }
      } else {
        const ref = refs.selectedCountryRef.current;
        const errorElement = ref && ref.nextElementSibling;
        if (errorElement) {
          errorElement.innerHTML = '';
        }
      }
      return;
    } else {
      if (refs.formRef.current) {
        refs.formRef.current.style.display = 'none';
      }
      if (refs.loadingRef.current) {
        refs.loadingRef.current.style.display = 'block';
      }

      const message = fetch(sendData);

      message.then(() => {
        if (refs.loadingRef.current) {
          refs.loadingRef.current.style.display = 'none';
        }
        if (refs.successSubmittedFormMessageRef.current) {
          refs.successSubmittedFormMessageRef.current.style.display = 'block';
        }
      });
    }
  };

  return (
    <div className="wrapper">
      <form ref={refs.formRef} onSubmit={submitHandler}>
        <div>
          <b>Uncontrolled Form </b>
        </div>
        <div className="block">
          <label>
            <b> Name </b>
            <input
              onChange={changeSubmitButtonState}
              ref={refs.nameRef}
              name="username"
              autoComplete="username"
              type="text"
            />
            <div className="error-message"></div>
          </label>
        </div>
        <div className="block">
          <label>
            <b>Age</b>
            <input
              onChange={changeSubmitButtonState}
              ref={refs.ageRef}
              name="age"
              type="number"
            />
            <div className="error-message"></div>
          </label>
        </div>
        <div className="block">
          <label>
            <b> Email </b>
            <input
              onChange={changeSubmitButtonState}
              ref={refs.emailRef}
              name="email"
              autoComplete="email"
              type="email"
            />
            <div className="error-message"></div>
          </label>
        </div>
        <div className="block">
          <label>
            <b>Password</b>
            <input
              onChange={changeSubmitButtonState}
              ref={refs.passwordRef}
              name="password"
              type="password"
            />
            <div className="error-message"></div>
          </label>
        </div>
        <div className="block">
          <label>
            <b>Confirm password</b>
            <input
              onChange={changeSubmitButtonState}
              ref={refs.confirmPasswordRef}
              name="confirmPassword"
              type="password"
            />
            <div className="error-message"></div>
          </label>
        </div>
        <div className="block">
          <legend>
            <b>Select Gender</b>
          </legend>
          <div className="radio-block">
            <input
              onChange={changeSubmitButtonState}
              ref={refs.genderRef1}
              name="gender"
              type="radio"
              id="male"
              value="male"
            />
            <div className="error-message"></div>

            <label htmlFor="male"> Male</label>
          </div>
          <div className="radio-block">
            <input
              onChange={changeSubmitButtonState}
              ref={refs.genderRef2}
              name="gender"
              type="radio"
              id="female"
              value="female"
            />
            <label htmlFor="female"> Female</label>
          </div>
        </div>
        <div className="block">
          <label htmlFor="accept">
            <b>Conditions agreement</b>
          </label>
          <input
            onChange={changeSubmitButtonState}
            ref={refs.acceptRef}
            type="checkbox"
            name="accept"
          />
          <div className="error-message"></div>
        </div>
        <div className="block">
          <input
            onChange={changeSubmitButtonState}
            ref={refs.uploadFileRef}
            type="file"
            name="image"
            accept="image/png, image/jpeg"
          />
        </div>
        <div className="block">
          <legend>
            <b>Choose your Country</b>
          </legend>
          <input
            name="selectedCountry"
            type="text"
            list="countries"
            ref={refs.selectedCountryRef}
          />
          <div className="error-message"></div>
          <datalist id="countries">
            {uncontrolledFormData.countries?.map((country) => {
              return <option value={country}>{country}</option>;
            })}
          </datalist>
        </div>
        <div className="block">
          <button ref={refs.submitButtonRef} type="submit">
            Submit
          </button>
          <button type="reset">Reset</button>
        </div>
      </form>

      <div ref={refs.successSubmittedFormMessageRef}>
        Form submitted <Link to={'/'}>Back to main page</Link>
      </div>

      <div ref={refs.loadingRef}>Loading...</div>
    </div>
  );
};

export { UncontrolledForm };
