import PrimaryHeading from "@/__webComponents/headings/PrimaryHeading"
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
      name: "Arthur Thompson, 79",
      designation: "",
      details: "Compiling my life stories in chronological order offered me a unique perspective on my journey. The insightful questions and the option to add my own made the experience very personal. It’s been a fascinating trip down memory lane and most importantly made me re-connect with my daughters on topics never discussed before."
    },
    {
      profile: Client2,
      name: "Eleanor Rodriguez, 84",
      designation: "",
      details: "It took me about 4 months to complete this wonderful gift from my granddaughter. I'm 84 years old and I relived my life during this project. I decided not to share with my extended family about this until I gifted each of them a book. They have now also received a copy and their reactions are heartwarming!"
    },
    {
      profile: Client3,
      name: "Margaret Campbell, 86",
      designation: "",
      details: "Received LifeScript as a gift from my grandkids. Delving into my past, sharing stories, and connecting dots I hadn't in years was enlightening. As I'm 86, I hope this book lets future generations say, 'Wow, I wish I'd known her!' It's a bridge to me for them, and that's priceless."
    },
    {
      profile: Client4,
      name: "George Watkins, 72",
      designation: "",
      details: "Reflecting on my life was a humbling experience. I never imagined I had a story worth sharing. Family means the world to me, and with so much of our family history fading away, my story together with the family tree could serve as information for my grandkids and their kids."
    },
    {
      profile: Client4,
      name: "Linda Morris, 65",
      designation: "",
      details: "Starting this project, I really didn't know much about writing but the how-to videos made everything so much simpler. Anytime I got stuck, the support team helped me out with so much patience and kindness. They really helped me through it. The book turned out great and feels high quality. I've even told my sister to try it!"
    },
    {
      profile: Client4,
      name: "Derek Lee, 58",
      designation: "",
      details: "This was a really interesting experience. I liked that my normal answers were transformed into professional written text. I don’t have writing experience so narrative fusion and the auto grammar check really helped me get this done. Overall, I enjoyed the experience"
    },
    {
      profile: Client4,
      name: "Samantha Jones, 63",
      designation: "",
      details: "I loved picking out the font size and style for my book – it made it feel so personal. And the whole idea? Genius. Hats off to the people behind this. They've made sharing my story not just easy, but really special."
    },
    {
      profile: Client4,
      name: "Carlos Martinez, 70",
      designation: "",
      details: "I was worried it would take forever, but I finished in just 2 months without hurrying. Adding photos was simple, and they turned out even better in print. P.S. The paper in the printed version feels really good. Thanks!"
    },
    {
      profile: Client4,
      name: "Rachel Nguyen, 60",
      designation: "",
      details: "First time writing and this was fun! Most of the questions felt adequate and provoked some nice memories, glad that I could pen them down before I forget them. Hardcover book looks professional!"
    },
  ]

  return (
    <Box sx={{ marginTop: { lg: "200px", sm: "150px", xs: "100px" } }}>
      <PrimaryHeading showStyle={false} marked="Testimonials" lineWidth="180px" />
      <Typography sx={{ color: "#495845", margin: { sm: "15px 0 100px", xs: "20px 0 50px" }, textAlign: "center", fontFamily: "Avenir" }}>
        What our customers say
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
          <Typography sx={{ fontSize: { sm: "20px", xs: "18px" }, color: "#BFC4B5", fontFamily: "Avenir" }}>washington DC</Typography>
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