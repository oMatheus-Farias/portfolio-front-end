import axios from "axios"
import { useQuery } from "react-query"

import { IProjects } from "@/components/carousel-projects"
import { DialogCreateProject } from "@/components/dialog-create-project"
import { FooterAdminPanel } from "@/components/footer-admin-panel"
import { HeaderAdminPanel } from "@/components/header-admin-panel"
import { Sidebar } from "@/components/sidebar"
import { TableProjects } from "@/components/table-projects"
import { renderProjectsLength } from "@/helpers/render-prrojects-length"

const AdminPanel = () => {
  const { data, isLoading } = useQuery<IProjects[]>(
    "projects",
    async () => {
      return axios
        .get(import.meta.env.VITE_URL, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
          },
        })
        .then((response) => response.data)
        .catch((error) => {
          throw new Error(error)
        })
    },
    {
      refetchOnMount: true,
    },
  )

  return (
    <div className="flex w-full">
      <div className="fixed left-0 top-0 z-10 hidden min-h-screen min-w-72 xl:block">
        <Sidebar />
      </div>

      <div className="w-full xl:ml-72">
        <div className="h-[4.375rem] w-full">
          <HeaderAdminPanel />
        </div>

        <section className="mt-20 w-full px-10">
          <div className="flex w-full flex-col-reverse gap-4 sm:flex-row sm:justify-between md:items-center">
            {renderProjectsLength({ isLoading, data })}

            <DialogCreateProject />
          </div>

          <TableProjects projects={data ? data : []} />
        </section>
        <div className="mt-24 h-[4.375rem] w-full">
          <FooterAdminPanel />
        </div>
      </div>
    </div>
  )
}

export default AdminPanel
