import { FormEvent, useState } from 'react';
export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log({ username, password });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            Username:{' '}
            <input
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}></input>
          </label>
        </div>
        <div>
          <label htmlFor="password">
            {' '}
            Password:{' '}
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}></input>
          </label>
        </div>
        <button style={{ marginTop: '20px' }} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
