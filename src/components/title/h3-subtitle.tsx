export interface H3SubtitleProps {
  subtitle: string
  className?: string
}

const H3Subtitle = ({ subtitle, className = "" }: H3SubtitleProps) => {
  return (
    <h3 className={`text-sm font-semibold text-white lg:text-2xl ${className}`}>
      {subtitle}
    </h3>
  )
}

export { H3Subtitle }
