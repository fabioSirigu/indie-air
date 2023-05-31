import { FilterRow } from '../../components/FilterRow'
import { Map } from '../../components/Map'
import { StyledMain } from './styled'

export const Home = () => {
  return (
    <div className="App">
      <StyledMain>
        <FilterRow />
        <Map />
      </StyledMain>
    </div>
  )
}
