import React from 'react';
import { Map as MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import useSWR from 'swr';

import useWindowDimensions from 'lib/dimension/dimension';
import 'leaflet/dist/leaflet.css';

type GetData = {
  data: data;
  isLoading: boolean;
  isError: any;
};

type data = {
  id: number;
  name: string;
  lat: number;
  lon: number;
  price: number;
  shower: number;
  water: number;
  toilet: number;
  roof: number;
  parking: number;
};

const MapPoint = () => {
  const data = useHelloSwr();

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

function useHelloSwr(): Object {
  const { data, error } = useSWR(`/api/mapinfo`, fetcher);
  return data;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default MapPoint;
