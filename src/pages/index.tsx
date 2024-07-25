import { ButtonLink } from "@/components/button-link"
import { CarouselProjects } from "@/components/carousel-projects"
import { CarouselTechnologies } from "@/components/carousel-technologies"
import { ContactsComponent } from "@/components/contacts"
import { FirstBackgroundImage } from "@/components/first-background-img"
import { FooterComponent } from "@/components/footer"
import { HeaderDesktop } from "@/components/header-desktop"
import { HeaderMobile } from "@/components/header-mobile"
import { MeImage } from "@/components/me-image"
import { TitleComponent } from "@/components/title"
import { ACTION_BUTTONS_LINKS } from "@/constants/action-buttons-links"
import { returnIcon } from "@/helpers/return-icon"

const PortfolioPage = () => {
  return (
    <div className="min-h-screen">
      <HeaderMobile />
      <HeaderDesktop />

      <section className="flex pl-5 lg:px-20">
        <div className="absolute mt-16 flex max-w-56 flex-col gap-2 sm:max-w-[380px] md:max-w-[400px] lg:top-40 lg:max-w-[530px] 2xl:max-w-[600px]">
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
                  key={item.id}
                  title={item.title}
                  href={item.href}
                  className="w-6 text-white transition-all duration-300 ease-out hover:text-deepSkyBlue"
                >
                  {returnIcon(item.title, item.sizeIcon)}
                </ButtonLink>
              )
            })}
          </div>
        </div>

        <MeImage />
      </section>

      <section id="technologies" className="mt-32 bg-cover sm:mt-40">
        <TitleComponent.Title
          title="Principais tecnologias que utilizo"
          className="mt-0 text-center lg:mt-0"
        />

        <FirstBackgroundImage />

        <CarouselTechnologies />

        <div
          id="projects"
          className="mt-32 flex flex-col text-center lg:mt-80 lg:gap-4"
        >
          <TitleComponent.Title title="Projetos" />
          <TitleComponent.Subtitle subtitle="Explore os meus principais projetos" />
        </div>
      </section>

      <section className="bg-background-02-mobile bg-center lg:mt-28 lg:bg-background-02 lg:bg-cover">
        <CarouselProjects />

        <div
          id="contacts"
          className="mt-24 flex flex-col text-center lg:mt-52 lg:gap-4"
        >
          <TitleComponent.Title title="Contatos" />
          <TitleComponent.Subtitle subtitle="Sinta-se à vontade para entrar em contato!" />
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

export default PortfolioPage
