import { DatePicker } from 'antd'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import React from 'react'
import { StyledDateCard } from './styled'

dayjs.extend(customParseFormat)

const { RangePicker } = DatePicker

const dateFormat = 'DD/MM/YYYY'
const now = dayjs()

export const Date: React.FC = () => (
  <StyledDateCard>
    <RangePicker
      defaultValue={[dayjs(now, dateFormat), dayjs(now, dateFormat)]}
      format={dateFormat}
    />
  </StyledDateCard>
)
