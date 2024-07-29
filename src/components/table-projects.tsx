import { Pencil, Trash } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { IProjects } from "./carousel-projects"
import { Card, CardContent } from "./ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"

interface TableProjectsProps {
  projects: IProjects[]
}

const TableProjects = ({ projects }: TableProjectsProps) => {
  return (
    <Card className="mt-8 w-full rounded-[10px] border border-secondary py-5 text-white">
      <CardContent className="pb-0">
        <Table>
          <TableHeader>
            <TableRow className="text-purpleClean">
              <TableHead className="font-semibold text-white">
                Projeto
              </TableHead>
              <TableHead className="font-semibold text-white">
                Descrição
              </TableHead>
              <TableHead className="font-semibold text-white">
                Imagens
              </TableHead>
              <TableHead className="font-semibold text-white">
                Link repo
              </TableHead>
              <TableHead className="font-semibold text-white">
                Link projeto
              </TableHead>
              <TableHead className="font-semibold text-white">
                Tecnologias
              </TableHead>
              <TableHead className="text-right font-semibold text-white">
                Editar ou excluir
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects?.map((project) => (
              <TableRow key={project.id}>
                <TableCell
                  className="max-w-12 overflow-hidden text-ellipsis text-nowrap"
                  title={project.name}
                >
                  {project.name}
                </TableCell>
                <TableCell
                  className="max-w-12 overflow-hidden text-ellipsis text-nowrap"
                  title={project.description}
                >
                  {project.description}
                </TableCell>
                <TableCell
                  className="max-w-12 overflow-hidden text-ellipsis text-nowrap"
                  title={`${project.imagesUrl[0]}, ${project.imagesUrl[1]}`}
                >
                  {project.imagesUrl}
                </TableCell>
                <TableCell
                  className="max-w-12 overflow-hidden text-ellipsis text-nowrap"
                  title={project.repositoryUrl}
                >
                  {project.repositoryUrl}
                </TableCell>
                <TableCell
                  className="max-w-12 overflow-hidden text-ellipsis text-nowrap"
                  title={project.projectUrl}
                >
                  {project.projectUrl}
                </TableCell>
                <TableCell
                  className="max-w-12 overflow-hidden text-ellipsis text-nowrap"
                  title={project.technologies.join(", ")}
                >
                  {project.technologies.join(", ")}
                </TableCell>
                <TableCell className="flex justify-end gap-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-white transition-all duration-200 ease-linear hover:text-secondary">
                        <Pencil size={20} />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="border border-secondary bg-bgDark">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-white">
                          <Pencil size={20} />
                          Editar projeto
                        </DialogTitle>
                      </DialogHeader>

                      <form className="mt-4 flex flex-col gap-4">
                        <div>
                          <label
                            htmlFor="name-project"
                            className="text-sm text-white"
                          >
                            Nome do projeto
                          </label>
                          <input
                            id="name-project"
                            type="text"
                            className="mt-2 h-10 w-full rounded border border-purpleClean bg-transparent px-3 text-white outline-none"
                            placeholder="Nome do projeto"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="name-project"
                            className="text-sm text-white"
                          >
                            Descrição
                          </label>
                          <input
                            id="name-project"
                            type="text"
                            className="mt-2 h-10 w-full rounded border border-purpleClean bg-transparent px-3 text-white outline-none"
                            placeholder="Descrição do projeto"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="name-project"
                            className="text-sm text-white"
                          >
                            URL primeira imagem
                          </label>
                          <input
                            id="name-project"
                            type="text"
                            className="mt-2 h-10 w-full rounded border border-purpleClean bg-transparent px-3 text-white outline-none"
                            placeholder="URL primeira imagem"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="name-project"
                            className="text-sm text-white"
                          >
                            URL segunda imagem
                          </label>
                          <input
                            id="name-project"
                            type="text"
                            className="mt-2 h-10 w-full rounded border border-purpleClean bg-transparent px-3 text-white outline-none"
                            placeholder="URL segunda imagem"
                          />
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                  <button
                    className="text-white transition-all duration-200 ease-linear hover:text-secondary"
                    onClick={() => alert("delete")}
                  >
                    <Trash size={20} />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export { TableProjects }
