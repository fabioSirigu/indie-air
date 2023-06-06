import { InputNumber as AntInputNumber } from 'antd'
import { useDispatch } from 'react-redux'
import { searchActions } from '../../features/search/reducer'

export const InputNumber = () => {
  const dispatch = useDispatch()

  return (
    <AntInputNumber
      min={1}
      max={8}
      defaultValue={1}
      onChange={(value) =>
        dispatch(
          searchActions.updateSearchParams({ key: 'passengers', value: Number(value) })
        )
      }
    />
  )
}
