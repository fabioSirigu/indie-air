import styled from 'styled-components'

export const StyledCard = styled.div`
  display: flex;
  height: 60px;
  flex-direction: column;
  row-gap: 0.25rem;
  background: ${({ theme }) => theme.colors.text};
`
