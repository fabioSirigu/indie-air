import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import { FilterRow } from '../FilterRow'
import { StyledBody, StyledMain } from './styled'

export const Layout = memo(() => {
  return (
    <StyledBody>
      <FilterRow />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledBody>
  )
})
