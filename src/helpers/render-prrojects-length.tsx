import { LoaderCircle } from "lucide-react"

import { IProjects } from "@/components/carousel-projects"

interface RenderProjectsLengthProps {
  isLoading: boolean
  data: IProjects[] | undefined
}

export const renderProjectsLength = ({
  isLoading,
  data,
}: RenderProjectsLengthProps) => {
  return (
    <span className="flex items-center gap-2 text-sm font-semibold text-white sm:text-base">
      Projetos cadastrados:
      {isLoading ? (
        <LoaderCircle color="#FFF" size={16} className="animate-spin" />
      ) : (
        <span>{data?.length}</span>
      )}
    </span>
  )
}
