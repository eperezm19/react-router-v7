// import  AuthLayout  from "./auth/layout/AuthLayout"
import ChatLayout from "./chat/layout/ChatLayout"
import ChatPage from "./chat/pages/ChatPage"

function App() {

  return (
    <div>
      {/* <AuthLayout /> */}
      <ChatLayout >
        <ChatPage />
      </ChatLayout>
    </div>
  )
}

export default App
