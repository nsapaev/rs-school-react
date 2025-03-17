import { Link } from 'react-router-dom';
import './App.css';
import { useAppSelector } from './state/hooks';
import { FormInterface } from './features/forms/types';

function App() {
  const forms = useAppSelector((state) => state.forms.forms);

  return (
    <div className="App">
      <Link to={'/uncontrolled-form'}> simple-form </Link>
      <Link to={'/react-hook-form'}> react-hook-form </Link>

      {!!forms.length && (
        <div className="forms">
          {forms.map((form: FormInterface) => (
            <div className="form">
              <div> name: {form.name}</div>
              <div> age: {form.age}</div>
              <div> email: {form.email}</div>
              <div> gender: {form.gender}</div>
              <div> pass: {form.password}</div>
              <div> confirm pass: {form.confirmPassword}</div>
              <div> selected country: {form.selectedCountry}</div>
              {form.image && (
                <div>
                  <img
                    style={{
                      width: '130px',
                      height: '130px',
                    }}
                    src={form.image}
                    alt="avatar"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
