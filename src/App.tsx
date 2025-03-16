import { Link } from 'react-router-dom';
import './App.css';
import { useAppSelector } from './state/hooks';
import { FormInterface } from './features/forms/types';

function App() {
  const uncontrolledForm: FormInterface = useAppSelector(
    (state) => state.forms.uncontrolledForm
  );

  console.log('uncontrolledForm', uncontrolledForm);

  return (
    <div className="App">
      <Link to={'/uncontrolled-form'}> simple-form </Link>
      <Link to={'/react-hook-form'}> react-hook-form </Link>

      {
        <div className="uncontrolled-form">
          <b>Uncontrolled form </b>
          <div> name: {uncontrolledForm.name}</div>
          <div> age: {uncontrolledForm.age}</div>
          <div> email: {uncontrolledForm.email}</div>
          <div> gender: {uncontrolledForm.gender}</div>
          <div> pass: {uncontrolledForm.password}</div>
          <div> confirm pass: {uncontrolledForm.confirmPassword}</div>
          <div> selected country: {uncontrolledForm.selectedCountry}</div>
          <div> countries: {uncontrolledForm.countries?.join(', ')}</div>
        </div>
      }

      {
        <div className="controlled-form">
          <b>Controlled form </b>
          <div> name: {uncontrolledForm.name}</div>
          <div> age: {uncontrolledForm.age}</div>
          <div> email: {uncontrolledForm.email}</div>
          <div> gender: {uncontrolledForm.gender}</div>
          <div> pass: {uncontrolledForm.password}</div>
          <div> confirm pass: {uncontrolledForm.confirmPassword}</div>
          <div> selected country: {uncontrolledForm.selectedCountry}</div>
          <div> countries: {uncontrolledForm.countries?.join(', ')}</div>
        </div>
      }
    </div>
  );
}

export default App;
