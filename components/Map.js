import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'

function Map() {

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        longitude: -0.109889,
        latitude: 51.521245,
        zoom: 11
    })

  return (
    <ReactMapGL
        mapStyle='mapbox://styles/rtothaoss/cl1555xs3000715qryrg2szvu'
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
    >

    </ReactMapGL>
  )
}

export default Map