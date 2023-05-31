import { CardInfo } from '../CardInfo'
import { Date } from '../DateCard'
import { dataFilter } from './mockFilter'
import { StyledFilter } from './styled'

export const FilterRow = () => {
  return (
    <StyledFilter>
      {dataFilter.map((item) => (
        <CardInfo label={item.label} />
      ))}
      <Date />
    </StyledFilter>
  )
}
