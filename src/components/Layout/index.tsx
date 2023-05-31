import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import { StyledBody, StyledMain } from './styled'

export const Layout = memo(() => {
  return (
    <StyledBody>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledBody>
  )
})
