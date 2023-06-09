import { ItinerariesType, SegmentsType } from '../../features/api/endpoints/types'
import {
  StyledFLightTrack,
  StyledDepartureInfo,
  StyledTimeInfo,
  StyledArrivalInfo
} from './styled'

type Props = {
  departure: ItinerariesType
  returnFlight: ItinerariesType
}
export const Stopovers = ({ departure, returnFlight }: Props) => {
  return (
    <StyledFLightTrack>
      {departure.segments.map((item: SegmentsType, i) => {
        return (
          <>
            <StyledDepartureInfo>{item.departure.iataCode}</StyledDepartureInfo>
            <StyledTimeInfo>{item.duration.slice(2)}</StyledTimeInfo>
            <StyledArrivalInfo>{item.arrival.iataCode}</StyledArrivalInfo>
          </>
        )
      })}
    </StyledFLightTrack>
  )
}
