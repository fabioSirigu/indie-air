import { InputNumber as AntInputNumber } from 'antd'
import { memo } from 'react'
import { Text } from '../Text'
import { StyledInputCard } from './styled'

type Props = {
  onChange?: (value: number | null) => void
  value?: number | null
}
export const InputNumber = memo(({ onChange, value }: Props) => {
  return (
    <StyledInputCard>
      <Text color="background">Passeggeri</Text>
      <AntInputNumber
        value={value}
        min={1}
        max={8}
        defaultValue={1}
        onChange={(value) => onChange?.(value)}
      />
    </StyledInputCard>
  )
})
