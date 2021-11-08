import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import React, { FC, useState } from 'react';
import mapdata from 'components/map/map-point';

type Anchor = 'bottom';
type dProps = {
  id: number;
};

type upProps = {
  bool: boolean;
};

const TemporaryDrawer: FC<dProps> = (dProps) => {
  const { id } = dProps;
  const [state, setState] = React.useState({
    bottom: false,
  });
  const [open, setOpen] = React.useState(false);

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
    if (bool === true) {
      return <ListDB id={id} />;
    } else {
      return <List></List>;
    }
  };

  const ListDB: FC<dProps> = (dProps) => {
    const { id } = dProps;
    return <li>{id}</li>;
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
