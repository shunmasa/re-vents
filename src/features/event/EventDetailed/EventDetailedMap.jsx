import React from 'react'
import { Segment,Icon } from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react'

const Marker = () =><Icon name='marker' size='big'color='red'/>

const EventDetailedMap = ({lat,lng}) => {
    const center = [lat,lng];
    const zoom = 14
  return (
    <div>
      <Segment attached="bottom" style={{padding:0}}>
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyDRkQc6uBwu1nHO_LRYgkoC67K1QjwQ3u8'}}
          defaultCenter={center}
          defaultZoom={zoom}
        >
        <Marker
            lat={lat}
            lng={lng}
          />
        </GoogleMapReact>
      </div>
      </Segment>
    </div>
  )
}

export default EventDetailedMap
