import { Box, Typography } from "@mui/material";
import styles from "./BlogSection.module.css";
import Image from "next/image";
import BgImage from "@/__webAssets/pngs/bg-blog.png";

const BlogDetails = ({ details, title, date, image }) => {
  const htmlContent = details;

  return (
    <>
      <Image src={BgImage} alt="Background image" className={styles.bgImage} />
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
