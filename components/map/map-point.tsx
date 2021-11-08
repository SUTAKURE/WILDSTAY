import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import TemporaryDrawer from 'components/drawer/drawer';
import GetMapInfo from 'lib/getMapInfo/getmapinfo';

import 'leaflet/dist/leaflet.css';

type Props = {
  children?: React.ReactNode;
};

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
                <TemporaryDrawer Props={record.id} />
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
