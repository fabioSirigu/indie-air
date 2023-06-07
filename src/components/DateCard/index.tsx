import { log } from 'console'
import { DatePicker } from 'antd'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { searchActions } from '../../features/search/reducer'
import { StyledDateCard } from './styled'

dayjs.extend(customParseFormat)

const { RangePicker } = DatePicker
const dateFormat = 'YYYY-MM-DD'

type Props = {
  onChange?: () => void
}
export const Date = ({ onChange }: Props) => {
  const dispatch = useDispatch()
  const handleChange = useCallback(
    (value: any) => {
      const formattedDates = value
        ? value.map((item: any) => item.format(dateFormat))
        : ''
      console.log(formattedDates)

      dispatch(
        searchActions.updateSearchParams({
          key: 'departureDate',
          value: formattedDates[0]
        })
      )
      dispatch(
        searchActions.updateSearchParams({
          key: 'arrivalDate',
          value: formattedDates[1]
        })
      )
    },
    [dispatch]
  )
  return (
    <StyledDateCard>
      <RangePicker format={dateFormat} onChange={handleChange} />
    </StyledDateCard>
  )
}
