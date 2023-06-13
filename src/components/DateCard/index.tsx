import { DatePicker } from 'antd'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import React, { memo, useCallback } from 'react'
import { Text } from '../Text'
import { StyledDateCard } from './styled'

dayjs.extend(customParseFormat)

const { RangePicker } = DatePicker
const dateFormat = 'YYYY-MM-DD'

type Props = {
  onChange: (value: string[]) => void
}

export const Date = memo(({ onChange }: Props) => {
  const handleChange = useCallback(
    (value: dayjs.Dayjs[]) => {
      console.log(value)
      const formattedDates = value
        ? value.map((item: any) => item.format(dateFormat))
        : ['', '']
      onChange(formattedDates)
    },
    [onChange]
  )
  return (
    <StyledDateCard>
      <Text color="background">Date</Text>
      <RangePicker
        format={dateFormat}
        onChange={(value) => handleChange(value as dayjs.Dayjs[])}
      />
    </StyledDateCard>
  )
})
