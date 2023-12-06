import { Box, TextField, Typography } from '@mui/material';
import React, { useState, useRef, useEffect } from 'react';
import { BlockPicker, ColorResult } from 'react-color';

const ColorPickerComponent: React.FC = () => {
  const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<string>('#ffffff');
  const colorPickerRef = useRef<HTMLDivElement>(null);


  const handleColorChange = (color: ColorResult) => {
    setSelectedColor(color.hex);
  };

  const handleInputClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  return (
    <div>
        <Box>
              <Typography
                sx={{
                  // marginRight: "300px",
                  fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                }}
              >
                Colour Palette*
              </Typography>
              <TextField
                variant="outlined"
                placeholder={"Colour Palette*"}
                name="text"
                value={selectedColor}
                onClick={handleInputClick}
                // onBlur={formik.handleBlur}
                // onChange={formik.handleChange}
                sx={{
                  marginTop: "10px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "50px",
                    backgroundColor: "white",
                  },
                  width: "100%",
                  // width: "460px",
                }}
              />
            </Box>
      {displayColorPicker && (
        <div ref={colorPickerRef} style={{ position: 'absolute', zIndex: 2 }}>
          <BlockPicker color={selectedColor} onChange={handleColorChange} />
        </div>
      )}
      {/* <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: selectedColor,
          marginTop: '20px',
        }}
      >
      </div> */}
    </div>
  );
};

export default ColorPickerComponent;
