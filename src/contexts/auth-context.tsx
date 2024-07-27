import axios from "axios"
import { createContext, PropsWithChildren, useState } from "react"
import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"

interface AuthContextData {
  user: UserData | null
  loading: boolean
  handleLogin: ({ email, password }: LoginData) => void
}

interface LoginData {
  email: string
  password: string
}

interface UserData {
  id: string
  firstName: string
  lastName: string
  email: string
  token: string
}

export const AuthContext = createContext({} as AuthContextData)

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserData | null>(null)
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: async ({ email, password }: LoginData) => {
      return axios
        .post(import.meta.env.VITE_URL_AUTH_USER, {
          email,
          password,
        })
        .then((response) => response.data)
    },
    onSuccess: (data) => {
      setUser(data)
      alert("Login efetuado com sucesso!")
      navigate("/adminpanel")
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      if (error.response.status === 404) {
        alert("E-mail ou senha inválidos.")
        return
      }

      return alert("Algo deu errado, tente novamente.")
    },
  })
  const loading = mutation.isLoading

  const handleLogin = ({ email, password }: LoginData) => {
    mutation.mutate({ email, password })
  }

  return (
    <AuthContext.Provider value={{ user, loading, handleLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
