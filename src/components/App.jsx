import React, { useState } from "react";
import './../styles/App.css';
import Login from "./Login.jsx";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogin() {
    setIsLogged(true);
    setLoggedIn(true);
  }

  return (
    <>
      <Login isLogged={isLogged} onLogin={handleLogin} />
     
      <h1>Hello</h1>
    </> 
  )
}

export default App;