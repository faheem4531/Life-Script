import PrimaryHeading from "@/__webComponents/headings/PrimaryHeading"
import { Box, Typography, colors } from "@mui/material";
import styles from "./HomeSections.module.css"
import Marquee from "react-fast-marquee";
import Image from "next/image";

import Arthur from "@/__webAssets/webp/testimonials/lifescript-customer-review-arthur-thompson.webp"
import Carlos from "@/__webAssets/webp/testimonials/lifescript-customer-review-carlos-martinez.webp"
import Derek from "@/__webAssets/webp/testimonials/lifescript-customer-review-derek-lee.webp"
import Eleanor from "@/__webAssets/webp/testimonials/lifescript-customer-review-eleanor-rodriguez.webp"
import George from "@/__webAssets/webp/testimonials/lifescript-customer-review-george-watkins.webp"
import Lilly from "@/__webAssets/webp/testimonials/lifescript-customer-review-lilly-thompson.webp"
import Linda from "@/__webAssets/webp/testimonials/lifescript-customer-review-linda-morris.webp"
import Margaret from "@/__webAssets/webp/testimonials/lifescript-customer-review-margaret-campbell.webp"
import Rachel from "@/__webAssets/webp/testimonials/lifescript-customer-review-rachel-nguyen.webp"
import Pin from "@/__webAssets/svgs/location-pin.svg"
import { pink } from "@mui/material/colors";
import { useTranslation } from "react-i18next";
const Testimonial = () => {
  const { t } = useTranslation();
  const Client = [
    {
      profile: Arthur,
      name: t("landingPage.testimonialSection.testimonial1.name"), 
      age: t("landingPage.testimonialSection.testimonial1.age"),
      location: t("landingPage.testimonialSection.testimonial1.location"),
      details: t("landingPage.testimonialSection.testimonial1.details"),
    },
    {
      profile: Eleanor,
      name: t("landingPage.testimonialSection.testimonial2.name"), 
      age: t("landingPage.testimonialSection.testimonial2.age"),
      location: t("landingPage.testimonialSection.testimonial2.location"),
      details: t("landingPage.testimonialSection.testimonial2.details"),
    },
    {
      profile: Margaret,
      name: t("landingPage.testimonialSection.testimonial3.name"), 
      age: t("landingPage.testimonialSection.testimonial3.age"),
      location: t("landingPage.testimonialSection.testimonial3.location"),
      details: t("landingPage.testimonialSection.testimonial3.details"),
    },
    {
      profile: George,
      name: t("landingPage.testimonialSection.testimonial4.name"), 
      age: t("landingPage.testimonialSection.testimonial4.age"),
      location: t("landingPage.testimonialSection.testimonial4.location"),
      details: t("landingPage.testimonialSection.testimonial4.details"),
    },
    {
      profile: Linda,
      name: t("landingPage.testimonialSection.testimonial5.name"), 
      age: t("landingPage.testimonialSection.testimonial5.age"),
      location: t("landingPage.testimonialSection.testimonial5.location"),
      details: t("landingPage.testimonialSection.testimonial5.details"),
    },
    {
      profile: Derek,
      name: t("landingPage.testimonialSection.testimonial6.name"), 
      age: t("landingPage.testimonialSection.testimonial6.age"),
      location: t("landingPage.testimonialSection.testimonial6.location"),
      details: t("landingPage.testimonialSection.testimonial6.details"),
    },
    {
      profile: Lilly,
      name: t("landingPage.testimonialSection.testimonial7.name"), 
      age: t("landingPage.testimonialSection.testimonial7.age"),
      location: t("landingPage.testimonialSection.testimonial7.location"),
      details: t("landingPage.testimonialSection.testimonial7.details"),
    },
    {
      profile: Carlos,
      name: t("landingPage.testimonialSection.testimonial8.name"), 
      age: t("landingPage.testimonialSection.testimonial8.age"),
      location: t("landingPage.testimonialSection.testimonial8.location"),
      details: t("landingPage.testimonialSection.testimonial8.details"),
    },
    {
      profile: Rachel,
      name: t("landingPage.testimonialSection.testimonial9.name"), 
      age: t("landingPage.testimonialSection.testimonial9.age"),
      location: t("landingPage.testimonialSection.testimonial9.location"),
      details: t("landingPage.testimonialSection.testimonial9.details"),
    },
  ]

  return (
    <Box sx={{ marginTop: { lg: "120px", sm: "150px", xs: "100px" } }}>
      <PrimaryHeading showStyle={false} marked={t("landingPage.testimonialSection.title")} lineWidth="180px" />
      <Typography sx={{ color: "#495845", margin: { sm: "15px 0 100px", xs: "20px 0 50px" }, textAlign: "center", fontFamily: "Avenir" }}>
      {t("landingPage.testimonialSection.subTitle")} 
      </Typography>

      <Marquee
        pauseOnHover={true}
      >
        {Client.map((item, index) => <ReviewCard
          key={index}
          profile={item.profile}
          age={item.age}
          name={item.name}
          location={item.location}
          details={item.details}
        />)}
      </Marquee>

    </Box >
  )
}

export default Testimonial

function ReviewCard({ profile, name, location, details, age }) {
  return (
    <Box sx={{
      boxShadow: " 0px 4px 15px 0px rgba(0, 0, 0, 0.10)",
      borderRadius: "4px",
      padding: { md: "25px 32px 35px 40px", sm: "20px 25px 30px", xs: "20px 20px 25px" },
      minWidth: { sm: "380px", xs: "330px" },
      height: { sm: "420px", xs: "390px" },
      bgcolor: "#F4F4F4",
      marginRight: { md: "38px", sm: "25px", xs: "20px" }
    }}>
      <Box sx={{
        paddingBottom: "15px",
        display: 'flex',
        columnGap: "15px",
        alignItems: "center",
        borderBottom: "1px solid #BFC4B5"
      }}>
        <Image
        loading='lazy'
          src={profile}
          alt="image"
          className={styles.clientImg}
        />
        <Box>
          <Typography sx={{ fontSize: { sm: "20px", xs: "18px" }, color: "#E1683B", fontWeight: 800 }}>
            {name} <Typography sx={{ display: "inline", fontSize: "20px", fontWeight: 500 }}>{age}</Typography>
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", marginTop: "5px", columnGap: "4px" }}>
            <Image src={Pin} alt="pin" loading='lazy' />
            <Typography sx={{ fontSize: { sm: "20px", xs: "18px" }, marginTop: "4px", lineHeight: "18px", color: "#BFC4B5", fontFamily: "Avenir" }}>
              {location}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography sx={{
        padding: { sm: "20px 20px 0 10px", xs: "10px 0 0 10px" }, lineHeight: "26px", fontSize: "16px", maxWidth: "300px",
        fontFamily: "Avenir"
      }}>
        &quot;{details}&quot;
      </Typography>
    </Box >
  )
}