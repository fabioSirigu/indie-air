import { useMemo, useState } from 'react'
import Map, { Marker, Popup } from 'react-map-gl'
import CITIES from '../../data/cities.json'
import Pin from '../MarkerPin'
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
  const [popupInfo, setPopupInfo] = useState(null)

  const pins = useMemo(
    () =>
      CITIES.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.lng}
          latitude={city.lat}
          /* onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation()
            setPopupInfo()
          }} */
        >
          <Pin />
        </Marker>
      )),
    []
  )
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
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        {pins}

        {/* {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo)}
            latitude={Number(popupInfo)}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              {popupInfo}, {popupInfo} |{' '}
            </div>
          </Popup>
        )} */}
      </Map>
    </StyledMap>
  )
}
