import styled, { css } from 'styled-components'

export const StyledBody = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;
  overflow: scroll;
`
export const StyledWrapperList = styled.div`
  width: 80%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.2rem;
  overflow: scroll;
`

export const StyledNoData = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: ${({ theme }) => theme.radii[2]}rem;
`
export const StyledCard = styled.div`
  padding: 0.75rem 1.25rem;
  border-radius: ${({ theme }) => theme.radii[2]}rem;
  color: ${({ theme }) => theme.colors.background};
  background: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 15px 4px rgba(0, 0, 0, 0.5);
  position: relative;
`
export const StyledItinerary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
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
  transition: 0.4s;
  ${({ extended }) =>
    extended
      ? css`
          display: inline;
          position: absolute;
          z-index: 1000;
          bottom: -40%;
          left: 0px;
          width: 100%;
          background: rgb(240, 240, 240);
          padding: 0.75rem 1.25rem;
          border-radius: 0 0 1rem 1rem;
          border-bottom: 2px solid rgba(0, 0, 0, 0.5);
          box-shadow: rgba(0, 0, 0, 0.5) 0px 20px 15px 4px;
        `
      : css`
          display: none;
        `}
`
export const StyledWrapperStopovers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  column-gap: 0.75rem;
  row-gap: 1rem;
`
export const StyledWrapperTitleCard = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const StyledDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
