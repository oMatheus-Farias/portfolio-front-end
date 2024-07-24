import { FileDown, Github, Linkedin, Mail } from "lucide-react"

import meImgDesktop from "/me-img-desktop.png"
import meImgMobile from "/me-img-mobile.png"

import { ButtonLink } from "./components/button-link"
import { CarouselProjects } from "./components/carousel-projects"
import { CarouselTechnologies } from "./components/carousel-technologies"
import { ContactsComponent } from "./components/contacts"
import { FooterComponent } from "./components/footer"
import { HeaderDesktop } from "./components/header-desktop"
import { HeaderMobile } from "./components/header-mobile"

const App = () => {
  return (
    <div className="min-h-screen">
      <HeaderMobile />
      <HeaderDesktop />
      <section className="flex pl-5 lg:px-20">
        <div className="absolute mt-16 flex max-w-72 flex-col gap-2 sm:max-w-[380px] md:max-w-[400px] lg:top-40 lg:max-w-[530px] 2xl:max-w-[600px]">
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
      </section>

      <section className="mt-10 bg-cover sm:mt-40">
        <h2 className="h-10 bg-violet-horizontal bg-clip-text text-center text-lg font-bold text-transparent lg:text-[32px]">
          Principais tecnologias que utilizo
        </h2>

        <img
          src="/background-01-mobile.png"
          alt="Background"
          className="absolute z-[-1] h-full w-full lg:hidden"
        />

        <img
          src="/background-01.png"
          alt="Background"
          className="absolute top-[700px] z-[-1] hidden h-full w-full lg:block lg:h-auto 0xl:hidden"
        />

        <img
          src="/background-01-xl.png"
          alt="Background"
          className="absolute top-[980px] z-[-1] hidden h-[800px] w-full 0xl:block"
        />

        <CarouselTechnologies />

        <div className="flex flex-col text-center lg:gap-4">
          <h2 className="mt-32 h-10 bg-violet-horizontal bg-clip-text text-lg font-bold text-transparent lg:mt-52 lg:text-[32px]">
            Projetos
          </h2>
          <h3 className="text-sm font-semibold text-white lg:text-2xl">
            Explore os meus principais projetos
          </h3>
        </div>
      </section>

      <section className="bg-background-02 lg:mt-28">
        <CarouselProjects />

        <div className="flex flex-col text-center lg:gap-4">
          <h2 className="mt-32 h-10 bg-violet-horizontal bg-clip-text text-lg font-bold text-transparent lg:mt-52 lg:text-[32px]">
            Contatos
          </h2>
          <h3 className="text-sm font-semibold text-white lg:text-2xl">
            Sinta-se à vontade para entrar em contato!
          </h3>
        </div>

        <div className="mx-auto mt-11 flex max-w-[580px] justify-between px-5 lg:mt-36 lg:max-w-[900px] lg:px-20">
          <ContactsComponent />
        </div>

        <div className="mt-28 lg:mt-64">
          <FooterComponent />
        </div>
      </section>
    </div>
  )
}

export default App
