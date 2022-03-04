import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Edit(props) {
const [open, setOpen] = React.useState(false);

const saveEdits = () => {
    fetch('attendees.json', )
}

const handleClickOpen = () => {
    console.log(props.info, "🖋")
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return(
        <div>
            <button onClick={handleClickOpen}>Edit</button>
            <Dialog open={open} onClose={handleClose}>
                <form>
                <TextField defaultValue={props.info.name}></TextField>
                <TextField defaultValue={props.info.Company}></TextField>
                <TextField defaultValue={props.info.title}></TextField>
                <TextField defaultValue={props.info.phone}></TextField>
                <TextField defaultValue={props.info.address}></TextField>
                <TextField defaultValue={props.info.state}></TextField>
                <TextField defaultValue={props.info.postalZip}></TextField>
                </form>
                <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Save</Button>
        </DialogActions>
            </Dialog>
        </div>
    )
}

//<form> 
//<label></label>
//<input> </input>
//</form>