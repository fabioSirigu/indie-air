import { Input as InputAntd } from 'antd'
import React from 'react'

type Props = {
  value?: string
  onChange?: (value?: string) => void
}
export const Input = ({ value, onChange }: Props) => {
  return (
    <InputAntd
      value={value}
      placeholder="Cerca voli..."
      allowClear
      onChange={({ target }) => onChange?.(target.value)}
    />
  )
}
