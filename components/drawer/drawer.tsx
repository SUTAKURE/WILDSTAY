import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import React, { FC, useState, useEffect, useRef } from 'react';
import updateMapInfo from 'lib/mapInfo/updateMapInfo';

type upProps = {
  bool: boolean;
};

interface DBModel {
  id?: number;
  name?: number;
  price?: number;
  shower?: number;
  water?: number;
  toilet?: number;
  roof?: number;
  parking?: number;
}

const TemporaryDrawer: FC<DBModel> = (DBModel) => {
  const { id, name, price, shower, water, toilet, roof, parking } = DBModel;
  const [state, setState] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [campstate, setCampState] = useState({
    ccid: id,
    ccname: name,
    ccprice: price,
    ccshower: shower,
    ccwater: water,
    cctoilet: toilet,
    ccroof: roof,
    ccparking: parking,
  });

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    setState(open);
  };

  const dataUpdate = (topen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    setOpen(topen);
  };

  const list = () => (
    <Box sx={{ width: '100%' }} onClick={toggleDrawer(true)}>
      <Button onClick={dataUpdate(!open)}>データを更新する</Button>
      <ListUpdate bool={open} />
    </Box>
  );

  const ListUpdate: FC<upProps> = (upProps) => {
    const { bool } = upProps;

    if (bool === true) {
      return <ListDB />;
    } else {
      return <></>;
    }
  };

  const ListDB: FC<DBModel> = (DBModel) => {
    const { id, name, price, shower, water, toilet, roof, parking } = DBModel;

    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
      const value = event.target.value as keyof typeof campstate;
      const name = event.target.name as keyof typeof campstate;

      setCampState({
        ...campstate,
        [name]: value,
      });
    };

    const SelectName = ({ cname, name }: { cname: string; name: string }) => {
      return (
        <>
          <InputLabel htmlFor={cname}>{name}</InputLabel>
          <Select
            native
            // TODO: コンパイル的にはエラーだが、とりあえず動くのでリファクタリング対象
            value={campstate[cname]}
            onChange={handleChange}
            inputProps={{
              name: cname,
              id: cname,
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

    const SelectPrice = ({ cname, name }: { cname: string; name: string }) => {
      return (
        <>
          <InputLabel htmlFor={cname}>{name}</InputLabel>
          <Select
            native
            // TODO: コンパイル的にはエラーだが、とりあえず動くのでリファクタリング対象
            value={campstate[cname]}
            onChange={handleChange}
            inputProps={{
              name: cname,
              id: cname,
            }}
          >
            <option value={0}>0円</option>
            <option value={1}>100円</option>
            <option value={2}>200円</option>
          </Select>
        </>
      );
    };

    const SelectItem = ({ cname, name }: { cname: string; name: string }) => {
      return (
        <>
          <InputLabel htmlFor={cname}>{name}</InputLabel>
          <Select
            native
            // TODO: コンパイル的にはエラーだが、とりあえず動くのでリファクタリング対象
            value={campstate[cname]}
            onChange={handleChange}
            inputProps={{
              name: cname,
              id: cname,
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
        <SelectName cname={'ccname'} name={'場所'} />
        <SelectPrice cname={'ccpricw'} name={'宿泊代'} />
        <SelectItem cname={'ccshower'} name={'シャワー'} />
        <SelectItem cname={'ccwater'} name={'水道'} />
        <SelectItem cname={'cctoilet'} name={'トイレ'} />
        <SelectItem cname={'ccroof'} name={'屋根'} />
        <SelectItem cname={'ccparking'} name={'駐車場'} />
        <Button
          onClick={updateMapInfo(
            campstate.ccid,
            campstate.ccname,
            campstate.ccprice,
            campstate.ccshower,
            campstate.ccwater,
            campstate.cctoilet,
            campstate.ccroof,
            campstate.ccparking,
          )}
        >
          アップデート
        </Button>
      </>
    );
  };

  return (
    <div>
      <React.Fragment key={'bottom'}>
        <Button onClick={toggleDrawer(true)}>クリック</Button>
        <Drawer anchor='bottom' open={state} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default TemporaryDrawer;
