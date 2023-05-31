import { Empty } from 'antd'
import styled from 'styled-components'

export const StyledEmptyPage = styled(Empty)`
  display: flex;
  flex-direction: column;
  .ant-empty-description {
    color: white;
  }
  height: 100vh;
  justify-content: center;
  align-items: center;
`
