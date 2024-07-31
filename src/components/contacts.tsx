import { Github, Linkedin } from "lucide-react"

const ContactsComponent = () => {
  return (
    <>
      <div
        className="flex flex-col items-center gap-2 lg:gap-3"
        title="LinkedIn"
      >
        <a
          href="https://www.linkedin.com/in/matheusfariasdasneves"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-white bg-violet-horizontal lg:h-40 lg:w-40">
            <Linkedin className="h-7 w-7 text-white transition-all duration-200 ease-linear hover:text-deepSkyBlue lg:h-64 lg:w-14" />
          </div>
        </a>

        <span className="text-sm font-semibold text-white lg:text-xl">
          LinkedIn
        </span>
      </div>

      <div className="mt-12 max-h-[3px] min-h-[3px] w-full bg-secondary lg:mt-20"></div>

      <div className="flex flex-col items-center gap-2 lg:gap-3" title="GitHub">
        <a
          href="https://github.com/oMatheus-Farias"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-white bg-violet-horizontal lg:h-40 lg:w-40">
            <Github className="h-7 w-7 text-white transition-all duration-200 ease-linear hover:text-deepSkyBlue lg:h-64 lg:w-14" />
          </div>
        </a>

        <span className="text-sm font-semibold text-white lg:text-xl">
          GitHub
        </span>
      </div>
    </>
  )
}

export { ContactsComponent }
