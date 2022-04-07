import { BrowserRouter, Routes , Route } from 'react-router-dom'
// pages
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Logout } from '../pages/Logout'
import { NavBar } from '../components/NavBar'

export const AppRouter = () => {
  return (

    <BrowserRouter>

      <NavBar/>

      <div className='container mt-3'>
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Logout' element={<Logout/>} />
          <Route path='*' element={
            <main className='p-4'>
              <p>
                ERROR 404 RUTA NO EXISTE
              </p>
              <a href='/'>
                Volver al Home
              </a>
            </main>
          } />

        </Routes>
      </div>  
    </BrowserRouter>

  )
}
