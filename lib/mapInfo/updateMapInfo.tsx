import React, { VFC, FC, useState } from 'react';

const UpdateMapInfo =
  (
    id: number | undefined,
    name: number | undefined,
    price: number | undefined,
    shower: number | undefined,
    water: number | undefined,
    toilet: number | undefined,
    roof: number | undefined,
    parking: number | undefined,
  ) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    const url = `/api/updateMapInfo`;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Id: id,
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
    location.reload();
  };

export default UpdateMapInfo;
