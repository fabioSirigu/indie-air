import { useCallback, useMemo, useState } from 'react'
import Map, { Marker, Popup } from 'react-map-gl'
import { useGetAirportsQuery } from '../../features/api/endpoints/airportsEndpoints'
import { AirportDto } from '../../features/api/endpoints/types'
import { Loader } from '../Loader'
import Pin from '../MarkerPin'
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
export const MyMap = () => {
  const [popupInfo, setPopupInfo] = useState<City>()
  const { data: airports, isLoading } = useGetAirportsQuery()

  const filteredAirports = airports?.filter((item) => item.iata_code)

  const handleOpenPopUp = useCallback(
    (e: any, airport: AirportDto) => {
      e?.originalEvent?.stopPropagation()
      setPopupInfo(airport)
    },
    [setPopupInfo]
  )

  const pins = useMemo(
    () =>
      filteredAirports?.map((city, index) => (
        <Marker key={`marker-${index}`} longitude={city.lng} latitude={city.lat}>
          <img
            onMouseEnter={() => setPopupInfo(city)}
            onMouseLeave={() => setPopupInfo(undefined)}
            src="https://cdn-icons-png.flaticon.com/512/7720/7720736.png"
            style={{
              width: '35px',
              height: '35px'
            }}
            alt="marker icon"
          />
        </Marker>
      )),
    [filteredAirports, handleOpenPopUp]
  )
  if (isLoading) return <Loader />
  return (
    <StyledMap>
      <Map
        mapboxAccessToken="pk.eyJ1IjoiZmFsY28xMCIsImEiOiJjbGlicmsyY3MwNGhrM2lwNnBwYXFja25yIn0.h84EOmlAodF3KTVmein4qQ"
        initialViewState={{
          latitude: 39.22245441479327,
          longitude: 9.116767711363078,
          zoom: 5,
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
            onClose={() => setPopupInfo(undefined)}
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
      </Map>
    </StyledMap>
  )
}
