import styled from 'styled-components'

export const StyledBody = styled.div`
  height: 100vh;
  overflow: hidden;
`

export const StyledMain = styled.main`
  border-top-left-radius: ${({ theme }) => theme.radii[3]}rem;
  padding-bottom: 2rem;
  width: 100%;
  height: 100%;
  flex: 1;
  overflow-x: hidden;
  background: ${({ theme }) => theme.colors.background};
`
