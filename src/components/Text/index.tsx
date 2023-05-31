import { memo, PropsWithChildren } from 'react'
import { FontVariant, FontWeight, ThemeColor } from '../../style/theme'
import { StyledText } from './styled'

type Props = PropsWithChildren<{
  variant?: FontVariant
  color?: ThemeColor
  weight?: FontWeight
}>

export const Text = memo(
  ({ variant = 'span', color = 'text', weight = 'mediumBold', children }: Props) => {
    return (
      <StyledText as={variant} weight={weight} color={color}>
        {children}
      </StyledText>
    )
  }
)
