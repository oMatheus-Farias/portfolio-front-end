import { FileDown, Github, Linkedin, Mail } from "lucide-react"

import meImgDesktop from "/me-img-desktop.png"
import meImgMobile from "/me-img-mobile.png"

import { ButtonLink } from "./components/button-link"
import { CarouselTechnologies } from "./components/carousel-technologies"
import { HeaderDesktop } from "./components/header-desktop"
import { HeaderMobile } from "./components/header-mobile"

const App = () => {
  return (
    <div className="min-h-screen pb-5">
      <HeaderMobile />
      <HeaderDesktop />
      <div className="flex lg:px-5 2xl:px-20">
        <div className="absolute mt-16 flex max-w-72 flex-col gap-2 px-4 sm:max-w-[480px] sm:px-10 lg:top-40 lg:max-w-[640px] 2xl:max-w-[700px]">
          <h1 className="text-sm font-bold text-secondary sm:text-3xl">
            Um pouco sobre mim
          </h1>
          <p className="text-xs text-white sm:text-base lg:text-xl">
            Olá, meu nome é Matheus Farias, sou desenvolvedor full stack,
            totalmente apaixonado por programação e tecnologia. Tenho
            experiência significativa no desenvolvimento full stack, utilizando
            ferramentas como TypeScript, React.js, Next.js, Node.js, CSS,
            Tailwind CSS, Prisma e no mobile React native. Além disso, trago
            conhecimentos sólidos em HTML, Git, GitHub, Jest, Firebase,
            PostgreSQL e Docker, aplicando essas tecnologias para criar
            aplicações de alto nível e valor.
          </p>

          <div className="flex gap-3 lg:mt-5">
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

            <ButtonLink
              className="w-6 text-white transition-all duration-300 ease-out hover:text-deepSkyBlue"
              title="E-mail"
              href="mailto:matheusfariasdasneves@gmail.com"
            >
              <Mail size={16} />
            </ButtonLink>

            <ButtonLink
              className="w-6 text-white transition-all duration-300 ease-out hover:text-deepSkyBlue"
              title="Baixar currículo"
              href="https://drive.google.com/u/0/uc?id=1UAXtZAoS9PPLrx4gsI6dRIjzJAsOz8Zb&export=download"
            >
              <FileDown size={16} />
            </ButtonLink>
          </div>
        </div>
        <img
          src={meImgMobile}
          alt="Matheus Farias"
          className="h-[370px] w-full object-contain md:hidden"
        />
        <img
          src={meImgDesktop}
          alt="Matheus Farias"
          className="hidden h-[400px] w-full object-contain md:block lg:h-[700px]"
        />
      </div>

      <div className="mt-10 sm:mt-40">
        <h2 className="h-10 bg-violet-horizontal bg-clip-text text-center text-lg font-bold text-transparent lg:text-[32px]">
          Principais tecnologias que utilizo
        </h2>

        {/* FIXME: Add bacground image */}
        <div>
          <CarouselTechnologies />
        </div>
      </div>
    </div>
  )
}

export default App
