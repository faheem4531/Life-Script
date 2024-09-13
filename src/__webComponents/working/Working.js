import Line from "@/__webAssets/svgs/line-orange.svg";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "../ComponentsStyles.module.css";
import PrimaryHeading from "../headings/PrimaryHeading";
import Points from "./Points";

const Working = ({
  data,
  heading,
  subHeading = false,
  marked = false,
  width,
}) => {
  const styleLine = {
    width: "120px",
    position: "absolute",
    bottom: "-10px",
    right: "-10px",
    height: "auto",
  };
  return (
    <Box
      sx={{
        padding: {
          lg: "200px 25px 220px",
          md: "150px 20px 200px",
          sm: "150px 30px 200px",
          xs: "170px 0px",
        },
        height: "",
      }}
      className={styles.workingBox}
    >
      <PrimaryHeading
        lineWidth="160px"
        showStyle={true}
        marked={marked}
        heading={heading}
        color="#F3ECDA"
      />
      <Box sx={{ textAlign: "center" }}>
        {subHeading && (
          <Typography
            component="div"
            sx={{
              fontSize: "32px",
              display: {
                lg: "inline-block",
                md: "inline-block",
                sm: "none",
                xs: "none",
              },
              fontWeight: 500,
              margin: "64px 0 -80px",
              textAlign: "center",
              color: "#F3ECDA",
              position: "relative",
            }}
          >
            <h3 className={styles.pureHeadings}>{subHeading}</h3>
            <Image src={Line} style={styleLine} alt="mark" loading="lazy" />
          </Typography>
        )}
      </Box>

      <Box
        sx={{
          marginTop: { lg: "150px", md: "120px", sm: "90px", xs: "60px" },
          display: "flex",
          flexDirection: { md: "row", sm: "column", xs: "column" },
          columnGap: { lg: "17px", md: "10px" },
          justifyContent: "center",
          alignItems: {
            lg: "stretch",
            md: "center",
            sm: "center",
            xs: "center",
          },
          rowGap: "10px",
          padding: { sm: "0", xs: "0 16px" },
        }}
      >
        {data.map((item, index) => (
          <Points
            width={width}
            key={index}
            no={item.no}
            icon={item.icon}
            title={item.title}
            discription={item.discription}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Working;
