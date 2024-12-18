import { useState } from 'react';
import './ValidatedInput.css';
import { IoIosCheckmark } from 'react-icons/io';
import { TbLetterX } from 'react-icons/tb';

export function ValidatedInput() {
  const [value, setValue] = useState('');
  function validationCheck() {
    let validation = '';
    if (value.length === 0) {
      validation = 'A password is required.';
    } else if (value.length < 8) {
      validation = 'Your password is too short';
    }
    return validation;
  }
  function errorIcon() {
    if (value.length >= 8)
      return <IoIosCheckmark className="icons" color="green" size={60} />;
    return <TbLetterX size={30} id="x" className="icons" color="red" />;
  }
  const icon = errorIcon();
  const error = validationCheck();
  return (
    <>
      <div className="wrapper">
        <label htmlFor="password">
          Password:{' '}
          <input
            name="password"
            type="password"
            value={value}
            required
            onChange={(e) => setValue(e.target.value)}></input>
          <div className="error-icon">{icon}</div>
        </label>
        <div className="validation-message">{error}</div>
      </div>
    </>
  );
}
