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
export const ReturnFlight = ({ returnFlight }: Props) => {
  return (
    <StyledFLightTrack>
      <Text color="text" weight="bold">
        Ritorno
      </Text>
      <StyledDepartureInfo>
        {returnFlight.segments[0].departure.iataCode}
      </StyledDepartureInfo>
      <StyledTimeInfo>Tempo di volo {returnFlight.duration.slice(2)}</StyledTimeInfo>
      <StyledArrivalInfo>{returnFlight.segments[0].arrival.iataCode}</StyledArrivalInfo>
    </StyledFLightTrack>
  )
}
