import PrimaryHeading from "@/pages/website/__webComponents/headings/PrimaryHeading"
import { Box, Typography, colors } from "@mui/material";
import styles from "./HomeSections.module.css"
import Marquee from "react-fast-marquee";

import Image from "next/image";
import Client1 from "@/__webAssets/pngs/client-1.png"
import Client2 from "@/__webAssets/pngs/client-2.png"
import Client3 from "@/__webAssets/pngs/client-3.png"
import Client4 from "@/__webAssets/pngs/client-4.png"

const Testimonial = () => {
  const Client = [
    {
      profile: Client1,
      name: "James T.",
      designation: "Novelist and Screenwriter",
      details: "Lifescript transformed the daunting task of documenting my life into a beautifully guided journey. Their intuitive platform made it easy to organize my thoughts, memories, and experiences into a narrative that truly feels like my own. I'm grateful for the chance to share my story with my family in such a meaningful way."
    },
    {
      profile: Client2,
      name: "Samantha W.",
      designation: "Entrepreneur",
      details: "As someone who's always looking forward, taking the time to reflect and write my autobiography with Lifescript was a revelation. The process helped me understand my own path to success, and now I have a legacy to leave behind for future generations. Lifescript's tools and prompts were invaluable in drawing out stories I had forgotten."
    },
    {
      profile: Client3,
      name: "Ethan K.",
      designation: "Adventure Traveler",
      details: "Thanks to Lifescript, I've been able to compile my adventures into an epic narrative that rivals the journeys I've embarked on. The platform's flexibility let me structure my story my way, ensuring that the thrill and lessons from my travels are captured vividly for others to experience."
    },
    {
      profile: Client4,
      name: "James T.",
      designation: "Novelist and Screenwriter",
      details: "Lifescript transformed the daunting task of documenting my life into a beautifully guided journey. Their intuitive platform made it easy to organize my thoughts, memories, and experiences into a narrative that truly feels like my own. I'm grateful for the chance to share my story with my family in such a meaningful way."
    },

  ]

  return (
    <Box sx={{ marginTop: { lg: "200px", sm: "150px", xs: "100px" } }}>
      <PrimaryHeading showStyle={false} heading="Testimonials" />
      <Typography sx={{ color: "#495845", margin: { sm: "15px 0 100px", xs: "20px 0 50px" }, textAlign: "center" }}>
        Voices of appreciation: What our customers say
      </Typography>

      <Marquee
        pauseOnHover={true}
      >
        {Client.map((item, index) => <ReviewCard
          key={index}
          profile={item.profile}
          name={item.name}
          designation={item.designation}
          details={item.details}
        />)}
      </Marquee>

    </Box >
  )
}

export default Testimonial

function ReviewCard({ profile, name, designation, details }) {
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
          src={profile}
          alt="image"
          className={styles.clientImg}
        />
        <Box>
          <Typography sx={{ fontSize: { sm: "20px", xs: "18px" }, color: "#E1683B", fontWeight: 800 }}>{name}</Typography>
          <Typography sx={{ fontSize: { sm: "20px", xs: "18px" }, color: "#BFC4B5" }}>{designation}</Typography>
        </Box>
      </Box>
      <Typography sx={{ padding: { sm: "20px 20px 0 10px", xs: "10px 0 0 10px" }, lineHeight: "26px", fontSize: "16px", maxWidth: "300px" }}>
        &quot;{details}&quot;
      </Typography>
    </Box >
  )
}