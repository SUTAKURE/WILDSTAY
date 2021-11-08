import Select from '@material-ui/core//Select';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import List from '@material-ui/core/List';
import NativeSelect from '@material-ui/core/NativeSelect';
import React, { VFC, FC, useState } from 'react';
import updateMapInfo from 'lib/mapInfo/updateMapInfo';

type Anchor = 'bottom';

type upProps = {
  bool: boolean;
};

interface DbModel {
  id?: number;
  name?: string;
  price?: number;
  shower?: string;
  water?: string;
  toilet?: string;
  roof?: string;
  parking?: string;
}

const TemporaryDrawer: FC<DbModel> = (DbModel) => {
  const { name, price, shower, water, toilet, roof, parking } = DbModel;
  const [state, setState] = React.useState({
    bottom: false,
  });
  const [open, setOpen] = React.useState(false);

  const [campstate, setCampState] = React.useState({
    cname: false,
    name: name,
    price: price,
    shower: shower,
    water: water,
    toilet: toilet,
    roof: roof,
    parking: parking,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const dataUpdate = (topen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    setOpen(topen);
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: '100%' }}
      role='presentation'
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <Button onClick={dataUpdate(!open)}>データを更新する</Button>
      <ListUpdate bool={open} />
    </Box>
  );

  const ListUpdate: FC<upProps> = (upProps) => {
    const { bool } = upProps;
    const { id, name, price, shower, water, toilet, roof, parking } = DbModel;

    if (bool === true) {
      return (
        <ListDB
          id={id}
          name={name}
          price={price}
          shower={shower}
          water={water}
          toilet={toilet}
          roof={roof}
          parking={parking}
        />
      );
    } else {
      return <></>;
    }
  };

  const SelectDown: React.VoidFunctionComponent<{ value: string | undefined }> = ({ value }) => {
    return (
      <FormControl>
        <InputLabel variant='standard' htmlFor='uncontrolled-native'></InputLabel>
        <NativeSelect
          defaultValue={'value'}
          inputProps={{
            name: 'select',
            id: 'uncontrolled-native',
          }}
        >
          <option value={0}>無</option>
          <option value={1}>有</option>
          <option value={2}>不明</option>
        </NativeSelect>
      </FormControl>
    );
  };

  const ListDB: FC<DbModel> = (DbModel) => {
    const { id, name, price, shower, water, toilet, roof, parking } = DbModel;

    return (
      <>
        <li>場所：{name}</li>　<li>価格：{price}円</li>
        <li>
          シャワー：
          <SelectDown value={shower} />
        </li>
        <li>
          水道：
          <SelectDown value={water} />
        </li>
        <li>
          トイレ：
          <SelectDown value={toilet} />
        </li>
        <li>
          屋根：
          <SelectDown value={roof} />
        </li>
        <li>
          駐車場：
          <SelectDown value={parking} />
        </li>
        {/* <Button onClick={updateMapInfo(id)}>アップデート</Button> */}
      </>
    );
  };

  return (
    <div>
      {(['bottom'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TemporaryDrawer;
