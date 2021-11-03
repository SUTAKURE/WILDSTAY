import React from 'react';
import { Map as MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import useWindowDimensions from '../dimension/dimension';
import 'leaflet/dist/leaflet.css';

const Map = () => {
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
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
