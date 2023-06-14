import { memo, useCallback, useMemo, useState } from 'react'
import Map, { Layer, Marker, Popup, Source } from 'react-map-gl'
import { useDispatch, useSelector } from 'react-redux'
import { useGetAirportsQuery } from '../../features/api/endpoints/airportsEndpoints'
import { Airport } from '../../features/api/endpoints/types'
import { searchActions } from '../../features/search/reducer'
import { searchFlightsOptions } from '../../features/search/selectors'
import { StyledLoader } from '../../style/global'
import { Text } from '../Text'
import {
  City,
  initialStateView,
  styledPopup,
  styleIconMarker,
  styleLine,
  styleMap,
  token
} from './config'
import { StyledMap } from './styled'
import { CreateGeojson, setAirport, setIcon } from './utils'

export const MyMap = memo(() => {
  const dispatch = useDispatch()

  const selectedAirports = useSelector(searchFlightsOptions)

  const geojson = CreateGeojson(selectedAirports)

  const [popupInfo, setPopupInfo] = useState<City>()
  const { data: airports, isLoading } = useGetAirportsQuery()

  const filteredAirports = airports?.filter((item: Airport) => item.iata_code)

  const handleOpenPopUp = useCallback(
    (e: any, airport: Airport) => {
      e?.originalEvent?.stopPropagation()
      setPopupInfo(airport)
      dispatch(searchActions.updateAirport(setAirport(airport)))
    },
    [setPopupInfo, dispatch]
  )

  const pins = useMemo(
    () =>
      filteredAirports?.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.lng}
          latitude={city.lat}
          onClick={(e) => handleOpenPopUp(e, city)}
        >
          <img
            onMouseEnter={() => setPopupInfo(city)}
            onMouseLeave={() => setPopupInfo(undefined)}
            src={setIcon(city, selectedAirports)}
            style={styleIconMarker}
            alt="marker icon"
          />
        </Marker>
      )),
    [filteredAirports, handleOpenPopUp, selectedAirports]
  )

  if (isLoading) return <StyledLoader />

  return (
    <StyledMap>
      <Map
        mapboxAccessToken={token}
        initialViewState={initialStateView}
        style={styleMap}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        {pins}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.lng)}
            latitude={Number(popupInfo.lat)}
            closeButton={false}
          >
            <div style={styledPopup}>
              <Text color="primary">{popupInfo.name}</Text>
              <Text color="primary">{popupInfo.iata_code}</Text>
            </div>
          </Popup>
        )}
        <Source id="polylineLayer" type="geojson" data={geojson}>
          <Layer
            id={styleLine.id}
            type={styleLine.type}
            layout={styleLine.layout}
            paint={styleLine.paint}
          />
        </Source>
      </Map>
    </StyledMap>
  )
})
