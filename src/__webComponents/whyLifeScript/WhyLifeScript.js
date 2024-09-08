import NextIcon from "@/__webAssets/svgs/next.svg";
import Button from "@/__webComponents/button/Button";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styles from "../ComponentsStyles.module.css";
import PrimaryHeading from "../headings/PrimaryHeading";

const WhyLifeScript = ({ data }) => {
  return (
    <Box
      sx={{
        padding: {
          lg: "130px 50px 50px 80px",
          md: "130px 30px 50px 30px",
          sm: "130px 20px 60px 50px",
          xs: "130px 20px 70px",
        },
      }}
      className={styles.workingBox}
    >
      <PrimaryHeading
        lineWidth="160px"
        showStyle={false}
        heading="Why LifeScript is the best Storyworth alternative"
        removeStyleMbl={true}
        color="#F3ECDA"
      />
      <Box
        sx={{
          margin: "70px auto",
          justifyContent: { md: "space-between", sm: "center", xs: "center" },
          maxWidth: { lg: "1400px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { md: "space-between", sm: "center", xs: "center" },
            maxWidth: { lg: "1400px" },
            rowGap: { lg: "50px", sm: "40px", xs: "40px" },
          }}
        >
          {data.map((item, index) => (
            <ReasonPoints
              key={index}
              heading={item.heading}
              points={item.points}
              image={item.image}
              ImgTitle={item.ImgTitle}
              alt={item.alt}
            />
          ))}
        </Box>

        <Box
          sx={{
            margin: {
              md: "0 100px 0 auto",
              sm: "40px 100px 0 auto",
              xs: "40px 0 0",
            },
            maxWidth: "210px",
          }}
        >
          <Link href="/stripe-page">
            <Button
              title={"Try for free"}
              width="210px"
              height="55px"
              img2={NextIcon}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

const ReasonPoints = ({ heading, points, image, ImgTitle, alt }) => {
  return (
    <Box
      sx={{
        display: "flex",
        columnGap: "15px",
        color: "#F3ECDA",
        maxWidth: { lg: "510px", md: "450px" },
        width: "100%",
      }}
    >
      <Box
        sx={{
          minWidth: { lg: "70px", md: "60px", sm: "80px" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          src={image}
          alt={alt}
          className={styles.bestIcons}
          width={80}
          height={50}
          title={ImgTitle}
        />
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: { lg: "34px", md: "28px", sm: "35px", xs: "30px" },
            mb: "8px",
          }}
          variant="h3"
        >
          {heading}
        </Typography>

        {points.map((step, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "start", mb: "5px" }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                margin: "7px 10px 0 0",
                backgroundColor: "#F3ECDA",
              }}
            ></span>
            <Typography>
              {step}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WhyLifeScript;
