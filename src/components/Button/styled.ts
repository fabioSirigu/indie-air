import { Button } from 'antd'
import styled from 'styled-components'
import { ThemeColor, ThemeSize, ThemeSpacing } from '../../style/theme'

export type ButtonStyleProps = {
  background?: ThemeColor
  fontSize?: ThemeSize
  radius?: number
  padding?: ThemeSpacing
  color?: ThemeColor
}

export const StyledButton = styled(Button)<ButtonStyleProps>`
  color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.text)};
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme, background }) =>
    background ? theme.colors[background] : theme.colors.primary};
  font-size: ${({ theme, fontSize }) =>
    fontSize ? `${theme.fontSizes[fontSize]}rem` : '14px'};
  border: none;
  border-radius: ${({ theme, radius }) =>
    radius ? `${theme.radii[radius]}rem` : '0.4rem'};
  padding: ${({ theme, padding }) =>
    padding ? `${theme.spacings[padding]}rem` : '0.4rem'};
`
