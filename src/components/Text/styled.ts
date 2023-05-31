import styled from 'styled-components'
import { FontVariant, ThemeColor, FontWeight } from '../../style/theme'

type Props = {
  as: FontVariant
  color: ThemeColor
  weight?: FontWeight
}

export const StyledText = styled.span<Props>`
  font-size: ${({ theme, as }) => {
    const textSize = theme.fonts[as].size
    return theme.fontSizes[textSize]
  }}rem;
  color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.text)};
  font-weight: ${({ theme, weight }) => (weight ? theme.fontWeight[weight] : null)};
`
