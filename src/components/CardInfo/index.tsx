import { memo } from 'react'
import { Input } from '../Input'
import { Text } from '../Text'
import { StyledCard } from './styled'

type Props = {
  label: string
  value: string
  onChange: () => void
}
export const CardInfo = memo(({ label, value, onChange }: Props) => {
  return (
    <StyledCard>
      <Text color="background">{label}</Text>
      <Input label={label} value={value} onChange={onChange} />
    </StyledCard>
  )
})
