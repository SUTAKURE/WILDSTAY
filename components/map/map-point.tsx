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
      water: 1,
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
      water: 1,
      toilet: 0,
      roof: 0,
      parking: 1,
    },
  ];

  const map =
    "https://www.google.co.jp/maps/place/42%C2%B034'24.4%22N+141%C2%B055'29.6%22E/@42.5734547,141.9226982,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d42.5734547!4d141.9248869?hl=ja&authuser=0";
  return (
    <>
      {apidata.map((record, index) => {
        return (
          <Marker key={index} position={[record.lat, record.lon]}>
            <Popup>
              <ul>
                {record.name}
                <li>価格：{record.price}円</li>
                <li>トイレ：{numToItem(record.toilet)}</li>
                <li>水道：{numToItem(record.water)}</li>
                <li>屋根：{numToItem(record.roof)}</li>
                <li>駐車場：{numToItem(record.parking)}</li>
                <a
                  href={generateGoogleMapUrl(record.lat, record.lon)}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Google Mapへ移動
                </a>
              </ul>
            </Popup>
          </Marker>
        );
      })}
    </>
  );
};

function numToItem(n: number): string {
  let item = '不明';
  switch (n) {
    case 0:
      item = '無';
      break;

    case 1:
      item = '有';
      break;
  }
  return item;
}

function generateGoogleMapUrl(lat: number, lon: number): string {
  return (
    'https://www.google.co.jp/maps/search/' + lat + ',+' + lon + '/@' + lat + ',' + lon + ',17z'
  );
}

export default MapPoint;

// return 'https://www.google.com/maps/search/?api=1&query=' + place;
