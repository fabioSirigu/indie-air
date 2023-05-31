import { DatePicker } from 'antd'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import React from 'react'
import { Text } from '../Text'
import { StyledDateCard } from './styled'

dayjs.extend(customParseFormat)

const { RangePicker } = DatePicker

const dateFormat = 'YYYY/MM/DD'

export const Date: React.FC = () => (
  <StyledDateCard>
    <Text color="background">Partenza - Ritorno</Text>
    <RangePicker
      defaultValue={[dayjs('2015/01/01', dateFormat), dayjs('2015/01/01', dateFormat)]}
      format={dateFormat}
    />
  </StyledDateCard>
)
