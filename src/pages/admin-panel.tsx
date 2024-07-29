import { Plus } from "lucide-react"

import { HeaderAdminPanel } from "@/components/header-admin-panel"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"

const AdminPanel = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden min-h-full min-w-72 lg:block">
        <Sidebar />
      </div>

      <div className="w-full">
        <div className="h-[4.375rem] w-full">
          <HeaderAdminPanel />
        </div>

        <section className="mt-20 w-full px-10">
          <div className="flex w-full items-center justify-between">
            <span className="font-semibold text-white">
              Projetos cadastrados: 3
            </span>

            <Button className="flex items-center justify-center gap-2 rounded-full bg-purpleClean px-5 py-5 text-lg font-medium text-white shadow-md transition-all duration-200 ease-linear hover:bg-secondary">
              <Plus size={16} />
              Cadastrar
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AdminPanel
