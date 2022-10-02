import React, { Suspense } from 'react'
import GoogleMapReact from 'google-map-react';

const isClient = typeof window !== "undefined"

const GMap = ({ lat, lng }) => {
  return (
    <>
      {isClient && (
        <div style={{ height: '100vh', width: '100%' }}>
          <Suspense fallback={<div />}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: process.env.GATSBY_GMAP_API_KEY }}
              defaultCenter={{ lat, lng }}
              defaultZoom={6}
            />
          </Suspense>
        </div>
      )}
    </>
  )
}

export default GMap
