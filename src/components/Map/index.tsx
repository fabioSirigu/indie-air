import { Map as MapGl } from 'react-map-gl'
import { StyledMap } from './styled'

export const Map = () => {
  return (
    <StyledMap>
      <MapGl
        mapboxAccessToken="pk.eyJ1IjoiZmFsY28xMCIsImEiOiJjbGlicmsyY3MwNGhrM2lwNnBwYXFja25yIn0.h84EOmlAodF3KTVmein4qQ"
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14
        }}
        style={{
          width: '100%'
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </StyledMap>
  )
}
