import { Box, Typography } from "@mui/material";
import styles from "./BlogSection.module.css"
import Image from "next/image";

import BlogImage from "@/__webAssets/pngs/blog-img.png"
import More from "@/__webAssets/svgs/read-more.svg"
import Link from "next/link";

const Blogs = () => {
  const blogsData = [
    {
      title: "Crafting Your Legacy: A Guide to Writing Your Autobiography",
      date: 'Published by Angel on January 12, 2024',
      image: BlogImage,
      details: "Embarking on the journey of writing your autobiography is a profound and transformative experience. Crafting Your Legacy: A Guide to Writing Your Autobiography serves as a comprehensive compass, guiding you through the intricate yet rewarding process of immortalizing your life's story on paper......"
    },
    {
      title: "Crafting Your Legacy: A Guide to Writing Your Autobiography",
      date: 'Published by Angel on January 12, 2024',
      image: BlogImage,
      details: "Embarking on the journey of writing your autobiography is a profound and transformative experience. Crafting Your Legacy: A Guide to Writing Your Autobiography serves as a comprehensive compass, guiding you through the intricate yet rewarding process of immortalizing your life's story on paper......"
    },
    {
      title: "Crafting Your Legacy: A Guide to Writing Your Autobiography",
      date: 'Published by Angel on January 12, 2024',
      image: BlogImage,
      details: "Embarking on the journey of writing your autobiography is a profound and transformative experience. Crafting Your Legacy: A Guide to Writing Your Autobiography serves as a comprehensive compass, guiding you through the intricate yet rewarding process of immortalizing your life's story on paper......"
    },
    {
      title: "Crafting Your Legacy: A Guide to Writing Your Autobiography",
      date: 'Published by Angel on January 12, 2024',
      image: BlogImage,
      details: "Embarking on the journey of writing your autobiography is a profound and transformative experience. Crafting Your Legacy: A Guide to Writing Your Autobiography serves as a comprehensive compass, guiding you through the intricate yet rewarding process of immortalizing your life's story on paper......"
    },
  ]
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {blogsData.map((item, index) => <MapCard
        key={index}
        title={item.title}
        date={item.date}
        image={item.image}
        details={item.details}
      />)}
    </Box>
  )
}

export default Blogs;

function MapCard({ title, date, image, details }) {
  return (
    <Box sx={{ padding: { lg: "0 190px 170px 200px", md: "0 90px 150px", sm: "0 50px 100px", xs: "0 20px 50px" } }}>
      <Box>
        <Typography sx={{ fontSize: { sm: "40px", xs: "30px" }, fontWeight: 500, marginBottom: "20px", width: { sm: "80%", xs: "100%" }, fontFamily: "Besley !important" }}>{title}</Typography>
        <Typography x={{ fontSize: "16px" }}>{date}</Typography>
      </Box>
      <Image src={image} alt="img" className={styles.blogImg} />
      <Typography sx={{ fontSize: "16px", maxWidth: "1050px", width: "100%" }}>{details}
        <Link href="/website/blog/blogDetails">
          <span className={styles.readMore}>Read more <Image src={More} alt="more" /></span>
        </Link>
      </Typography>
    </Box>
  )
}