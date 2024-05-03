// import ModalImage from "@/_assets/png/view-template-modal.png";
// import Layout from "@/components/Layout/Layout";
// import GlobelBtn from "@/components/button/Button";
// import SubscriptionHeader from "@/components/dashboardComponent/subscriptionHeader";
// import CustomizationDialog from "@/components/modal/CustomizationDialog";
// import { customerSupport } from "@/store/slices/chatSlice";
// import { Box, TextField, Typography } from "@mui/material";
// import Image from "next/image";
// import { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import AddChapterName from '@/components/dashboardComponent/AddChapterName';

// const Tutorials = () => {
//   // const dispatch: any = useDispatch();
//   // const [subject, setSubject] = useState("");
//   // const [description, setDescription] = useState("");
//   // const [showTooltip, setShowTooltip] = useState(false);
//   // const [showModal, setShowModal] = useState(false);
//   // const { t } = useTranslation();

//   // const handleComplaint = () => {
//   //   dispatch(customerSupport({ subject: subject, description: description }))
//   //     .unwrap()
//   //     .then(() => {
//   //       setShowModal(true);
//   //       setDescription("");
//   //       setSubject("");
//   //     })
//   //     .catch(() => toast.error("Failed to create your ticket"));
//   // };

//   return (
//     <Box>
//       <Layout>
//         <Box
//           sx={{
//             p: { sm: "0px", xs: "10px 10px" },
//           }}
//         >
//           <AddChapterName
//             chapterId
//             chapter="Tutorials & Tips"
//             title="support"
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
//             <Video width="320" height="240" controls>
//               <source src="https://youtu.be/MhhAox6Zei8?si=2VRqWx5Dh5Te1RxN" type="video/mp4">
//                 <source src="movie.ogg" type="video/ogg">
//                   Your browser does not support the video tag.
//                 </Video>
//               </Box>
//           </Box>
//       </Layout>

//     </Box>
//   );
// };

// export default Tutorials;



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
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
            </div>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
            </div>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
            </div>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
            </div>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
            </div>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
            </div>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
            </div>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
            </div>
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default Tutorials;
