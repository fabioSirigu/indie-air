import styled from 'styled-components'

export const StyledMap = styled.div`
  width: 800px;
  height: 400px;
  & canvas {
    border-radius: ${({ theme }) => theme.radii[3]}rem;
  }
  & .mapboxgl-ctrl-attrib {
    display: none;
  }
`
