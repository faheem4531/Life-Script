import { Box } from "@mui/material";
import styles from "./BlogSection.module.css";
import Content from "@/__webComponents/headings/Content";
import markdownit from "markdown-it";


const BlogDetails = ({details }) => {

  const md = new markdownit();
  const htmlContent = md.render(details);
  

  return (
    <Box sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
      <section
      dangerouslySetInnerHTML={{__html:htmlContent}}
      className={styles.content}
      >
        {/* {htmlContent} */}
      </section>
      {/* <Content
          width="100%"
          subFonts="20px"
          subWidth="100%"
          mblcolor="#E1683B"
          heading=""
          subHeading={details} 
        /> */}

    </Box>
  );
};


export default BlogDetails;
