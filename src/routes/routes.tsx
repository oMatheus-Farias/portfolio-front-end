import { Route, Routes } from "react-router-dom"

import PortfolioPage from "@/pages"
import ProjectDetail from "@/pages/project-detail"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/projectdetail/:id" element={<ProjectDetail />} />
    </Routes>
  )
}

export default AppRoutes
