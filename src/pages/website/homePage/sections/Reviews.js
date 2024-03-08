import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Stars from "@/__webAssets/pngs/review-stars.png"

const Reviews = () => {


  return (
    <Box sx={{
      bgcolor: "#30422E", color: "#F3ECDA", textAlign: "center", padding: "44px 0 80px", fontSize: "16px"
    }}>
      <Image src={Stars} alt="rating" />
      <Box sx={{ display: "flex", marginTop: "40px", justifyContent: "center" }}>
        <Typography sx={{ fontSize: "128px", bgcolor: "red", alignSelf: "start", rotate: "12deg", lineHeight: "0" }}>&#34;</Typography>
        <Box sx={{ maxWidth: "850px", }}>
          <Typography sx={{ fontFamily: "myfamily" }}>Using Lifescript has been a transformative experience for me. It&apos;s not just the user-friendly interface but the way it prompts you to dive deep into your memories and articulate them beautifully.
            The media integration allowed me to add photos, making my autobiography not just a book but a vivid journey
            through my life. Highly recommended for anyone wanting to preserve their legacy.</Typography>
          <Typography sx={{ fontWeight: 900, marginTop: "20px" }}>Luis D. - Retired Teacher</Typography>
        </Box>
        <Typography sx={{ fontSize: "128px", rotate: "12deg", lineHeight: "0", alignSelf: "end" }}>&#34;</Typography>
      </Box>

    </Box >
  )
}


export default Reviews;