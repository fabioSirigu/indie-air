import { AnyLayout, LinePaint } from 'mapbox-gl'
import { CSSProperties } from 'styled-components'

export const token =
  'pk.eyJ1IjoiZmFsY28xMCIsImEiOiJjbGlicmsyY3MwNGhrM2lwNnBwYXFja25yIn0.h84EOmlAodF3KTVmein4qQ'

export const initialStateView = {
  latitude: 39.22245441479327,
  longitude: 9.116767711363078,
  zoom: 4,
  bearing: 0,
  pitch: 0
}

export const styleMap = {
  width: '100%'
}

export const styledPopup = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  borderRadius: '1rem'
} as CSSProperties

export const styleIconMarker = {
  width: '35px',
  height: '35px'
}

export const styleLine = {
  id: 'lineaLayer',
  type: 'line' as 'line',
  source: 'data',
  layout: {
    'line-join': 'round',
    'line-cap': 'round'
  } as AnyLayout,
  paint: {
    'line-color': 'rgb(255, 0, 0)',
    'line-width': 3
  } as LinePaint
}

export type City = {
  name: string
  iata_code: string
  icao_code: string
  lat: number
  lng: number
  country_code: string
}
