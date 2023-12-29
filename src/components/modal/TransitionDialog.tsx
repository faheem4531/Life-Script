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
        <Box
          sx={{
            width: { md: "91.562px", sm: "66.54px", xs: "41.709px" },
            height: { md: "60.005px", sm: "43.607px", xs: "27.334px" },
            margin: "auto",
          }}
        >
          <Image
            alt="image"
            src={ModalImage}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Typography
          sx={{
            fontSize: { md: "30px", sm: "21.679px", xs: "15.508px" },
            fontWeight: 700,
            color: "#070707",
            margin: { md: "25px 0", sm: "15px 0px", xs: "5px" },
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            fontSize: { md: "22.5px", sm: "16.259px", xs: "11.631px" },
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
              width: { md: "234px", sm: "153px", xs: "103px" },
              height: { md: "50px", sm: "32px", xs: "20px" },
              borderRadius: "78px",
              color: "#197065",
              fontSize: { md: "18px", sm: "13.627px", xs: "8.542px" },
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
              width: { md: "234px", sm: "153px", xs: "103px" },
              height: { md: "50px", sm: "32px", xs: "20px" },
              borderRadius: "78px",
              color: "#fff",
              fontSize: { md: "18px", sm: "13.627px", xs: "8.542px" },
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
