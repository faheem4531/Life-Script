import { Box, Typography } from "@mui/material";
import styles from "./BlogSection.module.css";
import Image from "next/image";

const BgImage = "https://res.cloudinary.com/dm3wjnhkv/image/upload/v1725835915/assets/bg-for-navbar_mendp2.webp";

const BlogDetails = ({ details, title, date, image }) => {
  const htmlContent = details;

  return (
    <>
      {/* <Image src={BgImage} alt="Background image" className={styles.bgImage} height={200} width={100}/> */}
      <Box sx={{ width: "100%", margin: "auto" , marginTop : 3}}>
        <Box className={styles.blogImgContainer}>
            <section
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
        </Box>
      </Box>
    </>
  );
};

export default BlogDetails;
