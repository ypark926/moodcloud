import GoogleMapReact from 'google-map-react'
import React, {Component, createRef} from 'react'
require('../../secrets')

class MapView extends Component {
  render() {
    return (
      <section className="col-8 h-lg">
        <h1>stop being hangry bro, we're all annoyed w/ you now</h1>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.API_KEY,
            libraries: ['places', 'directions']
          }}
          defaultZoom={11} // Supports DP, e.g 11.5
          defaultCenter={{lat: 40.73, lng: -73.93}}
          yesIWantToUseGoogleMapApiInternals={true}
          onGoogleApiLoaded={({map, maps}) => this.apiHasLoaded(map, maps)}
        />
      </section>
    )
  }
}

export default MapView
