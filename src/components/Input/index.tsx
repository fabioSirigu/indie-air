import { Input as InputAntd } from 'antd'
import React from 'react'

type Props = {
  label?: string
  value?: string
  onChange?: (value?: string) => void
}
export const Input = ({ label, value, onChange }: Props) => {
  return (
    <InputAntd
      value={value}
      placeholder={label}
      allowClear
      onChange={({ target }) => onChange?.(target.value)}
    />
  )
}
