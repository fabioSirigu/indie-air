import { Collapse } from 'antd'
import styled from 'styled-components'

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
  flex-direction: column;
  align-items: center;
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
  width: 60%;
  height: max-content;
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
  width: 90%;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.5);
`

export const StyledDepartureInfo = styled.div`
  color: ${({ theme }) => theme.colors.confirm};
`
export const StyledTimeInfo = styled.div`
  color: ${({ theme }) => theme.colors.background};
`
export const StyledArrivalInfo = styled.div`
  color: ${({ theme }) => theme.colors.confirm};
`

export const StyledFLightTrack = styled.div`
  display: flex;
  justify-content: space-around;
  column-gap: 1rem;
`

export const StyledAccordion = styled(Collapse)`
  width: 100%;
  padding: 0px;
`
export const StyledWrapperStopovers = styled.div`
  display: flex;
  padding: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  column-gap: 0.75rem;
  row-gap: 1rem;
`
export const StyledWrapperTitleCard = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const StyledDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
