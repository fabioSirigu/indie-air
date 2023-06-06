import { DatePicker } from 'antd'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { searchActions } from '../../features/search/reducer'
import { StyledDateCard } from './styled'

dayjs.extend(customParseFormat)

const { RangePicker } = DatePicker

const dateFormat = 'YYYY/MM/DD'
const now = dayjs()

export const Date = () => {
  const dispatch = useDispatch()
  const handleDate = useCallback((value: any) => {
    return value.map((item: any) => item.format(dateFormat))
  }, [])
  return (
    <StyledDateCard>
      <RangePicker
        defaultValue={[dayjs(now, dateFormat), dayjs(now, dateFormat)]}
        format={dateFormat}
        onChange={(value) => dispatch(searchActions.addToFlightOffer(handleDate(value)))}
      />
    </StyledDateCard>
  )
}
