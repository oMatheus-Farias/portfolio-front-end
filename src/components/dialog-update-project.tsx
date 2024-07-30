import { Pencil } from "lucide-react"
import { useState } from "react"

import { IProjects } from "./carousel-projects"
import { FormUpdateProject } from "./form-updated-project"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

interface DialogUpdateProjectProps {
  project: IProjects
}

const DialogUpdateProject = ({ project }: DialogUpdateProjectProps) => {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button className="p-0 text-white transition-all duration-200 ease-linear hover:text-secondary">
          <Pencil size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[96%] max-w-[96%] overflow-auto rounded-lg border border-secondary bg-bgDark lg:max-w-[33.75rem] [&::-webkit-scrollbar]:hidden">
        <DialogHeader>
          <DialogDescription></DialogDescription>
          <DialogTitle className="flex items-center gap-2 text-white">
            <Pencil size={20} />
            Editar projeto
          </DialogTitle>
        </DialogHeader>
        <FormUpdateProject project={project} setOpenDialog={setOpenDialog} />
      </DialogContent>
    </Dialog>
  )
}

export { DialogUpdateProject }
