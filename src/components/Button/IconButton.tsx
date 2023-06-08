import { ButtonProps } from 'antd'
import React, { memo, PropsWithChildren } from 'react'
import { Icon } from '../Icon'
import { NameIcon } from '../Icon/config'
import { StyledButton } from './styled'

type Props = PropsWithChildren<Partial<ButtonProps>>
type IconProps = {
  onClick: () => void
  iconName: NameIcon
}
export const IconButton = memo(({ iconName, onClick, disabled }: Props & IconProps) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      <Icon iconName={iconName} />
    </StyledButton>
  )
})
