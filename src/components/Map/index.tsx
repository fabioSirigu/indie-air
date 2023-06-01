import { useMemo, useState } from 'react'
import Map, { Marker } from 'react-map-gl'
import CITIES from '../../data/cities.json'
import Pin from '../MarkerPin'
import { StyledMap } from './styled'

export const MyMap = () => {
  const [popupInfo, setPopupInfo] = useState(null)

  const pins = useMemo(
    () =>
      CITIES.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          /* onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation()
            setPopupInfo(city)
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
      </Map>
    </StyledMap>
  )
}
