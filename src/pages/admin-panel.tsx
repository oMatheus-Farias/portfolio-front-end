import axios from "axios"
import { useQuery } from "react-query"

import { IProjects } from "@/components/carousel-projects"
import { DialogCreateProject } from "@/components/dialog-create-project"
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
    <div className="flex min-h-screen w-full">
      <div className="hidden min-h-full min-w-72 xl:block">
        <Sidebar />
      </div>

      <div className="w-full">
        <div className="h-[4.375rem] w-full">
          <HeaderAdminPanel />
        </div>

        <section className="mt-20 w-full px-10">
          <div className="flex w-full items-center justify-between">
            {renderProjectsLength({ isLoading, data })}

            <DialogCreateProject />
          </div>

          <TableProjects projects={data ? data : []} />
        </section>
      </div>
    </div>
  )
}

export default AdminPanel
