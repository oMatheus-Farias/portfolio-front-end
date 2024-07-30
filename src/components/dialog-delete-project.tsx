import axios from "axios"
import { Trash } from "lucide-react"
import { useMutation, useQueryClient } from "react-query"

import { IProjects } from "./carousel-projects"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog"
import { Button } from "./ui/button"
import { toast } from "./ui/use-toast"

interface DialogDeleteProjectProps {
  project: IProjects
}

const DialogDeleteProject = ({ project }: DialogDeleteProjectProps) => {
  const queryClient = useQueryClient()
  const user = JSON.parse(localStorage.getItem("user") || "{}")

  const mutation = useMutation({
    mutationFn: async (projectId: string) => {
      return axios.delete(
        `${import.meta.env.VITE_URL_DELETE_PROJECT}/${projectId}`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
            "Content-Type": "application/json",
          },
          data: {
            userId: user?.id,
          },
        },
      )
    },
    onSuccess: () => {
      queryClient.invalidateQueries("projects")
      toast({
        variant: "default",
        description: "Projeto excluído com sucesso.",
      })
    },
  })

  const handleDeleteProjectClick = () => {
    mutation.mutate(project.id)
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="p-0 text-white transition-all duration-200 ease-linear hover:text-secondary">
          <Trash size={20} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[96%] rounded-lg border border-secondary bg-bgDark text-white sm:max-w-[32rem]">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Tem certeza que deseja excluir este projeto?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser desfeita. Isso excluirá permanentemente este
            projeto.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-none bg-purpleClean transition-all duration-200 ease-linear hover:bg-purpleClean/80">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDeleteProjectClick}
            className="bg-secondary transition-all duration-200 ease-linear hover:bg-secondary/80"
          >
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export { DialogDeleteProject }
