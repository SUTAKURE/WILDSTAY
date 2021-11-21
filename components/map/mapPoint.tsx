import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import DetailModal from 'components/modal/modal';
import GetMapInfo from 'lib/mapInfo/getMapInfo';

import 'leaflet/dist/leaflet.css';

const MapPoint = () => {
  const { data, isLoading, isError } = GetMapInfo();
  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;
  return (
    <>
      {data.map((record, index) => {
        return (
          <Marker key={index} position={[record.lat, record.lon]}>
            <Popup>
              <ul>
                <li>場所：{numToName(record.name)}</li>
                <li>価格：{numToPrice(record.price)}</li>
                <li>シャワー：{numToItem(record.shower)}</li>
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
                <DetailModal
                  id={record.id}
                  name={record.name}
                  price={record.price}
                  shower={record.shower}
                  water={record.water}
                  toilet={record.toilet}
                  roof={record.roof}
                  parking={record.parking}
                  lat={record.lat}
                  lon={record.lon}
                />
              </ul>
            </Popup>
          </Marker>
        );
      })}
    </>
  );
};

function numToName(n: number): string {
  let item = '';

  switch (n) {
    case 0:
      item = '道の駅';
      break;

    case 1:
      item = '公園';
      break;

    case 2:
      item = '砂浜';
      break;

    case 3:
      item = '不明';
      break;
  }

  return item;
}

function numToPrice(n: number): string {
  const price = n * 100;

  return price + '円';
}

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
