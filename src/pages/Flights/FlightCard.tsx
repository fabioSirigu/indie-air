import { memo, useCallback, useState } from 'react'
import { ItinerariesType } from '../../features/api/endpoints/types'
import { DepartureFlight } from './DepartureFlight'
import { ReturnFlight } from './ReturnFlight'
import { Stopovers } from './Stopovers'
import { StyledAccordion, StyledCard, StyledItinerary } from './styled'
import { TypeOfFlight } from './TypeOfFlight'

type Props = {
  itineraries: ItinerariesType[]
}
export const FlightCard = memo(({ itineraries }: Props) => {
  const [expanded, setExpanded] = useState(false)

  const handleExpanded = useCallback(() => {
    setExpanded(!expanded)
  }, [setExpanded, expanded])

  const [departureFlight, returnFlight] = itineraries

  return (
    <StyledCard>
      <StyledItinerary>
        <TypeOfFlight
          expanded={handleExpanded}
          departure={departureFlight}
          returnFlight={returnFlight}
          dropdown={expanded ? 'minus' : 'plus'}
        />
        <DepartureFlight departure={departureFlight} />
        <ReturnFlight returnFlight={returnFlight} />

        <StyledAccordion extended={expanded}>
          <Stopovers departure={departureFlight} returnFlight={returnFlight} />
        </StyledAccordion>
      </StyledItinerary>
    </StyledCard>
  )
})
