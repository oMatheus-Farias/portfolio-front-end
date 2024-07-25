interface CardProjectsProps {
  image: string
  name: string
}

const CardProjects = ({ image, name }: CardProjectsProps) => {
  return (
    <div className="relative h-[280px] w-[390px] overflow-hidden rounded-[10px] border-[3px] border-secondary transition-all duration-200 ease-linear hover:scale-[1.02] hover:grayscale-0 lg:h-[350px] lg:w-[550px] lg:grayscale">
      <div className="absolute bottom-4 left-4">
        <h4 className="bg-violet-horizontal bg-clip-text text-2xl font-extrabold text-transparent lg:text-3xl">
          {name}
        </h4>

        <span className="text-sm text-white lg:text-base">
          Clique e verifique os detalhes
        </span>
      </div>

      <img src={image} alt={name} className="h-full w-full object-cover" />
    </div>
  )
}

export { CardProjects }
