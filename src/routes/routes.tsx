import { Route, Routes } from "react-router-dom"

import PortfolioPage from "@/pages"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
    </Routes>
  )
}

export default AppRoutes
