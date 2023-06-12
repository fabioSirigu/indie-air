import { Text } from '../../components/Text'
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
    <>
      {departure.segments.map((item: SegmentsType, i) => {
        return (
          <StyledFLightTrack key={i}>
            <Text color="background">Andata</Text>
            <StyledDepartureInfo>{item.departure.iataCode}</StyledDepartureInfo>
            <StyledTimeInfo>{item.duration.slice(2).toLowerCase()}</StyledTimeInfo>
            <StyledArrivalInfo>{item.arrival.iataCode}</StyledArrivalInfo>
          </StyledFLightTrack>
        )
      })}
      {returnFlight.segments.map((item: SegmentsType, i) => {
        return (
          <StyledFLightTrack key={i}>
            <Text color="background">Ritorno</Text>
            <StyledDepartureInfo>{item.departure.iataCode}</StyledDepartureInfo>
            <StyledTimeInfo>{item.duration.slice(2).toLowerCase()}</StyledTimeInfo>
            <StyledArrivalInfo>{item.arrival.iataCode}</StyledArrivalInfo>
          </StyledFLightTrack>
        )
      })}
    </>
  )
}
