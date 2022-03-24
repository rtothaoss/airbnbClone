import React, { useState } from 'react'
import Map from 'react-map-gl'

function MapComponent() {

    const [viewState, setViewState] = useState({
        width: '100%',
        height: '100%',
        longitude: -0.109889,
        latitude: 51.521245,
        zoom: 11
    })

  return (
    <Map
        mapStyle='mapbox://styles/rtothaoss/cl1555xs3000715qryrg2szvu'
        mapboxAccessToken={process.env.mapbox_key}
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        
    >

    </Map>
  )
}

export default MapComponent