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
export const DepartureFlight = ({ departure }: Props) => {
  return (
    <StyledFLightTrack>
      <Text color="text" weight="bold">
        Andata
      </Text>
      <StyledDepartureInfo>
        {departure.segments[0].departure.iataCode}
      </StyledDepartureInfo>
      <StyledTimeInfo>Tempo di volo {departure.duration.slice(2)}</StyledTimeInfo>
      <StyledArrivalInfo>{departure.segments[0].arrival.iataCode}</StyledArrivalInfo>
    </StyledFLightTrack>
  )
}
