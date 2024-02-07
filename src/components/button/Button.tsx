import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

interface Props {
  onClick?: any;
  bgColor?: string;
  color?: string;
  image?: any;
  btnText: string;
  width?: any;
  borderRadius?: string;
  border?: string;
  fontSize?: any;
  p?: any;
  disabled?: boolean;
  isLulu?: boolean;
  image2?: any;
}

const GlobelBtn = ({
  isLulu,
  onClick,
  bgColor,
  btnText,
  image,
  color = "#197065",
  width,
  borderRadius = "26.267px",
  border = " 1.7px solid #197065",
  fontSize = {
    md: "14.6px",
    sm: "13.6px",
    xs: "12.827px",
  },
  p = "6px 24px",
  disabled = false,
  image2,
}: Props) => {
  return (
    <Button
      disabled={disabled}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: { sm: "10px", xs: "5px" },
        width: width,
        minWidth: "140px",
        borderRadius: borderRadius,
        border: !isLulu ? border : null,
        color: color,
        textTransform: "capitalize",
        p: p,
        bgcolor: bgColor,
        "&:hover": {
          bgcolor: bgColor,
          color: color,
        },
      }}
      onClick={onClick}
    >
      {image && (
        <Box
          sx={{
            width: { sm: "22.778px", xs: "20.147px" },
            height: { sm: "21.778px", xs: "20.147px" },
          }}
        >
          <Image
            src={image}
            alt="suggestionIcon"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      )}
      <Typography
        sx={{
          fontSize: fontSize,
          fontWeight: 500,
        }}
      >
        {btnText}
      </Typography>
      {image2 && (
        <Box
          sx={{
            width: { sm: "18.778px", xs: "15.147px" },
            height: { sm: "25.778px", xs: "20.147px" },
          }}
        >
          <Image
            src={image2}
            alt="suggestionIcon"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      )}
    </Button>
  );
};

export default GlobelBtn;
