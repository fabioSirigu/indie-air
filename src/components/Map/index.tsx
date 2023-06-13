import { GeoJSONSourceOptions } from 'mapbox-gl'
import { memo, useCallback, useMemo, useState } from 'react'
import Map, { Layer, Marker, Popup, Source } from 'react-map-gl'
import { useDispatch, useSelector } from 'react-redux'
import { useGetAirportsQuery } from '../../features/api/endpoints/airportsEndpoints'
import { Airport } from '../../features/api/endpoints/types'
import { searchActions } from '../../features/search/reducer'
import { searchFlightsOptions } from '../../features/search/selectors'
import { StyledLoader } from '../../style/global'
import { Text } from '../Text'
import { StyledMap } from './styled'

type City = {
  name: string
  iata_code: string
  icao_code: string
  lat: number
  lng: number
  country_code: string
}

const token =
  'pk.eyJ1IjoiZmFsY28xMCIsImEiOiJjbGlicmsyY3MwNGhrM2lwNnBwYXFja25yIn0.h84EOmlAodF3KTVmein4qQ'

export const MyMap = memo(() => {
  const dispatch = useDispatch()

  const selectedAirport = useSelector(searchFlightsOptions)
  const coordinates = useMemo(() => {
    const departure = selectedAirport.departureAirport
    const arrival = selectedAirport.arrivalAirport

    if (departure.lng && departure.lat && arrival.lng && arrival.lat)
      return [
        [departure.lng, departure.lat],
        [arrival.lng, arrival.lat]
      ]
    return []
  }, [selectedAirport])

  const [popupInfo, setPopupInfo] = useState<City>()
  const { data: airports, isLoading } = useGetAirportsQuery()

  const filteredAirports = airports?.filter((item: Airport) => item.iata_code)

  const geojson: GeoJSONSourceOptions['data'] = {
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates: coordinates || []
    },
    properties: {
      name: 'polyline'
    }
  }
  const handleOpenPopUp = useCallback(
    (e: any, airport: Airport) => {
      e?.originalEvent?.stopPropagation()
      setPopupInfo(airport)
      dispatch(
        searchActions.updateAirport({
          name: airport.name,
          iataCode: airport.iata_code,
          lat: airport.lat,
          lng: airport.lng
        })
      )
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
            src={
              city.name === selectedAirport.departureAirport.name ||
              city.name === selectedAirport.arrivalAirport.name
                ? 'https://img.icons8.com/?size=512&id=lbptJGvp4inW&format=png'
                : 'https://cdn-icons-png.flaticon.com/512/7720/7720736.png'
            }
            style={{
              width: '35px',
              height: '35px'
            }}
            alt="marker icon"
          />
        </Marker>
      )),
    [filteredAirports, handleOpenPopUp, selectedAirport]
  )

  if (isLoading) return <StyledLoader />

  return (
    <StyledMap>
      <Map
        mapboxAccessToken={token}
        initialViewState={{
          latitude: 39.22245441479327,
          longitude: 9.116767711363078,
          zoom: 4.5,
          bearing: 0,
          pitch: 0
        }}
        style={{
          width: '100%'
        }}
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
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                borderRadius: '1rem'
              }}
            >
              <Text color="primary">{popupInfo.name}</Text>
              <Text color="primary">{popupInfo.iata_code}</Text>
            </div>
          </Popup>
        )}
        <Source id="polylineLayer" type="geojson" data={geojson}>
          <Layer
            id="lineaLayer"
            type="line"
            source="data"
            layout={{
              'line-join': 'round',
              'line-cap': 'round'
            }}
            paint={{
              'line-color': 'rgb(255, 0, 0)',
              'line-width': 3
            }}
          />
        </Source>
      </Map>
    </StyledMap>
  )
})
