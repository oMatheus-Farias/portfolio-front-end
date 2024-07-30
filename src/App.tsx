import Aos from "aos"
import { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"

import AuthProvider from "./contexts/auth-context"
import AppRoutes from "./routes/routes"

const App = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
