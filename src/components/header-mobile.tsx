import { AlignJustify, Github, Linkedin } from "lucide-react"
import { useState } from "react"

import { scrollToSection } from "@/helpers/scroll-to-section"

import { ButtonLink } from "./button-link"
import Logo from "./logo"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"

const HeaderMobile = () => {
  const [open, setOpen] = useState<boolean>()

  const handleScrollToSection = (sectionId: string) => {
    setOpen((prev) => !prev)

    setTimeout(() => {
      scrollToSection(sectionId)
    }, 400)
  }

  return (
    <header className="absolute flex w-full items-center gap-6 px-5 py-3 lg:hidden">
      <Sheet open={open} onOpenChange={() => setOpen((prev) => !prev)}>
        <SheetTrigger>
          <AlignJustify size={28} color="#FFFF" />
        </SheetTrigger>
        <SheetContent side="left" className="w-[90%] bg-primary px-4">
          <SheetHeader className="mt-11 flex-row items-center justify-between">
            <SheetTitle>
              <Logo className={"w-36"} />
            </SheetTitle>
            <SheetDescription>{undefined}</SheetDescription>
            <div className="flex items-center gap-4">
              <ButtonLink
                title="Linkedin"
                href={"https://www.linkedin.com/in/matheusfariasdasneves"}
              >
                <Linkedin size={16} color="#FFFF" />
              </ButtonLink>

              <ButtonLink
                href={"https://github.com/oMatheus-Farias"}
                title="GitHub"
              >
                <Github size={16} color="#FFFF" />
              </ButtonLink>
            </div>
          </SheetHeader>

          <nav className="mt-10 font-semibold text-white">
            <ul className="flex flex-col gap-7">
              <li onClick={() => handleScrollToSection("technologies")}>
                Tecnologias
              </li>
              <li onClick={() => handleScrollToSection("projects")}>
                Projetos
              </li>
              <li onClick={() => handleScrollToSection("contacts")}>
                Contatos
              </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>

      <Logo className={"w-36"} />
    </header>
  )
}

export { HeaderMobile }
