import Leaflet from 'leaflet';
import React from 'react';
import { Map as MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import useWindowDimensions from '../../lib/dimension/dimension';
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
        <Marker position={[51.505, -0.09]}>
          <Popup>
            <ul>
              <li>場所：</li>
              <li>トイレ：</li>
              <li>水道：</li>
              <li>屋根：</li>
              <li>駐車場：</li>
              <li>Google Mapへ移動：</li>
            </ul>
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
