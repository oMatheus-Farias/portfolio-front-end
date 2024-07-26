import axios from "axios"
import { useQuery } from "react-query"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { CardProjects } from "./card-projects"
import { SkeletonProjects } from "./skeleton-projects"

export interface IProjects {
  id: string
  name: string
  description: string
  imagesUrl: string[]
  repositoryUrl: string
  projectUrl: string
  technologies: string[]
  userId: string
  createdAt: string
  updatedAt: string
}

const CarouselProjects = () => {
  const { data, isLoading } = useQuery<IProjects[]>(
    "projects",
    async () => {
      return axios
        .get(import.meta.env.VITE_URL, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
          },
        })
        .then((response) => response.data)
        .catch((error) => {
          throw new Error(error)
        })
    },
    {
      refetchOnMount: true,
    },
  )

  if (isLoading) {
    return (
      <div className="flex w-full gap-12 overflow-hidden px-5 lg:gap-16 lg:px-20">
        {Array.from({ length: 10 }).map((_, index) => (
          <SkeletonProjects key={index} />
        ))}
      </div>
    )
  }

  const projects = Array.isArray(data) ? data : []

  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full overflow-hidden lg:mt-28"
      >
        <CarouselContent className="w-full gap-8 px-5 lg:px-20">
          {projects?.map((item) => (
            <CarouselItem
              key={item.id}
              className="flex h-[25rem] basis-[22.5rem] items-center lg:basis-[34.375rem]"
            >
              <CardProjects
                id={item.id}
                image={item.imagesUrl[0]}
                name={item.name}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  )
}

export { CarouselProjects }
