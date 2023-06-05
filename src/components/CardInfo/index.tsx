import { useSelector } from 'react-redux'
import { selectDeparture } from '../../features/search/selectors'
import { Input } from '../Input'
import { Text } from '../Text'
import { StyledCard } from './styled'

type Props = {
  label: string
  value: string
  onChange: () => void
}
export const CardInfo = ({ label, value, onChange }: Props) => {
  return (
    <StyledCard>
      <Text color="background">{label}</Text>
      <Input value={value} onChange={onChange} />
    </StyledCard>
  )
}
