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

interface IProjects {
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
  const { data, isLoading } = useQuery<IProjects[]>("projects", async () => {
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
  })

  //FIXME: Add a loading component
  if (isLoading) {
    return <div className="text-white">Loading...</div>
  }

  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="mt-10 w-full overflow-hidden lg:mt-28"
      >
        <CarouselContent className="w-full gap-8 px-5 lg:px-20">
          {data?.map((item) => (
            <CarouselItem
              key={item.id}
              className="flex h-[400px] basis-[360px] items-center lg:basis-[550px]"
            >
              <CardProjects image={item.imagesUrl[0]} name={item.name} />
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
