import PrimaryHeading from "@/__webComponents/headings/PrimaryHeading";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import styles from "../ComponentsStyles.module.css";

import Pin from "@/__webAssets/svgs/location-pin.svg";
import { useTranslation } from "react-i18next";

const Testimonial = ({ reviews, heading, marked, subTitle }) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ marginTop: { lg: "120px", sm: "150px", xs: "100px" } }}>
      <Box sx={{ mb: { sm: "15px", xs: "20px" } }}>
        <PrimaryHeading
          showStyle={false}
          heading={heading}
          marked={marked}
          lineWidth="180px"
        />
      </Box>

      {subTitle && (
        <Typography
          sx={{
            color: "#495845",
            margin: { sm: "15px 0 100px", xs: "20px 0 50px" },
            textAlign: "center",
            fontFamily: "Avenir",
          }}
        >
          {subTitle}
        </Typography>
      )}
      <Box sx={{ mt: { sm: "100px", xs: "50px" } }}>
        <Marquee pauseOnHover={true}>
          {reviews.map((item, index) => (
            <ReviewCard
              key={index}
              profile={item.profile}
              age={item.age}
              name={item.name}
              location={item.location}
              details={item.details}
            />
          ))}
        </Marquee>
      </Box>
    </Box>
  );
};

export default Testimonial;

function ReviewCard({ profile, name, location, details, age }) {
  return (
    <Box
      sx={{
        boxShadow: " 0px 4px 15px 0px rgba(0, 0, 0, 0.10)",
        borderRadius: "4px",
        padding: {
          md: "25px 32px 35px 40px",
          sm: "20px 25px 30px",
          xs: "20px 20px 25px",
        },
        minWidth: { sm: "380px", xs: "330px" },
        height: { md: "400px", sm: "420px", xs: "390px" },
        bgcolor: "#F4F4F4",
        marginRight: { md: "38px", sm: "25px", xs: "20px" },
      }}
    >
      <Box
        sx={{
          paddingBottom: "15px",
          display: "flex",
          columnGap: "15px",
          alignItems: "center",
          borderBottom: "1px solid #BFC4B5",
        }}
      >
        {profile && (
          <Image
            loading="lazy"
            src={profile}
            alt="image"
            className={styles.clientImg}
            width={75}
            height={75}
          />
        )}
        <Box>
          <Typography
            sx={{
              fontSize: { sm: profile ? "20px" : "30px", xs: "18px" },
              color: "#E1683B",
              fontWeight: 800,
            }}
          >
            {name}{" "}
            {age && (
              <Typography
                component="span"
                sx={{ display: "inline", fontSize: "20px", fontWeight: 500 }}
              >
                {age}
              </Typography>
            )}
          </Typography>
          {location && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "5px",
                columnGap: "4px",
              }}
            >
              <Image src={Pin} alt="pin" loading="lazy" />
              <Typography
                sx={{
                  fontSize: { sm: "20px", xs: "18px" },
                  marginTop: "4px",
                  lineHeight: "18px",
                  color: "#BFC4B5",
                  fontFamily: "Avenir",
                }}
              >
                {location}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
      <Typography
        sx={{
          padding: { sm: "20px 0px 0 10px", xs: "10px 0 0 10px" },
          lineHeight: "26px",
          fontSize: "16px",
          maxWidth: "320px",
          fontFamily: "Avenir",
        }}
      >
        &quot;{details}&quot;
      </Typography>
    </Box>
  );
}
