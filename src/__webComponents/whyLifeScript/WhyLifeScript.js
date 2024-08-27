import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "../ComponentsStyles.module.css";
import PrimaryHeading from "../headings/PrimaryHeading";

import Timer from "@/__webAssets/pngs/whyLifeScript/less-effort.png";
import Book from "@/__webAssets/pngs/whyLifeScript/more-custom.png";
import Tree from "@/__webAssets/pngs/whyLifeScript/more-personalized.png";
import Secure from "@/__webAssets/pngs/whyLifeScript/more-secure.png";
import Support from "@/__webAssets/pngs/whyLifeScript/more-support.png";
import Cost from "@/__webAssets/pngs/whyLifeScript/no-hidden-cost.png";
import NextIcon from "@/__webAssets/svgs/next.svg";
import Button from "@/__webComponents/button/Button";
import Link from "next/link";

const WhyLifeScript = () => {
  const aboutLifeScript = [
    {
      heading: "Less Effort and Time Spent",
      points: [
        "Autoediting and Proofreading saves 3 to 4 weeks",
        "Automatic photo improvement for printing purposes",
      ],
      image: Timer,
    },
    {
      heading: "No hidden costs",
      points: [
        "Full-color hardcover book included in price",
        "Free international delivery included in price",
      ],
      image: Cost,
    },
    {
      heading: "More custom and professional book",
      points: [
        "Q&A format or chapters format",
        "More book cover designs to choose from",
        "Formatting features for customization",
      ],
      image: Book,
    },
    {
      heading: "More personalized",
      points: [
        "More personalized questions for a tailored experience",
        "Family Tree included at the end of your book",
      ],
      image: Tree,
    },
    {
      heading: "More support",
      points: [
        "Live chat support during business hours",
        "Easy step-by-step tutorial videos",
      ],
      image: Support,
    },
    {
      heading: "More secure",
      points: ["Latest security standards to keep your stories private."],
      image: Secure,
    },
  ];
  return (
    <Box
      sx={{
        padding: {
          md: "130px 20px 80px",
          sm: "130px 20px 100px",
          xs: "130px 20px 70px",
        },
        height: "",
      }}
      className={styles.workingBox}
    >
      <PrimaryHeading
        lineWidth="160px"
        showStyle={false}
        heading="Why LifeScript is the Best Storyworth Alternative"
        removeStyleMbl={true}
        color="#F3ECDA"
      />
      <Box
        sx={{
          margin: "70px auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { md: "space-between", sm: "center", xs: "center" },
          maxWidth: { lg: "1400px" },
          rowGap: { lg: "60px", sm: "40px", xs: "40px" },
        }}
      >
        {aboutLifeScript.map((item, index) => (
          <ReasonPoints
            key={index}
            heading={item.heading}
            points={item.points}
            image={item.image}
          />
        ))}
        <Box
          sx={{ margin: "0 100px 0 auto", maxWidth: "210px" }}
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

const ReasonPoints = ({ heading, points, image }) => {
  return (
    <Box
      sx={{
        display: "flex",
        columnGap: "15px",
        color: "#F3ECDA",
        maxWidth: { lg: "560px", md: "450px" },
        width: "100%",
      }}
    >
      <Box
        sx={{
          minWidth: { lg: "110px", md: "60px", sm: "80px" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image src={image} alt="icon" className={styles.bestIcons} />
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: { lg: "35px", md: "28px", sm: "35px", xs: "30px" },
            mb: "8px",
          }}
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
            <Typography sx={{ maxWidth: { lg: "390px", md: "350px" } }}>
              {step}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WhyLifeScript;
