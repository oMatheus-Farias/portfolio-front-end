import { Github, Linkedin } from "lucide-react"

import { scrollToSection } from "@/helpers/scroll-to-section"

import { ButtonLink } from "./button-link"
import Logo from "./logo"

const HeaderDesktop = () => {
  return (
    <header className="absolute hidden h-20 w-full items-center justify-between px-20 lg:flex">
      <Logo className={"w-48"} />

      <nav className="font-semibold text-white">
        <ul className="flex gap-7">
          <li
            className="cursor-pointer transition-all duration-300 ease-in-out hover:text-secondary"
            onClick={() => scrollToSection("technologies")}
          >
            Tecnologias
          </li>
          <li
            className="cursor-pointer transition-all duration-300 ease-in-out hover:text-secondary"
            onClick={() => scrollToSection("projects")}
          >
            Projetos
          </li>
          <li
            className="cursor-pointer transition-all duration-300 ease-in-out hover:text-secondary"
            onClick={() => scrollToSection("contacts")}
          >
            Contatos
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <ButtonLink
          title="Linkedin"
          href={"https://www.linkedin.com/in/matheusfariasdasneves"}
          className="w-6 text-white transition-all duration-300 ease-out hover:text-deepSkyBlue"
        >
          <Linkedin size={16} />
        </ButtonLink>

        <ButtonLink
          href={"https://github.com/oMatheus-Farias"}
          title="GitHub"
          className="w-6 text-white transition-all duration-300 ease-out hover:text-deepSkyBlue"
        >
          <Github size={16} />
        </ButtonLink>
      </div>
    </header>
  )
}

export { HeaderDesktop }
