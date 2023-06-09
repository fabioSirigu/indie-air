import { Empty } from 'antd'
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Text } from '../../components/Text'
import { StyledEmptyPage } from './styled'

export const NotFound = () => {
  const navigate = useNavigate()
  const handleNavigate = useCallback(() => {
    navigate('/')
  }, [navigate])

  return (
    <StyledEmptyPage image={Empty.PRESENTED_IMAGE_SIMPLE}>
      <Text variant="h1" color="danger">
        NOT FOUND
      </Text>
      <Button background="dangerLight" title="Go Back" onClick={handleNavigate} />
    </StyledEmptyPage>
  )
}
