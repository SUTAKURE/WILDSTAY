import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Leaflet from 'leaflet';
import Link from 'next/link';
import React from 'react';
import { Map as MapContainer, TileLayer } from 'react-leaflet';
import MapList from './mapList';
import useWindowDimensions from 'lib/dimension/dimension';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/';
  const { width, height } = useWindowDimensions();

  const [position, setPostion] = React.useState({ lat: 0, lng: 0 });
  const [dialog, setDialogOpen] = React.useState(false);

  React.useEffect(() => {});

  const handleClick = (e: any) => {
    setPostion(e.latlng);
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Dialog
        open={dialog}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {'緯度:'}
          {position.lat}
          {'\n'}
          {'経度:'}
          {position.lng}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            この位置を宿泊地として登録しますか？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link
            href={{
              pathname: '/registrySite/registrySite',
              query: { lat: position.lat, lon: position.lng },
            }}
            passHref
          >
            <Button>はい</Button>
          </Link>

          <Button onClick={handleClose}>いいえ</Button>
        </DialogActions>
      </Dialog>

      <MapContainer
        center={[42.5741851589376, 141.92486292795556]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: height, width: '100%' }}
        onclick={handleClick}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <MapList />
      </MapContainer>
    </>
  );
};

export default Map;
