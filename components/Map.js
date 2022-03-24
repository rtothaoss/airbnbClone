import React, { useState } from 'react'
import Map, { Marker, Popup } from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'
import 'mapbox-gl/dist/mapbox-gl.css'

function MapComponent({ searchResults }) {

    const [selectedLocation, setSelectedLocation] = useState({})
    // const [showPopup, setShowPopup] = useState(true)

    const coordinates = searchResults.map(item => ({
        longitude: item.long,
        latitude: item.lat
    }))

    const center = getCenter(coordinates)

    const [viewState, setViewState] = useState({
        width: '100%',
        height: '100%',
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11
    })



    return (
        <Map
            mapStyle='mapbox://styles/rtothaoss/cl1555xs3000715qryrg2szvu'
            mapboxAccessToken={process.env.mapbox_key}
            {...viewState}
            onMove={evt => setViewState(evt.viewState)}
        >
            {searchResults.map((result) => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        anchor='center'
                    >
                        <p onClick={() => setSelectedLocation(result)} className='cursor-pointer text-2xl animate-bounce'>📌</p>
                    </Marker>

                    {selectedLocation.long === result.long ? (
                        <Popup
                            // onClose={() => setShowPopup(false)}
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}
                        >
                            {result.title}
                        </Popup>
                    ) : false}

                </div>
            ))}


        </Map>
    )
}

export default MapComponent