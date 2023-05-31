import styled from 'styled-components'

export const StyledFilter = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: center;
  column-gap: 0.5rem;
  border-radius: ${({ theme }) => theme.radii[2]}rem;
`
