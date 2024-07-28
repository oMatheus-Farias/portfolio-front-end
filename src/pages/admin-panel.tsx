import { Sidebar } from "@/components/sidebar"

const AdminPanel = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden min-h-full w-72 lg:block">
        <Sidebar />
      </div>

      <section>
        <h1 className="text-white">Admin Panel</h1>
      </section>
    </div>
  )
}

export default AdminPanel
