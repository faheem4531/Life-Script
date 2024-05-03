import Layout from "@/components/Layout/Layout";
import AddChapterName from '@/components/dashboardComponent/AddChapterName';
import { Box } from "@mui/material";

const Tutorials = () => {
  return (
    <Box>
      <Layout>
        <Box
          sx={{
            p: { sm: "0px", xs: "10px 10px" },
          }}
        >
          <AddChapterName
            chapterId
            chapter="Tutorials & Tips"
            title="noBack"
          />
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              borderRadius: "4x",
              bgcolor: "#F3ECDA",
              p: { md: "30px", sm: "20px 20px", xs: "16px" },
              mt: "26px",
              flexWrap: "wrap",
            }}
          >
            {/* <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
            </div> */}



            <iframe width="340" height="190" src="https://www.youtube.com/embed/AGoN0oeuZ2k?si=Bjpwh7mv_dzgLMG6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <iframe width="340" height="190" src="https://www.youtube.com/embed/AGoN0oeuZ2k?si=Bjpwh7mv_dzgLMG6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <iframe width="340" height="190" src="https://www.youtube.com/embed/AGoN0oeuZ2k?si=Bjpwh7mv_dzgLMG6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default Tutorials;
