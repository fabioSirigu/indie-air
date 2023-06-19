import { Collapse } from 'antd'
import CollapsePanel from 'antd/es/collapse/CollapsePanel'
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
        <TypeOfFlight departure={departureFlight} returnFlight={returnFlight} />
        <DepartureFlight departure={departureFlight} />
        <ReturnFlight returnFlight={returnFlight} />
        {departureFlight.segments.length > 1 && returnFlight.segments.length > 1 ? (
          <StyledAccordion
            collapsible="header"
            activeKey={expanded ? ['1'] : undefined}
            ghost
            onChange={handleExpanded}
          >
            <CollapsePanel header="Scali" key="1">
              <Stopovers departure={departureFlight} returnFlight={returnFlight} />
            </CollapsePanel>
          </StyledAccordion>
        ) : null}
      </StyledItinerary>
    </StyledCard>
  )
})
