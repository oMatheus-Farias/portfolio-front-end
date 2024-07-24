import { Github, Linkedin } from "lucide-react"

import { ButtonLink } from "./button-link"
import Logo from "./logo"

const FooterComponent = () => {
  return (
    <footer className="flex min-h-28 w-full items-center justify-between bg-black px-5 opacity-80 lg:h-64 lg:px-20">
      <div className="flex flex-col items-start">
        <Logo className="h-6 lg:h-10" />
        <span className="text-xs text-white lg:text-base">
          Desenvolvido por Matheus Farias - 2024
        </span>
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        <ButtonLink
          className="w-6 text-white transition-all duration-300 ease-out hover:text-deepSkyBlue"
          title="Linkedin"
          href="https://www.linkedin.com/in/matheusfariasdasneves"
        >
          <Linkedin size={16} />
        </ButtonLink>

        <ButtonLink
          className="w-6 text-white transition-all duration-300 ease-out hover:text-deepSkyBlue"
          title="GitHub"
          href="https://github.com/oMatheus-Farias"
        >
          <Github size={16} />
        </ButtonLink>
      </div>
    </footer>
  )
}

export { FooterComponent }
