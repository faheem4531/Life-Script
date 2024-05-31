"use client";

import * as React from "react";
// import { Select as BaseSelect } from "@mui/base/Select";
// import { Option as BaseOption } from "@mui/base/Option";
// import DownAero from "@/__webAssets/svgs/dropdown.svg";
// import EN from "@/__webAssets/svgs/EN.svg";
// import SP from "@/__webAssets/svgs/SP.svg";
// import Image from "next/image";
import { Box, MenuItem, Select, Typography } from "@mui/material";
import styles from "./NavBar.module.css";
// import Check from "@/__webAssets/svgs/check.svg";
import Script from "next/script";
import i18n from "i18next";

export default function LanguageOption() {
  // const [selectedValue, setSelectedValue] = React.useState(10); // Initial selected value
  // const [open, setOpen] = React.useState(false);

  // const handleChange = (event, value) => {
  //   setSelectedValue(value);
  // };

  // const handleToggle = () => {
  //   setOpen(!open);
  // };

  const [langPre, setLangPre] = React.useState("");
  const [selectWidth, setSelectWidth] = React.useState("100%");

  const handleChange = (e) => {
    const value = e.target.value;
    setLangPre(value);
    setSelectWidth(value ? "50%" : "100%");
  };
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  // const handleButtonClick = () => {
  //   setShowTooltip(false);
  //   if (langPre === "") {
  //     setShowTooltip(true);
  //   } else {
  //     onClick({
  //       value: selectedValue,
  //       lp: langPre,
  //     });
  //   }
  // };

  return (
    // <Box
    //   sx={{ position: "relative" }}
    //   // onClick={handleToggle}
    // >
    //   {/* Google Translate script */}
    //   {/* <Script
    //     id="google_translate_element"
    //     type="text/javascript"
    //     dangerouslySetInnerHTML={{
    //       __html: `
    //         function googleTranslateElementInit() {
    //           new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    //         }
    //       `,
    //     }}
    //   /> */}

    //   {/* Only show two language English and Spanish */}
    //   <Script
    //     id="google_translate_element"
    //     type="text/javascript"
    //     dangerouslySetInnerHTML={{
    //       __html: `
    //   function googleTranslateElementInit() {
    //     new google.translate.TranslateElement({
    //       pageLanguage: 'en',
    //       includedLanguages: 'en,es', // Include English and Spanish
    //     }, 'google_translate_element');
    //   }
    // `,
    //     }}
    //   />
    //   <Script
    //     type="text/javascript"
    //     src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    //   />

    //   <Box
    //     id="google_translate_element"
    //     className={styles.google}
    //     sx={{ backgroundColor: "#f3ecda" }}
    //   >
    //     <Box id="goog-gt-tt" class="goog-tooltip skiptranslate"></Box>
    //   </Box>
    // </Box>

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

{
  /* <BaseSelect
        value={selectedValue}
        className={styles.selector}
        onChange={handleChange}
      >
        <BaseOption
          value={10}
          className={`${styles.option} ${styles.optiontop} ${
            selectedValue == 10 && styles.optionsBg
          }`}
        >
          EN
          <Box
            sx={{
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              position: "absolute",
              left: "15px",
              top: "17px",
            }}
          >
            <Image src={EN} alt="English" width={25} height={25} />
          </Box>
          {selectedValue == 10 && (
            <Box sx={{ position: "absolute", right: "15px", bottom: "20px" }}>
              <Image src={Check} alt="check" width={17} />
            </Box>
          )}
        </BaseOption>
        <BaseOption
          value={20}
          className={`${styles.option} ${
            selectedValue == 20 && styles.optionsBg
          }`}
        >
          ES
          <Box
            sx={{
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              position: "absolute",
              left: "15px",
              bottom: "8px",
            }}
          >
            <Image src={SP} alt="Spanish" width={25} height={25} />
          </Box>
          {selectedValue == 20 && (
            <Box sx={{ position: "absolute", right: "15px", bottom: "20px" }}>
              <Image src={Check} alt="check" width={17} />
            </Box>
          )}
        </BaseOption>
      </BaseSelect>
      <Image src={DownAero} alt="aero" width={13} className={styles.downAero} /> */
}
