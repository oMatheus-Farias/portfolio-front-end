import { PropsWithChildren, useContext } from "react"
import { Navigate } from "react-router-dom"

import { AuthContext } from "@/contexts/auth-context"

const PrivateRoutes = ({ children }: PropsWithChildren) => {
  const signed = JSON.parse(localStorage.getItem("signed") || "false")
  const { loading } = useContext(AuthContext)

  if (loading) {
    return <div></div>
  }

  if (!signed) {
    return <Navigate to="/" />
  }

  return children
}

export default PrivateRoutes
