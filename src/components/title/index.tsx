import { H2Title, H2TitleProps } from "./h2-title"
import { H3Subtitle, H3SubtitleProps } from "./h3-subtitle"

export const TitleComponent: {
  Title: React.FC<H2TitleProps>
  Subtitle: React.FC<H3SubtitleProps>
} = {
  Title: H2Title,
  Subtitle: H3Subtitle,
}
