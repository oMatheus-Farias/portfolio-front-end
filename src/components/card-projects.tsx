import { Link } from "react-router-dom"

interface CardProjectsProps {
  id: string
  name: string
  image: string
}

const CardProjects = ({ id, name, image }: CardProjectsProps) => {
  return (
    <Link
      to={`/projectdetail/${id}`}
      className="relative h-[17.5rem] w-[24.375rem] overflow-hidden rounded-[0.625rem] border-[3px] border-secondary transition-all duration-200 ease-linear hover:scale-[1.02] hover:grayscale-0 lg:h-[21.875rem] lg:w-[34.375rem] lg:grayscale"
    >
      <div className="absolute bottom-4 left-4">
        <h4 className="bg-violet-horizontal bg-clip-text text-2xl font-extrabold text-transparent lg:text-3xl">
          {name}
        </h4>

        <span className="text-sm text-white lg:text-base">
          Clique e verifique os detalhes
        </span>
      </div>

      <img src={image} alt={name} className="h-full w-full object-cover" />
    </Link>
  )
}

export { CardProjects }
