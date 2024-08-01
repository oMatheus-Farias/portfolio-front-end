import { LayoutGrid } from "lucide-react"

import { AvatarSidebar } from "./avatar-sidebar"
import { Separator } from "./ui/separator"

const Sidebar = () => {
  return (
    <aside className="h-screen w-full bg-violet-vertical pr-[1px]">
      <div className="flex h-full w-full flex-col items-center bg-bgDark px-8">
        <div className="mt-16 flex w-full flex-col gap-14">
          <AvatarSidebar />

          <Separator orientation="horizontal" className="w-full bg-white" />

          <div className="flex w-full cursor-pointer gap-2 rounded bg-purpleClean px-6 py-2 transition-all duration-200 ease-linear hover:bg-opacity-80">
            <LayoutGrid color="#FFF" />
            <span className="font-semibold text-white">Projetos</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export { Sidebar }
