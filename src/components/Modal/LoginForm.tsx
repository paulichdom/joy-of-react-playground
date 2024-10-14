import React from 'react';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const id = React.useId();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Login function called');
  }

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <div>
        <label htmlFor={`email-${id}`}>Email</label>
        <input
          type="email"
          id={`email-${id}`}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor={`password-${id}`}>Password</label>
        <input
          type="password"
          id={`password-${id}`}
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default LoginForm;
