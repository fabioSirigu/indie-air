import { memo } from 'react'
import { Image } from '../Image'
import { StyledLogo } from './styled'

export const Logo = memo(() => {
  return (
    <StyledLogo>
      <Image url="/images/INDIE AIR.png" />
    </StyledLogo>
  )
})
