import { Collapse } from 'antd'
import styled from 'styled-components'

export const StyledBody = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`

export const StyledCard = styled.div`
  padding: 0.5rem 0;
  color: ${({ theme }) => theme.colors.text};
  width: 80%;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const StyledAccordion = styled.div`
  width: 50px;
  aspect-ratio: 1;
  position: absolute;
  border-radius: 50%;
  right: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
