import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function Delete(props) {
const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    console.log(props.info)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return(
        <div>
            <Button onClick={handleClickOpen}>🗑</Button>
            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
          <DialogContent>
          <DialogContentText id="alert-dialog-description">
            are you sure you want to delete this attendee?
          </DialogContentText>
        </DialogContent>
          <DialogActions>
          <Button onClick={handleClose}>Yes</Button>
          <Button onClick={handleClose}>No</Button>
            </DialogActions>

      </Dialog>
        </div>
    )
}