import { InputNumber as AntInputNumber } from 'antd'

type Props = {
  onChange?: (value: number | null) => void
  value?: number | null
}
export const InputNumber = ({ onChange, value }: Props) => {
  return (
    <AntInputNumber
      value={value}
      min={1}
      max={8}
      defaultValue={1}
      onChange={(value) => onChange?.(value)}
    />
  )
}
