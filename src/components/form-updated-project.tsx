import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { LoaderCircle } from "lucide-react"
import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "react-query"
import { z } from "zod"

import { IProjects } from "./carousel-projects"
import { Button } from "./ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form"
import { toast } from "./ui/use-toast"

interface FormUpdateProjectProps {
  project: IProjects
  setOpenDialog: (value: boolean) => void
}

interface IProjectUpdate {
  userId: string
  name: string | undefined
  description: string | undefined
  imagesUrl: string[] | []
  repositoryUrl: string | undefined
  projectUrl: string | undefined
  technologies: string[] | []
}

const formSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  imagesUrl: z.string().optional(),
  repositoryUrl: z.string().optional(),
  projectUrl: z.string().optional(),
  technologies: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

const FormUpdateProject = ({
  project,
  setOpenDialog,
}: FormUpdateProjectProps) => {
  const queryClient = useQueryClient()

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: project.name,
      description: project.description,
      imagesUrl: project.imagesUrl.join(", "),
      repositoryUrl: project.repositoryUrl,
      projectUrl: project.projectUrl,
      technologies: project.technologies.join(", "),
    },
  })

  const handleCloseDialogClick = () => {
    setOpenDialog(false)
    form.reset()
  }

  const mutation = useMutation({
    mutationFn: async (data: IProjectUpdate) => {
      return axios.patch(
        `${import.meta.env.VITE_URL_UPDATE_PROJECT}/${project.id}`,
        { ...data },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
          },
        },
      )
    },
    onSuccess: () => {
      queryClient.invalidateQueries("projects")
      handleCloseDialogClick()
      toast({
        variant: "default",
        description: "Projeto atualizado com sucesso.",
      })
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      if (error.response.status === 404) {
        toast({
          variant: "default",
          description: "Dados incorretos.",
        })
        return
      }

      if (error.response.status === 409) {
        toast({
          variant: "default",
          description: "Altere algum campo para prosseguir.",
        })
        return
      }

      toast({
        variant: "default",
        description: "Desculpe, ocorreu algum erro inesperado.",
      })
      return
    },
  })
  const loading = mutation.isLoading

  const handleUpdateUserClick = (data: FormData) => {
    const user = JSON.parse(localStorage.getItem("user") || "{}")
    const userId = user.id

    const updateProjectFields = {
      userId,
      name: data.name,
      description: data.description,
      imagesUrl: data.imagesUrl?.split(", ") || [],
      repositoryUrl: data.repositoryUrl,
      projectUrl: data.projectUrl,
      technologies: data.technologies?.split(", ") || [],
    }

    mutation.mutate(updateProjectFields)
  }

  return (
    <Form {...form}>
      <form
        className="mt-4 flex flex-col gap-4"
        onSubmit={form.handleSubmit(handleUpdateUserClick)}
      >
        <FormField
          name="name"
          control={form.control}
          render={() => (
            <FormItem>
              <FormLabel htmlFor="name-project" className="text-sm text-white">
                Nome do projeto
              </FormLabel>
              <FormControl>
                <input
                  {...form.register("name")}
                  id="name-project"
                  type="text"
                  className="mt-2 h-10 w-full rounded border border-purpleClean bg-transparent px-3 text-white outline-none"
                  placeholder="Nome do projeto"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="description"
          control={form.control}
          render={() => (
            <FormItem>
              <FormLabel htmlFor="description" className="text-sm text-white">
                Descrição
              </FormLabel>
              <FormControl>
                <input
                  {...form.register("description")}
                  id="description"
                  type="text"
                  className="mt-2 h-10 w-full rounded border border-purpleClean bg-transparent px-3 text-white outline-none"
                  placeholder="Descrição do projeto"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="imagesUrl"
          control={form.control}
          render={() => (
            <FormItem>
              <FormLabel htmlFor="images-url" className="text-sm text-white">
                URL das imagens
              </FormLabel>
              <FormControl>
                <input
                  {...form.register("imagesUrl")}
                  id="images-url"
                  type="text"
                  className="mt-2 h-10 w-full rounded border border-purpleClean bg-transparent px-3 text-white outline-none"
                  placeholder="URL das imagens"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="repositoryUrl"
          control={form.control}
          render={() => (
            <FormItem>
              <FormLabel
                htmlFor="repository-url"
                className="text-sm text-white"
              >
                URL do repositório
              </FormLabel>
              <FormControl>
                <input
                  {...form.register("repositoryUrl")}
                  id="repository-url"
                  type="text"
                  className="mt-2 h-10 w-full rounded border border-purpleClean bg-transparent px-3 text-white outline-none"
                  placeholder="URL do repositório"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="projectUrl"
          control={form.control}
          render={() => (
            <FormItem>
              <FormLabel htmlFor="project-url" className="text-sm text-white">
                URL do projeto
              </FormLabel>
              <FormControl>
                <input
                  {...form.register("projectUrl")}
                  id="project-url"
                  type="text"
                  className="mt-2 h-10 w-full rounded border border-purpleClean bg-transparent px-3 text-white outline-none"
                  placeholder="URL do projeto"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="technologies"
          control={form.control}
          render={() => (
            <FormItem>
              <FormLabel htmlFor="technologies" className="text-sm text-white">
                Tecnologias
              </FormLabel>
              <FormControl>
                <input
                  {...form.register("technologies")}
                  id="technologies"
                  type="text"
                  className="mt-2 h-10 w-full rounded border border-purpleClean bg-transparent px-3 text-white outline-none"
                  placeholder="Tecnologias utilizadas"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="mt-4 flex w-full items-center justify-center gap-4">
          <Button
            type="button"
            onClick={handleCloseDialogClick}
            className="w-full bg-purpleClean text-white transition-all duration-200 ease-linear hover:bg-purpleClean hover:bg-opacity-80"
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            className="w-full bg-green text-white transition-all duration-200 ease-linear hover:bg-green hover:bg-opacity-80"
          >
            {loading ? (
              <LoaderCircle
                color="#FFF"
                size={18}
                className="animate-spin duration-500"
              />
            ) : (
              "Concluir"
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export { FormUpdateProject }
