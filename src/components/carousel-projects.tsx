import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { CardProjects } from "./card-projects"

const CarouselProjects = () => {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="mt-10 w-full overflow-hidden lg:mt-28"
      >
        <CarouselContent className="w-full gap-8 px-5 lg:px-20">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex h-[400px] basis-[360px] items-center lg:basis-[550px]"
            >
              <CardProjects />
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
