import { Input } from '../Input'
import { StyledCard } from './styled'

type Props = {
  label: string
  value: string
  onChange: () => void
}
export const CardInfo = ({ label, value, onChange }: Props) => {
  return (
    <StyledCard>
      <Input label={label} value={value} onChange={onChange} />
    </StyledCard>
  )
}
