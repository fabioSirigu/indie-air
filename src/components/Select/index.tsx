import { InputNumber } from 'antd'
import React from 'react'

type Props = {
  onChange?: (value?: number) => void
}

export const Select = ({ onChange }: Props) => (
  <InputNumber min={1} max={8} defaultValue={3} onChange={() => onChange?.()} />
)
