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
    <h1>Parent Component</h1>
    { !isLogged? 
      <Login isLogged={isLogged} handleLogin={handleLogin} />: <p>you are loged in</p>
     
    }
    </> 
  )
}

export default App;