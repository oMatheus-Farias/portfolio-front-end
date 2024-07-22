//FIXME: Refactor this icons
import { FileDown, Github, Linkedin, Mail } from "lucide-react"

import ButtonLink from "./components/button-link"
import { HeaderMobile } from "./components/header-mobile"

const App = () => {
  return (
    <div className="h-screen bg-primary">
      <div className="h-80 w-full bg-me-img-mobile bg-cover bg-[50%] bg-no-repeat">
        <HeaderMobile />

        <div className="mt-2 flex max-w-72 flex-col gap-2 px-4">
          <h1 className="text-sm font-bold text-secondary">
            Um pouco sobre mim
          </h1>
          <p className="text-xs text-white">
            Olá, meu nome é Matheus Farias, sou desenvolvedor full stack,
            totalmente apaixonado por programação e tecnologia. Tenho
            experiência significativa no desenvolvimento full stack, utilizando
            ferramentas como TypeScript, React.js, Next.js, Node.js, CSS,
            Tailwind CSS, Prisma e no mobile React native. Além disso, trago
            conhecimentos sólidos em HTML, Git, GitHub, Jest, Firebase,
            PostgreSQL e Docker, aplicando essas tecnologias para criar
            aplicações de alto nível e valor.
          </p>

          <div className="flex gap-3">
            <ButtonLink
              className="w-6"
              href={"https://www.linkedin.com/in/matheusfariasdasneves"}
            >
              <Linkedin size={16} color="#FFFF" />
            </ButtonLink>

            <ButtonLink
              className="w-6"
              href={"https://www.linkedin.com/in/matheusfariasdasneves"}
            >
              <Github size={16} color="#FFFF" />
            </ButtonLink>

            <ButtonLink
              className="w-6"
              href="mailto:matheusfariasdasneves@gmail.com"
            >
              <Mail size={16} color="#FFFF" />
            </ButtonLink>

            <ButtonLink
              className="w-6"
              href="https://drive.google.com/u/0/uc?id=1UAXtZAoS9PPLrx4gsI6dRIjzJAsOz8Zb&export=download"
            >
              <FileDown size={16} color="#FFFF" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
