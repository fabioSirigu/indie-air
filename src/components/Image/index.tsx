import { StyledImage } from './styled'

type Props = {
  url: string
}
export const Image = ({ url }: Props) => {
  return <StyledImage src={url} />
}
