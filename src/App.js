import { useState } from 'react'
import './App.css';
import { AppRouter } from './routes/AppRouter'
import { UserContext } from './UserContext'
// atravez del user context y el objeto que le pasamos como valor es que ponemos a disposicion los valores que queramos para los distintos componentes aunque sean hermanos, si es algo simple como en este caso se usa context pero si es algo complejo como un carrto es recomendable usar redux

function App() {

  const [user, setUser] = useState({}); 
  
  return (
    <UserContext.Provider value={{
      user,
      setUser
    }}>
      <AppRouter/>

    </UserContext.Provider>
  );
}

export default App;
