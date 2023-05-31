import { Input } from '../Input'
import { Text } from '../Text'
import { StyledCard } from './styled'

type Props = {
  label: string
}
export const CardInfo = ({ label }: Props) => {
  return (
    <StyledCard>
      <Text>{label}</Text>
      <Input />
    </StyledCard>
  )
}
