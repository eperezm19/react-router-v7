import { Routes, Route, Navigate } from 'react-router'
import { BrowserRouter } from 'react-router'
import AuthLayout from './auth/layout/AuthLayout'
import { LoginPage } from './auth/pages/LoginPage'
import { RegisterPage } from './auth/pages/RegisterPage'
import { Suspense, lazy  } from 'react'
import { sleep } from './lib/sleep'

const ChatLayout = lazy( async() => {
  await sleep(1500)
  return import('./chat/layout/ChatLayout')
})
const ChatPage = lazy( async() => { 
  return import('./chat/pages/ChatPage')
})

const NoChatSelectedPage = lazy( async() => {
  return import('./chat/pages/NoChatSelectedPage')
})

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
        </Route>
        <Route path='/chat' element={
          <Suspense fallback={
            <div className="h-screen w-full flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
            </div>
          }>
            <ChatLayout />
          </Suspense>
        }>
          <Route index element={<NoChatSelectedPage />} />
          <Route path=':chatId' element={<ChatPage />} />
        </Route>
        <Route path='/' element={<Navigate to='/auth' />} />
        <Route path='*' element={<Navigate to='/auth' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
