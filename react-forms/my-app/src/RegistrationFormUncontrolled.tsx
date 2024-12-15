import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log({ username: data.username, password: data.password });
    form.reset();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            Username: <input id="username" name="username"></input>
          </label>
        </div>
        <div>
          <label htmlFor="password">
            {' '}
            Password:{' '}
            <input id="password" name="password" type="password"></input>
          </label>
        </div>
        <button style={{ marginTop: '20px' }} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
