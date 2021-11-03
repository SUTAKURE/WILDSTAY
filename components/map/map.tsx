import Leaflet from 'leaflet';
import React from 'react';
import { Map as MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MapPoint from './map-point';
import useWindowDimensions from 'lib/dimension/dimension';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/';
  const { width, height } = useWindowDimensions();
  return (
    <>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: height, width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <MapPoint />
      </MapContainer>
    </>
  );
};

export default Map;
