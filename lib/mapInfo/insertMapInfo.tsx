import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';
import React, { VFC, FC, useEffect } from 'react';

const insertMapInfo =
  (
    lat: number | undefined,
    lon: number | undefined,
    name: number | undefined,
    price: number | undefined,
    shower: number | undefined,
    water: number | undefined,
    toilet: number | undefined,
    roof: number | undefined,
    parking: number | undefined,
  ) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    const url = `/api/insertMapInfo`;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Lat: lat,
        Lon: lon,
        Name: Number(name),
        Price: price,
        Shower: shower,
        Water: water,
        Toilet: toilet,
        Roof: roof,
        Parking: parking,
      }),
    };

    fetch(url, requestOptions);
    window.location.href = '/';
  };

export default insertMapInfo;
