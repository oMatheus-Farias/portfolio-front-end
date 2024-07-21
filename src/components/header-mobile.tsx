import { AlignJustify, Github, Linkedin } from "lucide-react"

import portfolioLogo from "/portfolio-logo.svg"

import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet"

const HeaderMobile = () => {
  //FIXME: Refactor components
  return (
    <header className="flex w-full items-center gap-6 px-4 py-3">
      <Sheet>
        <SheetTrigger>
          <AlignJustify size={28} color="#FFFF" />
        </SheetTrigger>
        <SheetContent side="left" className="w-[90%] bg-primary px-4">
          <SheetHeader className="mt-11 flex-row items-center justify-between">
            <img
              src={portfolioLogo}
              alt="Matheus Farias - Desenvolvedor full-stack"
              className="w-32"
            />

            <div className="flex items-center gap-4">
              <Button className="h-8 w-8 rounded-full bg-violet-vertical">
                <a href="#" className="rounded-full bg-primary p-[6px]">
                  <Linkedin size={16} color="#FFFF" />
                </a>
              </Button>

              <Button className="h-8 w-8 rounded-full bg-violet-vertical">
                <a href="#" className="rounded-full bg-primary p-[6px]">
                  <Github size={16} color="#FFFF" />
                </a>
              </Button>
            </div>
          </SheetHeader>

          <nav className="mt-10 font-semibold text-white">
            <ul className="flex flex-col gap-7">
              <li>Sobre</li>
              <li>Tecnologias</li>
              <li>Projetos</li>
              <li>Contatos</li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>

      <img
        src={portfolioLogo}
        alt="Matheus Farias - Desenvolvedor full-stack"
        className="w-36"
      />
    </header>
  )
}

export { HeaderMobile }
