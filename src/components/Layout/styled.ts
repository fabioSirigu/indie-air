import styled from 'styled-components'

export const StyledBody = styled.div`
  height: 100vh;
  overflow: hidden;
`

export const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  flex: 1;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
`
