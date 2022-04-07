import React, { useContext } from "react"
import { UserContext } from '../UserContext'
// aca hacemos uso del hoock useContext para acceder al contexto y a su informacion
// la etiqueta pre muestra el texto con cierto formato

export const Home = () => {

  const {user} = useContext(UserContext)

  return(
    <>
    <h1>Home</h1>
    <hr/>
    
    <pre>
      {JSON.stringify(user, null, 3)}
    </pre>

    </>
  )
}