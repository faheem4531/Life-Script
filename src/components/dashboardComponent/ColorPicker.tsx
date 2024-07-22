// import { Box, TextField, Typography } from "@mui/material";
// import { ChangeEvent, useEffect, useRef, useState } from "react";
// import { ColorResult, SketchPicker } from "react-color";
// import { useTranslation } from "react-i18next";

// const ColorPickerComponent = ({ setSelectedColor, selectedColor }) => {
//   const { t } = useTranslation();
//   const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false);

//   const colorPickerRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);

//   const handleColorChange = (color: ColorResult) => {
//     setSelectedColor(color.hex);
//   };

//   const handleInputClick = () => {
//     setDisplayColorPicker(!displayColorPicker);
//   };

//   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const inputColor = event.target.value;
//     setSelectedColor(inputColor);
//   };

//   const handleClickOutside = (event: MouseEvent) => {
//     if (
//       colorPickerRef.current &&
//       !colorPickerRef.current.contains(event.target as Node) &&
//       inputRef.current &&
//       !inputRef.current.contains(event.target as Node)
//     ) {
//       setDisplayColorPicker(false);
//     }
//   };

//   useEffect(() => {
//     document.body.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.body.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <Box position={"relative"}>
//       <Box>
//         <Typography
//           sx={{
//             fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
//           }}
//         >
//           {t("BookCoverCard.colour")}*
//         </Typography>
//         <TextField
//           variant="outlined"
//           placeholder={`${t("BookCoverCard.colour")}*`}
//           name="text"
//           ref={inputRef}
//           type="text"
//           value={selectedColor}
//           onClick={handleInputClick}
//           onChange={handleInputChange}
//           sx={{
//             marginTop: "10px",
//             "& .MuiOutlinedInput-root": {
//               borderRadius: "50px",
//               backgroundColor: "white",
//             },
//             width: "100%",
//           }}
//         />
//       </Box>
//       {displayColorPicker && (
//         <div
//           ref={colorPickerRef}
//           style={{ position: "absolute", zIndex: 2, top: "0px", right: "0px" }}
//         >
//           <SketchPicker color={selectedColor} onChange={handleColorChange} />
//         </div>
//       )}
//     </Box>
//   );
// };

// export default ColorPickerComponent;
