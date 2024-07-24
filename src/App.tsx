import { BrowserRouter } from "react-router-dom"

import AppRoutes from "./routes/routes"

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
