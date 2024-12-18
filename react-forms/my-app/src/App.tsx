import { RegistrationFormUncontrolled } from './RegistrationFormUncontrolled';
import { RegistrationFormControlled } from './RegistrationFormControlled';
import './App.css';

function App() {
  return (
    <>
      <h1>Uncontrolled</h1>
      <RegistrationFormUncontrolled />
      <h1>Controlled </h1>
      <RegistrationFormControlled />
    </>
  );
}

export default App;
