import { Button } from '../Button/Button'
import { CardInfo } from '../CardInfo'
import { Date } from '../DateCard'
import { Logo } from '../Logo'
import { dataFilter } from './mockFilter'
import { StyledFilter } from './styled'

export const FilterRow = () => {
  return (
    <StyledFilter>
      <Logo />
      {dataFilter.map((item) => (
        <CardInfo label={item.label} />
      ))}
      <Date />
      <Button title="Cerca" background="primary" />
    </StyledFilter>
  )
}
