import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Login from './pages/login/login.page'
import Register from './pages/register/register.page'
import Root from './pages/root/root.page'
import { useAppSelector } from './hooks/redux'
import { useEffect } from 'react'

function App() {

  const isAuth = useAppSelector(state => state.userReducer.isAuth);

  useEffect(() => {
    console.log(isAuth);
  }, [isAuth])

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      {!isAuth ?
        <>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </>
        :
        <Route path="/" element={<Root />} />
      }
    </>)
  )


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App