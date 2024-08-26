import LeftStyle from "@/__webAssets/pngs/left-style.png";
import RightStyle from "@/__webAssets/pngs/right-style.png";
import Line from "@/__webAssets/svgs/line-orange.svg";
import { Box } from "@mui/material";
import Image from "next/image";
import styles from "../ComponentsStyles.module.css";

const PrimaryHeading = ({
  mdDirection = "row",
  smDirection = "row",
  direction = "row",
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
}) => {
  const styleLine = {
    width: lineWidth || "120px",
    height: "auto",
    bottom: lineBottom,
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
      <Box
        color={color}
        lineHeight={lineHeight}
        sx={{
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
            lg: "row",
            xs: direction,
          },
          columnGap: { md: "15px", sm: "10px", xs: "10px" },
        }}
      >
        <h2 className={styles.pureHeadings}>{heading}</h2>
        {marked && (
          <Box>
            <Box display="inline-block" position="relative">
              <h2 className={styles.pureHeadings}>{marked}</h2>
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
