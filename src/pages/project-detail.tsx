import axios from "axios"
import { MoveLeft } from "lucide-react"
import { useEffect } from "react"
import { useQuery } from "react-query"
import { Link, useParams } from "react-router-dom"

import bannerDesktop from "/banner-desktop-project-detail.png"
import bannerMobile from "/banner-mobile-project-detail.png"
import meAvatar from "/me-avatar.jpg"
import { ButtonLink } from "@/components/button-link"
import { IProjects } from "@/components/carousel-projects"
import { FooterComponent } from "@/components/footer"
import Logo from "@/components/logo"
import { SkeletonProjectDetail } from "@/components/skeleton-project-detail"
import { returnIcon } from "@/helpers/return-icon"

const ProjectDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { id } = useParams()

  const { data, isLoading } = useQuery<IProjects>("projectdetail", async () => {
    return axios
      .get(`${import.meta.env.VITE_URL_GET_PROJECT}/${id}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error)
      })
  })

  if (isLoading) {
    return <SkeletonProjectDetail />
  }

  return (
    <section className="min-h-screen">
      <Link
        to="/"
        className="absolute flex items-center gap-2 p-5 lg:gap-4 lg:px-20"
      >
        <MoveLeft className="text-xl text-secondary lg:text-2xl" />
        <Logo className="w-36 lg:w-48" />
      </Link>

      <div className="flex h-80 w-full flex-col items-center lg:h-[420px]">
        <img
          src={bannerMobile}
          alt="Banner"
          className="z-[-1] h-full w-full object-cover lg:hidden"
        />
        <img
          src={bannerDesktop}
          alt="Banner"
          className="z-[-1] hidden h-full w-full object-cover lg:block"
        />
        <h1 className="absolute top-28 bg-violet-horizontal bg-clip-text text-3xl font-bold text-transparent lg:top-36 lg:h-16 lg:text-6xl">
          {data?.name}
        </h1>
      </div>

      <div className="relative mx-auto flex max-w-[1600px] flex-col gap-2 px-5 lg:gap-5 lg:px-20">
        <div className="z-10 -mt-28 flex w-full gap-2 lg:-mt-14 lg:gap-5">
          <div
            data-aos="fade-up-right"
            className="flex flex-col gap-2 lg:gap-5"
          >
            <div className="h-32 w-28 flex-1 rounded-[5px] bg-violet-horizontal p-[1px] lg:h-52 lg:w-44">
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-[5px] bg-purple-vertical p-2 lg:justify-between lg:px-4 lg:py-6">
                <img
                  src={meAvatar}
                  alt="Avatar - Matheus Farias"
                  className="h-16 w-16 rounded-full lg:h-20 lg:w-20"
                />

                <div className="min-h-[1px] w-full bg-white"></div>

                <span className="text-[10px] font-bold text-white lg:text-base">
                  {data?.name}
                </span>
              </div>
            </div>

            <div className="h-32 w-28 flex-1 rounded-[5px] bg-violet-horizontal p-[1px] lg:h-52 lg:w-44">
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-[5px] bg-purple-vertical p-2 lg:gap-7">
                <ButtonLink
                  title="Repositório"
                  href={data?.repositoryUrl || ""}
                  className="h-10 w-10 text-white transition-all duration-300 ease-out hover:text-deepSkyBlue"
                >
                  {returnIcon("GitHub", 26)}
                </ButtonLink>

                <ButtonLink
                  title="Visualizar projeto"
                  href={data?.projectUrl || ""}
                  className="h-10 w-10 text-white transition-all duration-300 ease-out hover:text-deepSkyBlue"
                >
                  {returnIcon("Project", 26)}
                </ButtonLink>
              </div>
            </div>
          </div>

          <div
            data-aos="flip-up"
            className="min-h-full w-full rounded-[5px] bg-violet-horizontal p-[1px]"
          >
            <div className="h-full max-h-[262px] w-full overflow-hidden rounded-[5px] bg-purple-vertical lg:min-h-[450px]">
              <img
                src={data?.imagesUrl[1]}
                alt={data?.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:flex-row lg:gap-5">
          <div className="w-full rounded-[5px] bg-violet-horizontal p-[1px]">
            <div className="min-h-full w-full rounded-[5px] bg-purple-vertical px-2 py-5 lg:px-5">
              <h2 className="mb-2 font-bold text-secondary lg:mb-5 lg:text-xl">
                Descrição
              </h2>

              <p className="text-sm text-white lg:text-base">
                {data?.description}
              </p>
            </div>
          </div>

          <div className="w-full rounded-[5px] bg-violet-horizontal p-[1px] lg:max-w-[34.375rem]">
            <div className="min-h-full w-full rounded-[5px] bg-purple-vertical px-2 py-5 lg:px-5">
              <h2 className="mb-2 font-bold text-secondary lg:mb-5 lg:text-xl">
                Tecnologias
              </h2>

              <div className="flex flex-wrap gap-2">
                {data?.technologies.map((item) => {
                  return (
                    <span
                      key={item}
                      className="min-w-20 overflow-hidden text-ellipsis text-nowrap rounded-full bg-purpleClean px-2 py-1 text-center text-sm text-white"
                    >
                      {item}
                    </span>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-28 lg:mt-64">
        <FooterComponent />
      </div>
    </section>
  )
}

export default ProjectDetail
