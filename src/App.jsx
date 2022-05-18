import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './styles/App.css'
import { AppRouter } from './routers/AppRouter'

import { UserProvider } from './context/user/UserProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  )
}

export default App
