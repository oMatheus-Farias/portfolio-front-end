import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { CardTechnologies } from "../components/card-technologies"
import { TECHNOLOGIES } from "../constants/technologies"

const CarouselTechnologies = () => {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="mt-10 w-full overflow-hidden lg:mt-28"
      >
        <CarouselContent className="w-full gap-8 px-5 lg:px-20">
          {TECHNOLOGIES.map((item, index) => (
            <CarouselItem key={index} className="basis-60 lg:basis-72">
              <CardTechnologies img={item.img} name={item.name} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  )
}

export { CarouselTechnologies }
