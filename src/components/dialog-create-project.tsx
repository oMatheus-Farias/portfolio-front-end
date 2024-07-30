import { Plus } from "lucide-react"
import { useState } from "react"

import { FormCreateProject } from "./form-create-project"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

const DialogCreateProject = () => {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button className="flex items-center justify-center gap-2 rounded-full bg-purpleClean px-5 py-5 text-lg font-medium text-white shadow-md transition-all duration-200 ease-linear hover:bg-secondary">
          <Plus size={16} />
          Cadastrar
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[96%] max-w-[96%] overflow-auto rounded-lg border border-secondary bg-bgDark lg:max-w-[33.75rem] [&::-webkit-scrollbar]:hidden">
        <DialogHeader>
          <DialogDescription></DialogDescription>
          <DialogTitle className="flex items-center gap-2 text-white">
            <Plus size={20} />
            Cadastrar projeto
          </DialogTitle>
        </DialogHeader>
        <FormCreateProject setOpenDialog={setOpenDialog} />
      </DialogContent>
    </Dialog>
  )
}

export { DialogCreateProject }
