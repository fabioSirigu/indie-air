import { CardInfo } from '../CardInfo'
import { dataFilter } from './mockFilter'
import { StyledFilter } from './styled'

export const FilterRow = () => {
  return (
    <StyledFilter>
      {dataFilter.map((item) => (
        <CardInfo label={item.label} />
      ))}
    </StyledFilter>
  )
}
