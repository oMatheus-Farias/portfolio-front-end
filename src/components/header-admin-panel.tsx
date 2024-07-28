import { LogOut } from "lucide-react"

import Logo from "./logo"

const HeaderAdminPanel = () => {
  return (
    <header className="h-full w-full bg-violet-horizontal pb-[1px]">
      <div className="flex h-full w-full items-center justify-between bg-bgDark px-7">
        <h1 className="font-bold text-white">Painel de Controle</h1>

        <Logo className="w-52" />

        {/* FIXME: Add the logout functionality */}
        <LogOut color="#FFF" />
      </div>
    </header>
  )
}

export { HeaderAdminPanel }
