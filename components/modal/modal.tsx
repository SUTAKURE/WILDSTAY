import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { FC, useState } from 'react';
import { UpdateMapList } from './updateMapList';
import { DBModel } from 'model/model';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// マップ変更時に表示するモーダル
const DetailModal: FC<DBModel> = (DBModel) => {
  const [dataUpdateOpen, setDataUpdateOpen] = useState(false);
  const handleOpen = () => setDataUpdateOpen(true);
  const handleClose = () => setDataUpdateOpen(false);

  // データ更新ボタンを表示
  const UpdateDataButton = () => {
    const dataUpdate = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setDataUpdateOpen(open);
    };

    return (
      <Box sx={{ width: '100%' }}>
        <Button onClick={dataUpdate(!dataUpdateOpen)}>データを更新する</Button>
        <DisplayUpdateMapList isClicked={dataUpdateOpen} />
      </Box>
    );
  };

  // dataUpdateOpenが true であれば 変更対象のマップ項目を表示する
  const DisplayUpdateMapList = ({ isClicked }: { isClicked: boolean }) => {
    if (isClicked === true) {
      return <UpdateMapList DBModel={DBModel} />;
    } else {
      return <></>;
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={dataUpdateOpen}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Text in a modal
          </Typography>
          <UpdateDataButton />
          <TextField />
        </Box>
      </Modal>
    </div>
  );
};

export default DetailModal;
