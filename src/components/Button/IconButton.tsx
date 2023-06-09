import { ButtonProps } from 'antd'
import React, { memo, PropsWithChildren } from 'react'
import { ThemeColor } from '../../style/theme'
import { Icon } from '../Icon'
import { NameIcon } from '../Icon/config'
import { StyledButton } from './styled'

type Props = PropsWithChildren<Partial<ButtonProps>>
type IconProps = {
  onClick: () => void
  iconName: NameIcon
  background?: ThemeColor
  rounded?: boolean
}
export const IconButton = memo(
  ({ iconName, onClick, disabled, background, rounded }: Props & IconProps) => {
    return (
      <StyledButton
        background={background}
        rounded={rounded}
        disabled={disabled}
        onClick={onClick}
      >
        <Icon iconName={iconName} />
      </StyledButton>
    )
  }
)
