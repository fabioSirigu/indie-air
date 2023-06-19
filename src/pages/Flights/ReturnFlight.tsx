import { memo, useMemo } from 'react'
import { Text } from '../../components/Text'
import { ItinerariesType } from '../../features/api/endpoints/types'
import {
  StyledDepartureInfo,
  StyledTimeInfo,
  StyledArrivalInfo,
  StyledFLightTrack
} from './styled'

type Props = {
  returnFlight: ItinerariesType
}
export const ReturnFlight = memo(({ returnFlight }: Props) => {
  const setIndex = useMemo(() => {
    if (returnFlight.segments.length < 2) return 0
    return returnFlight.segments.length - 1
  }, [returnFlight])

  return (
    <StyledFLightTrack>
      <StyledDepartureInfo>
        {returnFlight.segments[0].departure.iataCode}
      </StyledDepartureInfo>
      <StyledTimeInfo>{returnFlight.duration.slice(2).toLowerCase()}</StyledTimeInfo>
      <StyledArrivalInfo>
        {returnFlight.segments[setIndex].arrival.iataCode}
      </StyledArrivalInfo>
    </StyledFLightTrack>
  )
})
