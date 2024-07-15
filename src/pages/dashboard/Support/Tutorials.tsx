import React, { useState } from 'react';
import Layout from "@/components/Layout/Layout";
import AddChapterName from '@/components/dashboardComponent/AddChapterName';
import { Box, CircularProgress, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const videoData = [
  {
    id: 1,
    src:"https://www.youtube.com/embed/f29JtN4LN_k?si=rPRX0eNyBFjRsWx5" ,
    title: "Creating a chapter using a template"
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/CyysiUG7wp8?si=M6OOpFWRyHMDpGIh",
    title: "Creating a chapter from scratch"
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/RO1S5znApIE?si=1IlNXwT7X30LU_7n",
    title: "How to add, edit or delete questions"
  },
  {
    id: 4,
    src: "https://www.youtube.com/embed/TuL8vHfDB90?si=qPcZ9ZdHcFXOo46o",
    title: "How to answer questions and complete a chapter"
  },
  {
    id: 5,
    src: "https://www.youtube.com/embed/MF0VPpe5B-k?si=EHo9jeb7rEfq6Kqu",
    title: "How to use Table of Contents"
  },
  {
    id: 6,
    src: "https://www.youtube.com/embed/sVlwD5XxAY4?si=Ojch-HTuL-Cy_GXn",
    title: "How to create your Family Tree"
  },
  
];

const Tutorials = () => {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  return (
    <Box>
      <Layout>
        <Box
          sx={{
            p: { sm: "0px", xs: "10px 10px" },
          }}
        >
          <AddChapterName editChapter={() => { }}
            chapterId
            chapter={t("tutorialAndTips.title")}
            title="noBack"
          />

          {loading ? (
            // Show loader while loading
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
              <CircularProgress />
            </Box>
          ) : (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                gap: "30px",
                borderRadius: "4x",
                bgcolor: "#F3ECDA",
                p: { md: "30px", sm: "20px 20px", xs: "16px" },
                mt: "26px",
              }}
            >
              {videoData && videoData.map((video) => (
                <Box key={video.id} sx={{ cursor: 'pointer' }}>
                  <iframe
                    width={340}
                    height={190}
                    src={video.src}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  <Typography sx={{ width: "340px" }}
                  >{video.title}</Typography>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Layout>
    </Box>
  );
};

export default Tutorials;





// import Layout from "@/components/Layout/Layout";
// import AddChapterName from '@/components/dashboardComponent/AddChapterName';
// import { Box, Typography } from "@mui/material";

// const Tutorials = () => {
//   return (
//     <Box>
//       <Layout>
//         <Box
//           sx={{
//             p: { sm: "0px", xs: "10px 10px" },
//           }}
//         >
//           <AddChapterName editChapter={()=>{}}
//             chapterId
//             chapter="Tutorials & Tips"
//             title="noBack"
//           />
//           <Box
//             sx={{
//               display: "flex",
//               gap: "30px",
//               borderRadius: "4x",
//               bgcolor: "#F3ECDA",
//               p: { md: "30px", sm: "20px 20px", xs: "16px" },
//               mt: "26px",
//               flexWrap: "wrap",
//             }}
//           >
//             <Box>
//               <iframe width="340" height="190" src="https://www.youtube.com/embed/AGoN0oeuZ2k?si=Bjpwh7mv_dzgLMG6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
//               <Typography sx={{ width: "340px" }}>Gemini for Social Posts: Game Edition</Typography>
//             </Box>

//             <Box>
//               <iframe width="340" height="190" src="https://www.youtube.com/embed/FKEFgm0R0Sc?si=1hrpUY8HRmhX_FUF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
//               <Typography sx={{ width: "340px" }}>Transactional Analysis Life Script Explained (TA)</Typography>
//             </Box>
//             <Box>
//               <iframe width="340" height="190" src="https://www.youtube.com/embed/K75wXRTpM_Y?si=cudgL5ws3dn0PQu_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
//               <Typography sx={{ width: "340px" }}>How to to Script Research Any Topic And Storytelling: Masterclass</Typography>
//             </Box>

//             <Box>
//               <iframe width="340" height="190" src="https://www.youtube.com/embed/2r9lLY0h9Ew?si=diGXDv2t5zDCUEYe" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
//               <Typography sx={{ width: "340px" }}>How to change your Script</Typography>
//             </Box>
//             <Box>
//               <iframe width="340" height="190" src="https://www.youtube.com/embed/4KbSRXP0wik?si=i0CXoYA-Wh11MyMX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
//               <Typography sx={{ width: "340px" }}>Emotion, Stress, and Health: Crash Course Psychology </Typography>

//             </Box>
//             <Box>
//               <iframe width="340" height="190" src="https://www.youtube.com/embed/jjUxcLkxNfk?si=Z2ZxABIjTxMIxMRv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
//               <Typography sx={{ width: "340px" }}>Psychologist vs Psychiatrist vs Doctors: What You Need to Know | MedCircle Series
//               </Typography>
//             </Box>
//             <Box>
//               <iframe width="340" height="190" src="https://www.youtube.com/embed/2H0bdfG-jm0?si=Q6lVOumIh4yZ5Kk1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
//               <Typography sx={{ width: "340px" }}>THE POWER OF KNOWLEDGE</Typography>
//             </Box>
//             <Box>
//               <iframe width="340" height="190" src="https://www.youtube.com/embed/sLP9L-qJqcI?si=YH3NuaG5MJ3LVW-d" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
//               <Typography sx={{ width: "340px" }}>What If You Fell Into Jupiter?</Typography>
//             </Box>
//             <Box>
//               <iframe width="340" height="190" src="https://www.youtube.com/embed/Lsim6FYtXSw?si=BBJL2ML40U2j-I0X" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
//               <Typography sx={{ width: "340px" }}>Universe Size Comparison | Planet Size Comparison | Stars Size Comparison
//               </Typography>
//             </Box>
//           </Box>
//         </Box>
//       </Layout>
//     </Box>
//   );
// };

// export default Tutorials;
