import { Box } from "@mui/material";
import styles from "./BlogSection.module.css";

const BlogDetails = ({ details }) => {
  const htmlContent = details;

  return (
    <>
      <Box sx={{ width: "100%", margin: "auto", marginTop: 3 }}>
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
