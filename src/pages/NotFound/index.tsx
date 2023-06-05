import { Empty } from 'antd'
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { StyledEmptyPage } from './styled'

export const NotFound = () => {
  const navigate = useNavigate()
  const handleNavigate = useCallback(() => {
    navigate('/')
  }, [navigate])

  return (
    <StyledEmptyPage image={Empty.PRESENTED_IMAGE_SIMPLE}>
      <Button title="Go Back" onClick={handleNavigate} />
    </StyledEmptyPage>
  )
}
