import { IProjects } from "./carousel-projects"
import { DialogDeleteProject } from "./dialog-delete-project"
import { DialogUpdateProject } from "./dialog-update-project"
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
                  <DialogUpdateProject project={project} />
                  <DialogDeleteProject project={project} />
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
