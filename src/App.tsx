import './App.css'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import Login from './pages/login/login.page'
import Register from './pages/register/register.page'
import Root from './pages/root/root.page'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { useEffect } from 'react'
import { authAPI } from './services/auth.service'
import { setUser } from './store/reducers/user-slice'
import Dashboard from './pages/dashboard/dashboard'
import Budget from './pages/budget/budget'

function App() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(state => state.userReducer.isAuth);
  const { data, error  } = authAPI.useRefreshQuery(null);

  useEffect(() => {
    if (data) {
      console.log(data);
      if (data?.user) {
        dispatch(setUser({ ...data.user }));
      }
      if (data?.token) {
        localStorage.setItem('token', data.token);
      }
    }
    if (error) {
      console.log(localStorage.getItem('token'));
      localStorage.removeItem('token');
    }
  }, [data, isAuth])

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      {!isAuth ?
        <>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </>
        :
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/budget" element={<Budget />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Route>
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