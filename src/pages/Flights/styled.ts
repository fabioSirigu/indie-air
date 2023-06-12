import styled, { css } from 'styled-components'

export const StyledBody = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;
  overflow: scroll;
`

export const StyledCard = styled.div`
  padding: 0.75rem 1.25rem;
  width: 30%;
  border-radius: ${({ theme }) => theme.radii[2]}rem;
  color: ${({ theme }) => theme.colors.background};
  background: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 15px 4px rgba(0, 0, 0, 0.5);
`
export const StyledItinerary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  position: relative;
`

export const StyledDepartureInfo = styled.div``
export const StyledTimeInfo = styled.div``
export const StyledArrivalInfo = styled.div``

export const StyledFLightTrack = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 1.5rem;
`

type PropsAccordion = {
  extended: boolean
}
export const StyledAccordion = styled.div<PropsAccordion>`
  ${({ extended }) =>
    extended
      ? css`
          display: inline;
        `
      : css`
          display: none;
        `}
`

export const StyledWrapperStopovers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.75rem;
`
export const StyledWrapperStopover = styled.div``
