import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide, { SlideProps } from "@mui/material/Slide";
import * as React from "react";
import { useTranslation } from "react-i18next";
import ModalImage from "@/_assets/png/view-template-modal.png"
import Image from "next/image";
import { Box, ButtonBase, Typography } from "@mui/material";


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
      <Box sx={{ textAlign: "center", padding: "40px 50px 15px" }}>
        <Image alt="image" src={ModalImage} />
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: 700,
            color: "#070707",
            margin: "40px 0"
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            fontSize: "30px",
            color: "#070707",
          }}
        >
          {description}
        </Typography>

        <Box sx={{ display: "flex", columnGap: "15px", justifyContent: "center" }}>
          <ButtonBase
            onClick={proceed}
            sx={{
              width: "200px",
              height: "50px",
              borderRadius: "78px",
              color: "#197065",
              fontSize: "22px",
              bgcolor: "#fff",
              border: "1px solid #197065",
              margin: "40px 0 30px",
              "&:hover": {
                color: "##197065",
                bgcolor: "#fff",
              },
            }}
          >
            Yes
          </ButtonBase>
          <ButtonBase
            onClick={cancel}
            sx={{
              width: "200px",
              height: "50px",
              borderRadius: "78px",
              color: "#fff",
              fontSize: "22px",
              bgcolor: "#197065",
              margin: "40px 0 30px",
              "&:hover": {
                color: "#fff",
                bgcolor: "#197065",
              },
            }}
          >
            No
          </ButtonBase>
        </Box>
      </Box>
    </Dialog>
  );
}
