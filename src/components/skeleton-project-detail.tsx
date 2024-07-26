import { MoveLeft } from "lucide-react"
import { Link } from "react-router-dom"

import bannerDesktop from "/banner-desktop-project-detail.png"
import bannerMobile from "/banner-mobile-project-detail.png"

import { FooterComponent } from "./footer"
import Logo from "./logo"
import { Skeleton } from "./ui/skeleton"

const SkeletonProjectDetail = () => {
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
          Carregando projeto...
        </h1>
      </div>

      <div className="relative mx-auto flex max-w-[1600px] flex-col gap-2 px-5 lg:gap-5 lg:px-20">
        <div className="z-10 -mt-28 flex w-full gap-2 lg:-mt-14 lg:gap-5">
          <div className="flex flex-col gap-2 lg:gap-5">
            <Skeleton className="min-h-32 min-w-28 flex-1 rounded-[5px] bg-slate-500 lg:h-52 lg:w-44" />
            <Skeleton className="min-h-32 min-w-28 flex-1 rounded-[5px] bg-slate-500 lg:h-52 lg:w-44" />
          </div>

          <Skeleton className="max-h-[262px] min-h-full w-full rounded-[5px] bg-slate-500 lg:min-h-[450px]" />
        </div>

        <div className="flex flex-col gap-2 md:flex-row lg:gap-5">
          <Skeleton className="min-h-28 w-full rounded-[5px] bg-slate-500 lg:min-h-40" />
          <Skeleton className="min-h-28 w-full rounded-[5px] bg-slate-500 lg:min-h-40 lg:max-w-[550px]" />
        </div>
      </div>

      <div className="mt-28 lg:mt-64">
        <FooterComponent />
      </div>
    </section>
  )
}

export { SkeletonProjectDetail }
