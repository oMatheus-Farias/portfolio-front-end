import { LogOut } from "lucide-react"
import { useContext } from "react"

import { AuthContext } from "@/contexts/auth-context"

import Logo from "./logo"

const HeaderAdminPanel = () => {
  const { handleLogout } = useContext(AuthContext)

  const handleLogoutClick = () => {
    handleLogout()
  }

  return (
    <header className="h-full w-full bg-violet-horizontal pb-[1px]">
      <div className="flex h-full w-full items-center justify-between bg-bgDark px-7">
        <h1 className="font-bold text-white">Painel de Controle</h1>

        <Logo className="w-52" />

        <button onClick={handleLogoutClick} title="Sair">
          <LogOut className="text-white transition-all duration-200 ease-linear hover:text-secondary" />
        </button>
      </div>
    </header>
  )
}

export { HeaderAdminPanel }
