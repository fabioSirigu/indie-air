import { memo } from 'react'
import { IconButton } from '../../components/Button/IconButton'
import { Icon } from '../../components/Icon'
import { Text } from '../../components/Text'
import { ItinerariesType } from '../../features/api/endpoints/types'
import { StyledWrapperStopovers } from './styled'

type Props = {
  departure: ItinerariesType
  returnFlight: ItinerariesType
  expanded: () => void
}
export const TypeOfFlight = memo(({ departure, returnFlight, expanded }: Props) => {
  return (
    <StyledWrapperStopovers>
      {departure.segments.length > 1 && returnFlight.segments.length > 1 ? (
        <>
          <Text weight="mediumBold" color="dangerLight" variant="h3">
            Scali: {departure.segments.length - 1}
          </Text>
          <Icon iconName="arrival" color="dangerLight" />

          <IconButton background="primary" onClick={expanded} iconName="plus" rounded />
        </>
      ) : (
        <>
          <Text weight="mediumBold" variant="h3" color="confirm">
            Diretto
          </Text>
          <Icon iconName="plane" color="confirm" />
        </>
      )}
    </StyledWrapperStopovers>
  )
})
