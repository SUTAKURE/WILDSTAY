import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
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

  // 宿泊カテゴリー選択
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

  // 宿泊にかかる費用を表示（1500円まで)
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
          <option value={3}>300円</option>
          <option value={4}>400円</option>
          <option value={5}>500円</option>
          <option value={6}>600円</option>
          <option value={7}>700円</option>
          <option value={8}>800円</option>
          <option value={9}>900円</option>
          <option value={10}>1000円</option>
          <option value={11}>1100円</option>
          <option value={12}>1200円</option>
          <option value={13}>1300円</option>
          <option value={14}>1400円</option>
          <option value={15}>1500円</option>
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

      <div style={{ float: 'right' }}>
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
          設定を変更する
        </Button>
      </div>
    </>
  );
};
