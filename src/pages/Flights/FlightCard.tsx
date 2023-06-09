import { set } from 'immer/dist/internal'
import { useCallback, useState } from 'react'
import { IconButton } from '../../components/Button/IconButton'
import { Text } from '../../components/Text'
import { ItinerariesType } from '../../features/api/endpoints/types'
import { DepartureFlight } from './DepartureFlight'
import { ReturnFlight } from './ReturnFlight'
import { Stopovers } from './Stopovers'
import {
  StyledAccordion,
  StyledButton,
  StyledCard,
  StyledItinerary,
  StyledWrapperStopovers
} from './styled'
import { TypeOfFlight } from './TypeOfFlight'

type Props = {
  itineraries: ItinerariesType[]
}
export const FlightCard = ({ itineraries }: Props) => {
  const [expanded, setExpanded] = useState(false)

  const handleExpanded = useCallback(() => {
    setExpanded(!expanded)
  }, [setExpanded, expanded])

  const [departureFlight, returnFlight] = itineraries
  console.log('ingresso in flight card', departureFlight.segments)
  return (
    <StyledCard>
      <StyledItinerary>
        <TypeOfFlight
          expanded={handleExpanded}
          departure={departureFlight}
          returnFlight={returnFlight}
        />
        <DepartureFlight departure={departureFlight} />
        <ReturnFlight returnFlight={returnFlight} />

        <StyledAccordion extended={expanded}>
          <Stopovers departure={departureFlight} returnFlight={returnFlight} />
        </StyledAccordion>
      </StyledItinerary>
    </StyledCard>
  )
}
