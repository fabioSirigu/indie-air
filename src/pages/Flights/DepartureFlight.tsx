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
  departure: ItinerariesType
}
export const DepartureFlight = memo(({ departure }: Props) => {
  const setIndex = useMemo(() => {
    if (departure.segments.length < 2) return 0
    return departure.segments.length - 1
  }, [departure])

  return (
    <StyledFLightTrack>
      <StyledDepartureInfo>
        {departure.segments[0].departure.iataCode}
      </StyledDepartureInfo>
      <StyledTimeInfo>{departure.duration.slice(2).toLowerCase()}</StyledTimeInfo>
      <StyledArrivalInfo>
        {departure.segments[setIndex].arrival.iataCode}
      </StyledArrivalInfo>
    </StyledFLightTrack>
  )
})
