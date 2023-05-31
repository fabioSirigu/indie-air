import { Button as AntButton, ButtonProps } from 'antd'
import React from 'react'

export const Button = ({ title, onClick, disabled, type }: ButtonProps) => {
  return (
    <AntButton onClick={onClick} disabled={disabled} type={type}>
      {title}
    </AntButton>
  )
}
