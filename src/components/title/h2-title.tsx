export interface H2TitleProps {
  title: string
  className?: string
}

const H2Title = ({ title, className = "" }: H2TitleProps) => {
  return (
    <h2
      className={`mt-32 h-10 bg-violet-horizontal bg-clip-text text-lg font-bold text-transparent lg:mt-52 lg:text-[32px] ${className}`}
    >
      {title}
    </h2>
  )
}

export { H2Title }
