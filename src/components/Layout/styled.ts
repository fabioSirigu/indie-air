import styled from 'styled-components'

export const StyledBody = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
`

export const StyledMain = styled.main`
  width: 100vw;
  height: 100%;
  flex: 1;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
`
