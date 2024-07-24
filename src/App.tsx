import { ButtonLink } from "./components/button-link"
import { CarouselProjects } from "./components/carousel-projects"
import { CarouselTechnologies } from "./components/carousel-technologies"
import { ContactsComponent } from "./components/contacts"
import { FirstBackgroundImage } from "./components/first-background-img"
import { FooterComponent } from "./components/footer"
import { HeaderDesktop } from "./components/header-desktop"
import { HeaderMobile } from "./components/header-mobile"
import { MeImage } from "./components/me-image"
import { ACTION_BUTTONS_LINKS } from "./constants/action-buttons-links"
import { returnIcon } from "./helpers/return-icon"

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
            {ACTION_BUTTONS_LINKS.map((item) => {
              return (
                <ButtonLink
                  className="w-6 text-white transition-all duration-300 ease-out hover:text-deepSkyBlue"
                  title={item.title}
                  href={item.href}
                >
                  {returnIcon(item.title, item.sizeIcon)}
                </ButtonLink>
              )
            })}
          </div>
        </div>

        <MeImage />
      </section>

      <section className="mt-10 bg-cover sm:mt-40">
        <h2 className="h-10 bg-violet-horizontal bg-clip-text text-center text-lg font-bold text-transparent lg:text-[32px]">
          Principais tecnologias que utilizo
        </h2>

        <FirstBackgroundImage />

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
