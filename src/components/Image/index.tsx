import { memo } from 'react'
import { StyledImage } from './styled'

type Props = {
  url: string
}
export const Image = memo(({ url }: Props) => {
  return <StyledImage src={url} />
})
