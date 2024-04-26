'use client'


import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '1350px',
  height: '400px'
};

const center = {
  lat: 9.054186,
  lng: -79.5067129
};

const MapComponent = () => {
  return (
    <LoadScript
    googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker
          position={center}
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapComponent);