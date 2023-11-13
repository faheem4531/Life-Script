import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide, { SlideProps } from "@mui/material/Slide";
import * as React from "react";
import { useTranslation } from "react-i18next";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

const Transition = React.forwardRef<HTMLDivElement, SlideProps>(
  function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  }
);

export default function TransitionsDialog({
  heading,
  description,
  open,
  cancel,
  proceed,
}) {
  const { t } = useTranslation();
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={cancel}
      aria-describedby="alert-dialog-slide-description"
    >
      <div className="bg-black">
        <DialogTitle>{heading}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancel}>Disagree</Button>
          <Button onClick={proceed}>Agree</Button>
        </DialogActions>
      </div>
    </Dialog>
  );
}
