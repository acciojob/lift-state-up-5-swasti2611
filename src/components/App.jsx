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
   
      <Login isLogged={isLogged} handleLogin={handleLogin} />: 
     
    
    </> 
  )
}

export default App;