import { Card, CardContent } from "./ui/card"

interface CardTechnologiesProps {
  img: string
  name: string
}

const CardTechnologies = ({ img, name }: CardTechnologiesProps) => {
  return (
    <Card className="flex h-[22.5rem] w-60 items-center justify-center rounded-[0.625rem] bg-violet-vertical p-[0.125rem] lg:h-[25rem] lg:w-72">
      <CardContent className="flex h-full w-full flex-col items-center justify-between rounded-[0.625rem] bg-purple-vertical p-4 pt-10 lg:p-5">
        <img src={img} alt={name} className="h-36 object-contain lg:h-48" />

        <div className="min-h-[1px] min-w-full bg-white"></div>

        <h4 className="text-2xl font-bold text-secondary lg:text-3xl">
          {name}
        </h4>
      </CardContent>
    </Card>
  )
}

export { CardTechnologies }
