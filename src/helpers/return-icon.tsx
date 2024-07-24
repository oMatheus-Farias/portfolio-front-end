import { FileDown, Github, Linkedin, Mail } from "lucide-react"

export const returnIcon = (icon: string, size: number) => {
  switch (icon) {
    case "LinkedIn":
      return <Linkedin size={size} />
    case "GitHub":
      return <Github size={size} />
    case "E-mail":
      return <Mail size={size} />
    case "Baixar currículo":
      return <FileDown size={size} />
    default:
      return <></>
  }
}
