import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import "./map.css"

const mapStyles = {
  width: '50%',
  height: '100%'
  
  
};

export class MapContainer extends Component {
  render() {
    return (<>
      <Map  
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 33.44797417024289,
            lng: -101.6583900242023
          }
        }
      />

      <h1 className='class2'>hello</h1></>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD58_u-szZ413gS9ASnCVwus1mkqh3R8Lc'
})(MapContainer);