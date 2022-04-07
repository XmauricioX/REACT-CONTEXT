import { useContext } from "react"
import { UserContext } from '../UserContext'

export const Logout = () => {

  const {user, setUser} = useContext(UserContext);

  const handleClick = () => setUser({})

  return(
    <>
    <h1>Logout</h1>
    <hr/>

    <pre>
      {JSON.stringify(user, null, 3)}
    </pre>

    <button 
      className="btn btn-secondary"
      onClick={handleClick}
    >
      Logout
    </button>
    </>
  )
}