import Leaflet from 'leaflet';
import React from 'react';
import { Map as MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import useWindowDimensions from 'lib/dimension/dimension';
import 'leaflet/dist/leaflet.css';

const MapPoint = () => {
  // FIXME: 現在はダミーデータなので、後にapiから取得できるようにする。
  const apidata = [
    {
      id: 1,
      name: '道の駅むかわ',
      lat: 42.5741851589376,
      lon: 141.92486292795556,
      price: 0,
      shower: 1,
      toilet: 1,
      roof: 1,
      parking: 1,
    },
    {
      id: 2,
      name: '豊幌公園',
      lat: 43.130335,
      lon: 141.620074,
      price: 0,
      shower: 0,
      toilet: 0,
      roof: 0,
      parking: 1,
    },
  ];

  return (
    <>
      {apidata.map((record, index) => {
        return (
          <Marker key={index} position={[record.lat, record.lon]}>
            <Popup>
              <ul>
                {record.name}
                <li>トイレ：</li>
                <li>水道：</li>
                <li>屋根：</li>
                <li>駐車場：</li>
                <li>Google Mapへ移動：</li>
              </ul>
            </Popup>
          </Marker>
        );
      })}
    </>
  );
};

export default MapPoint;
