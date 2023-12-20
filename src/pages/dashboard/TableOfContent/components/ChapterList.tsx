// import ModalImage from "@/_assets/png/view-template-modal.png";
// import { Box, ButtonBase, Typography } from "@mui/material"; // Import necessary MUI components
// import Image from "next/image";
// const ChaptersList = ({
//   listItems,
//   selectedItems,
//   handleItemClick,
//   setOpenModal,
// }) => {
//   return (
//     <Box
//       sx={{
//         textAlign: "center",
//         display: "flex",
//         flexDirection: "column",
//         height: "78vh",
//       }}
//     >
//       <Box>
//         <Box
//           sx={{
//             width: "74px",
//             margin: "auto",
//           }}
//         >
//           {/* Assuming ModalImage is imported and provided as a prop */}
//           <Image alt="image" src={ModalImage} width={74} />
//         </Box>
//         <Typography
//           sx={{
//             fontSize: "36px",
//             fontWeight: 500,
//             color: "#070707",
//             margin: "24px 0",
//           }}
//         >
//           Chapters
//         </Typography>
//       </Box>

//       <Box
//         sx={{
//           flex: "1",
//           overflowY: "auto",
//           "&::-webkit-scrollbar": {
//             display: "none",
//           },
//         }}
//       >
//         {listItems?.map((item) => (
//           <Box
//             key={item.id}
//             sx={{
//               width: "100%",
//               bgcolor: selectedItems[item.id] ? "#197065" : "#F9F9F9",
//               color: selectedItems[item.id] ? "white" : "black",
//               borderRadius: "6.091px",
//               mb: "10px",
//               borderLeft: "8.25px solid #186F65",
//             }}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 gap: "10px",
//                 p: "12px 29px",
//                 borderRadius: "6.091px",
//                 cursor: "pointer",
//               }}
//               onClick={() => handleItemClick(item)}
//             >
//               <Typography
//                 sx={{
//                   fontSize: "19.379px",
//                 }}
//               >
//                 {item.name}
//               </Typography>
//               {selectedItems[item.id] && (
//                 <Typography
//                   sx={{
//                     border: "1px solid white",
//                     borderRadius: "50%",
//                     color: "white",
//                     width: "20px",
//                     height: " 20px",
//                     fontSize: "9.754px",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   {item.id}
//                 </Typography>
//               )}
//             </Box>
//           </Box>
//         ))}
//       </Box>

//       <ButtonBase
//         onClick={() => {
//           // Perform action on selected items (e.g., add them)
//           // For example: console.log('Selected items:', Object.values(selectedItems));
//           setOpenModal(false);
//         }}
//         sx={{
//           width: "150px",
//           height: "36px",
//           borderRadius: "47.865px",
//           color: "#fff",
//           fontSize: "15px",
//           bgcolor: "#197065",
//           margin: "24px auto 0px",
//           "&:hover": {
//             color: "#fff",
//             bgcolor: "#197065",
//           },
//         }}
//       >
//         Add ({Object.keys(selectedItems).length})
//       </ButtonBase>
//     </Box>
//   );
// };

// export default ChaptersList;
