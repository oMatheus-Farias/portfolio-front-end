import portfolioLogo from "/portfolio-logo.svg"

interface LogoProps {
  className?: string
}

const Logo = ({ className }: LogoProps) => {
  return (
    <img
      src={portfolioLogo}
      alt="Matheus Farias - Desenvolvedor full-stack"
      className={className}
    />
  )
}

export default Logo
