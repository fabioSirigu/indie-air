import { IconButton } from '../../components/Button/IconButton'
import { Icon } from '../../components/Icon'
import { ItinerariesType } from '../../features/api/endpoints/types'
import { DepartureFlight } from './DepartureFlight'
import { ReturnFlight } from './ReturnFlight'
import { StyledAccordion, StyledCard, StyledItinerary } from './styled'

type Props = {
  itineraries: ItinerariesType[]
}
export const FlightCard = ({ itineraries }: Props) => {
  const [departureFlight, returnFlight] = itineraries
  console.log('ingresso in flight card', departureFlight.segments)
  return (
    <StyledCard>
      <StyledItinerary>
        <DepartureFlight departure={departureFlight} />
        <ReturnFlight returnFlight={returnFlight} />
        <StyledAccordion>
          <IconButton onClick={() => console.log('')} iconName="plus" />
        </StyledAccordion>
      </StyledItinerary>
    </StyledCard>
  )
}

/* type Props = {
  arrival: any
  departure: any
} */
