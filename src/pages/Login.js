import React, { useContext } from "react";
import { UserContext } from '../UserContext';

export const Login = () => {

  const {setUser} = useContext(UserContext);

  const handleClick = () => setUser({
      id : 123,
      name : 'Eric',
      email : 'mail@gmail.com'
  })
  
  return(
    <>
    <h1>Login</h1>
    <hr/>

    <button 
      className="btn btn-primary"
      onClick={handleClick}
    >
      Login
    </button>
    </>
  )
}