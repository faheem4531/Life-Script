"use client";
import * as React from "react";
import { Box, MenuItem, Select } from "@mui/material";
import i18n from "i18next";

export default function LanguageOption() {
  const [langPre, setLangPre] = React.useState("");
  const [selectWidth, setSelectWidth] = React.useState("100%");
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsDropdownOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setLangPre(value);
    setSelectWidth(value ? "50%" : "100%");
  };
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <Box width="270%" mt="0px">
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Select
          placeholder="Select Language"
          value={langPre}
          onChange={handleChange}
          open={isDropdownOpen}
          onClose={() => setIsDropdownOpen(false)}
          onOpen={() => setIsDropdownOpen(true)}
          sx={{
            width: selectWidth,
            borderRadius: "2px",
            backgroundColor: "white",
          }}
        >
          <MenuItem
            value="English"
            onClick={() => {
              changeLanguage("en");
            }}
          >
            English
          </MenuItem>
          <MenuItem
            value="Spanish"
            onClick={() => {
              changeLanguage("sp");
            }}
          >
            Spanish
          </MenuItem>
        </Select>
        {langPre === "" && (
          <Box
            sx={{
              position: "absolute",
              top: "18px",
              left: "20px",
              color: "gray",
            }}
          >
            Language
          </Box>
        )}
      </Box>
    </Box>
  );
}
