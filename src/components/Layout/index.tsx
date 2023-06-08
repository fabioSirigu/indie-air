import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import { StyledBody, StyledMain } from './styled'

export const Layout = memo(() => {
  return (
    <StyledBody>
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledBody>
  )
})
