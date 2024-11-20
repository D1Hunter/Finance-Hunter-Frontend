import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Login from './pages/login/login.page'
import Register from './pages/register/register.page'
import Root from './pages/root/root.page'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { useEffect } from 'react'
import { authAPI } from './services/auth.service'
import { setUser } from './store/reducers/user'

function App() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(state => state.userReducer.isAuth);
  const { data,isError } = authAPI.useRefreshQuery(null);

  useEffect(() => {
    if (data) {
      if (data?.user) {
        dispatch(setUser({ ...data.user }));
      }
      if (data?.token) {
        localStorage.setItem('token', data.token);
      }
    }
    if(isError){
      localStorage.removeItem('token');
    }
  }, [data, isAuth])

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