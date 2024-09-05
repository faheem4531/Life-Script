import LeftStyle from "@/__webAssets/pngs/left-style.png";
import RightStyle from "@/__webAssets/pngs/right-style.png";
import Line from "@/__webAssets/svgs/line-orange.svg";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "../ComponentsStyles.module.css";

const PrimaryHeading = ({
  mdDirection = "row",
  smDirection = "row",
  direction = "row",
  lgDirection = "row",
  heading,
  showStyle,
  color,
  lineHeight,
  left = LeftStyle,
  right = RightStyle,
  lineWidth,
  removeStyleMbl = false,
  marked,
  lineBottom = "-10px",
  variant = "h2",
}) => {
  const styleLine = {
    width: lineWidth || "120px",
    height: "auto",
    bottom: lineBottom,
  };

  const sharedStyles = {
    fontSize: { md: "52px", sm: "44px", xs: "32px" },
    fontWeight: 500,
    margin: { sm: "0 18px", xs: "0" },
    fontFamily: "Besley !important",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: {
      sm: smDirection,
      md: mdDirection,
      lg: lgDirection,
      xs: direction,
    },
    columnGap: { md: "15px", sm: "10px", xs: "10px" },
    color: color,
    lineHeight: lineHeight,
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: {
            md: "block",
            sm: removeStyleMbl && "none",
            xs: removeStyleMbl && "none",
          },
        }}
      >
        {showStyle && (
          <Image
            src={left}
            alt="logo"
            className={styles.headingStyles}
            loading="lazy"
          />
        )}
      </Box>
      <Box sx={sharedStyles}>
        <Typography
          sx={sharedStyles}
          className={styles.pureHeadings}
          variant={variant}
        >
          {heading}
        </Typography>
        {marked && (
          <Box>
            <Box display="inline-block" position="relative">
              <Typography
                sx={sharedStyles}
                className={styles.pureHeadings}
                variant={variant}
              >
                {marked}
              </Typography>
              <Image
                src={Line}
                style={styleLine}
                alt="mark"
                className={styles.headingLine}
                loading="lazy"
              />
            </Box>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          display: {
            md: "block",
            sm: removeStyleMbl && "none",
            xs: removeStyleMbl && "none",
          },
        }}
      >
        {showStyle && (
          <Image
            src={right}
            alt="logo"
            className={styles.headingStyles}
            loading="lazy"
          />
        )}
      </Box>
    </Box>
  );
};

export default PrimaryHeading;
