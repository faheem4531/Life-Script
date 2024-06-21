import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { colors } from '@mui/material';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Checkbox from '@mui/material/Checkbox';
import { green } from '@mui/material/colors';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60%",
    bgcolor: 'background.paper',
    border: '2px solid white',
    boxShadow: 24,
    p: 4,
    color: "black"
};

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function ShippingModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" >
                        Are you sure everything looks ready to print?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        As a reminder, no one on our team reviews your stories. What you see in the preview
                        is what your book will look like when printed.
                    </Typography>
                    <Typography sx={{ mt: 2 }} variant='body1'>
                        Here are some examples of issues that our automated system might not catch:

                    </Typography>
                    <Box>
                        <List>
                            <ListItem sx={{ marginBottom: '0px', paddingY: '0px' }}>
                                <ListItemIcon sx={{ minWidth: '30px' }}>
                                    <FiberManualRecordIcon style={{ fontSize: 10, color: "black" }} />
                                </ListItemIcon>
                                <ListItemText primary="Typos, misspellings, and grammar mistakes" />
                            </ListItem>
                            <ListItem sx={{ marginBottom: '0px', paddingY: '0px' }}>
                                <ListItemIcon sx={{ minWidth: '30px' }}>
                                    <FiberManualRecordIcon style={{ fontSize: 10, color: "black" }} />
                                </ListItemIcon>
                                <ListItemText primary="Missing images" />
                            </ListItem>
                            <ListItem sx={{ marginBottom: '0px', paddingY: '0px' }}>
                                <ListItemIcon sx={{ minWidth: '30px' }}>
                                    <FiberManualRecordIcon style={{ fontSize: 10, color: "black" }} />
                                </ListItemIcon>
                                <ListItemText primary="Snippets of emails that accidentally got included in the saved story" />
                            </ListItem>
                            <ListItem sx={{ marginBottom: '0px', paddingY: '0px' }}>
                                <ListItemIcon sx={{ minWidth: '30px' }}>
                                    <FiberManualRecordIcon style={{ fontSize: 10, color: "black" }} />
                                </ListItemIcon>
                                <ListItemText primary="Missing, duplicate or redundant stories" />
                            </ListItem>
                            <ListItem sx={{ marginBottom: '0px', paddingY: '0px' }}>
                                <ListItemIcon sx={{ minWidth: '30px' }}>
                                    <FiberManualRecordIcon style={{ fontSize: 10, color: "black" }} />
                                </ListItemIcon>
                                <ListItemText primary="Replies that you don't wish to include in the printed book" />
                            </ListItem>
                            <ListItem sx={{ marginBottom: '0px', paddingY: '0px' }}>
                                <ListItemIcon sx={{ minWidth: '30px' }}>
                                    <FiberManualRecordIcon style={{ fontSize: 10, color: "black" }} />
                                </ListItemIcon>
                                <ListItemText primary="Embarrassing anecdotes you decide not to preserve for posterity" />
                            </ListItem>
                        </List>
                    </Box>

                    <Box sx={{ width: "100%", border: "1px solid #04808A", borderRadius: "6px", display: "flex", alignItems: "center" }}>
                        <Checkbox sx={{
                            color: green[800],
                            '&.Mui-checked': {
                                color: green[600],
                            },
                        }} {...label} />
                        <Typography>I can confirm this book is ready to be printed as is.</Typography>
                    </Box>

                    <Box mt={3} sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                        <Button onClick={handleClose} sx={{ color: "#04808A" }}>Cancel</Button>
                        <Button variant='contained' sx={{
                            ml: 2, backgroundColor: "#04808A", ":hover": {
                                backgroundColor: "#04808A"
                            }
                        }} >
                            Continue
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}