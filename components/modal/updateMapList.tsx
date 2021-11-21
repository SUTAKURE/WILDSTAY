import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import React, { FC, useState } from 'react';
import updateMapInfo from 'lib/mapInfo/updateMapInfo';
import { DBModel } from 'model/model';

// アップデート対象のマップ項目を表示する
export const UpdateMapList = ({ DBModel }: { DBModel: DBModel }) => {
  const { id, name, price, shower, water, toilet, roof, parking } = DBModel;

  const [mapList, setMapList] = useState({
    id: id,
    name: name,
    price: price,
    shower: shower,
    water: water,
    toilet: toilet,
    roof: roof,
    parking: parking,
  });

  const changeMapListState = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const value = event.target.value as keyof typeof mapList;
    const name = event.target.name as keyof typeof mapList;

    setMapList({
      ...mapList,
      [name]: value,
    });
  };

  const SelectName = ({ itemName, displayName }: { itemName: string; displayName: string }) => {
    return (
      <>
        <InputLabel htmlFor={itemName}>{displayName}</InputLabel>
        <Select
          native
          // @ts-ignore
          value={mapList[itemName]}
          onChange={changeMapListState}
          inputProps={{
            name: itemName,
            id: itemName,
          }}
        >
          <option value={0}>道の駅</option>
          <option value={1}>公園</option>
          <option value={2}>砂浜</option>
          <option value={3}>不明</option>
        </Select>
      </>
    );
  };

  const SelectPrice = ({ itemName, displayName }: { itemName: string; displayName: string }) => {
    return (
      <>
        <InputLabel htmlFor={itemName}>{displayName}</InputLabel>
        <Select
          native
          // @ts-ignore
          value={mapList[itemName]}
          onChange={changeMapListState}
          inputProps={{
            name: itemName,
            id: itemName,
          }}
        >
          <option value={0}>0円</option>
          <option value={1}>100円</option>
          <option value={2}>200円</option>
        </Select>
      </>
    );
  };

  const SelectItem = ({ itemName, displayName }: { itemName: string; displayName: string }) => {
    return (
      <>
        <InputLabel htmlFor={itemName}>{displayName}</InputLabel>
        <Select
          native
          // @ts-ignore
          value={mapList[itemName]}
          onChange={changeMapListState}
          inputProps={{
            name: itemName,
            id: itemName,
          }}
        >
          <option value={0}>無</option>
          <option value={1}>有</option>
          <option value={2}>不明</option>
        </Select>
      </>
    );
  };

  return (
    <>
      <SelectName itemName={'name'} displayName={'場所'} />
      <SelectPrice itemName={'price'} displayName={'宿泊代'} />
      <SelectItem itemName={'shower'} displayName={'シャワー'} />
      <SelectItem itemName={'water'} displayName={'水道'} />
      <SelectItem itemName={'toilet'} displayName={'トイレ'} />
      <SelectItem itemName={'roof'} displayName={'屋根'} />
      <SelectItem itemName={'parking'} displayName={'駐車場'} />
      <Button
        onClick={updateMapInfo(
          mapList.id,
          mapList.name,
          mapList.price,
          mapList.shower,
          mapList.water,
          mapList.toilet,
          mapList.roof,
          mapList.parking,
        )}
      >
        アップデート
      </Button>
    </>
  );
};
