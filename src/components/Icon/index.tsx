// import { PropsWithChildren } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { memo } from 'react'
import { theme, ThemeColor } from '../../style/theme'
// import { ThemeColor } from '../../style/theme'
import { NameIcon } from './config'
import { icons } from './config'

type Props = {
  iconName: NameIcon
  color?: ThemeColor
}
export const Icon = memo(({ iconName, color = 'text' }: Props) => {
  return <FontAwesomeIcon icon={icons[iconName]} color={theme.colors[color]} />
})
