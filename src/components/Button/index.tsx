import { ButtonProps } from 'antd'
import React, { memo } from 'react'
import { ButtonStyleProps, StyledButton } from './styled'

export const Button = memo(
  ({ title, onClick, disabled, type, ...rest }: ButtonProps & ButtonStyleProps) => {
    return (
      <StyledButton onClick={onClick} disabled={disabled} type={type}>
        {title}
      </StyledButton>
    )
  }
)
