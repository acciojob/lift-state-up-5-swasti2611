import React, { useState } from 'react';

const Login = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    props.onLogin(); // Call the onLogin function passed from the parent component
    setSubmitted(true)
  }
  if (submitted )  {
    return <p>You are logged in !</p>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          UserName:
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;