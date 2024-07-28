import { HeaderAdminPanel } from "@/components/header-admin-panel"
import { Sidebar } from "@/components/sidebar"

const AdminPanel = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden min-h-full min-w-72 lg:block">
        <Sidebar />
      </div>

      <section className="w-full">
        <div className="h-[4.375rem] w-full">
          <HeaderAdminPanel />
        </div>
      </section>
    </div>
  )
}

export default AdminPanel
