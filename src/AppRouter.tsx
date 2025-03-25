import { Routes, Route, Navigate } from 'react-router'
import { BrowserRouter } from 'react-router'
import AuthLayout from './auth/layout/AuthLayout'
import { LoginPage } from './auth/pages/LoginPage'
import { RegisterPage } from './auth/pages/RegisterPage'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
        </Route>
        <Route path='/' element={<Navigate to='/auth' />} />
        <Route path='*' element={<Navigate to='/auth' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
