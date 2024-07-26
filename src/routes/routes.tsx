import { Route, Routes } from "react-router-dom"

import PortfolioPage from "@/pages"
import AdminLogin from "@/pages/admin-login"
import ProjectDetail from "@/pages/project-detail"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/projectdetail/:id" element={<ProjectDetail />} />
      <Route path="/adminlogin/:password" element={<AdminLogin />} />
    </Routes>
  )
}

export default AppRoutes
