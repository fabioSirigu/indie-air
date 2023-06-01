import { Button as AntButton, ButtonProps } from 'antd'
import React from 'react'
import { ButtonStyleProps, StyledButton } from './styled'

export const Button = ({
  title,
  onClick,
  disabled,
  type,
  ...rest
}: ButtonProps & ButtonStyleProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} type={type}>
      {title}
    </StyledButton>
  )
}
