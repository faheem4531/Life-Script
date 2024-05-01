import { Box, Button, CircularProgress, Typography } from "@mui/material";
import Image from "next/image";

interface Props {
  onClick?: any;
  bgColor?: string;
  color?: string;
  image?: any;
  btnText: string;
  width?: any;
  fontW?: any;
  borderRadius?: string;
  border?: string;
  fontSize?: any;
  p?: any;
  disabled?: boolean;
  isLulu?: boolean;
  image2?: any;
  isLoading?: boolean;
}

const GlobelBtn = ({
  isLulu,
  onClick,
  bgColor = "#E1683B",
  btnText,
  image,
  fontW,
  color = "#fff",
  width,
  border,
  borderRadius = "4px",
  fontSize = {
    md: "16px",
    sm: "13.6px",
    xs: "12.827px",
  },
  p = "10px 24px",
  disabled = false,
  image2,
  isLoading = false,
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
        color: color,
        textTransform: "capitalize",
        border: border,
        fontWeight: fontW,
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
              // filter: "brightness(0) invert(1)",
            }}
          />
        </Box>
      )}
      {isLoading && (
        <CircularProgress
          style={{ color: "white", height: "20px", width: "20px" }}
        />
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
              filter: "brightness(0) invert(1)",
            }}
          />
        </Box>
      )}
    </Button>
  );
};

export default GlobelBtn;
