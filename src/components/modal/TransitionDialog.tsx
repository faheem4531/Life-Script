import ModalImage from "@/_assets/png/view-template-modal.png";
import { Box, ButtonBase, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Slide, { SlideProps } from "@mui/material/Slide";
import Image from "next/image";
import * as React from "react";
import { useTranslation } from "react-i18next";

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
  closeModal = () => {},
  proceedText = "Yes",
  cancelText = "No",
}) {
  const { t } = useTranslation();
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => (closeModal ? closeModal() : cancel())}
      aria-describedby="alert-dialog-slide-description"
    >
      <Box
        sx={{
          textAlign: "center",
          padding: "50px 20px 15px",
        }}
      >
        <Image alt="image" src={ModalImage} width={91} height={60} />
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#070707",
            margin: "40px 0",
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            color: "#070707",
          }}
        >
          {description}
        </Typography>

        <Box
          sx={{ display: "flex", columnGap: "15px", justifyContent: "center" }}
        >
          <ButtonBase
            onClick={proceed}
            sx={{
              width: "234px",
              height: "50px",
              borderRadius: "78px",
              color: "#197065",
              fontSize: "18px",
              bgcolor: "#fff",
              border: "1px solid #197065",
              margin: "40px 0 30px",
              "&:hover": {
                color: "##197065",
                bgcolor: "#fff",
              },
            }}
          >
            {proceedText}
          </ButtonBase>
          <ButtonBase
            onClick={cancel}
            sx={{
              width: "200px",
              height: "50px",
              borderRadius: "78px",
              color: "#fff",
              fontSize: "18px",
              bgcolor: "#197065",
              margin: "40px 0 30px",
              "&:hover": {
                color: "#fff",
                bgcolor: "#197065",
              },
            }}
          >
            {cancelText}
          </ButtonBase>
        </Box>
      </Box>
    </Dialog>
  );
}
