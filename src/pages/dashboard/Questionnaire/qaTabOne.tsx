import GlobelBtn from "@/components/button/Button";
import {
  Box, FormControlLabel, MenuItem, Tooltip,
  Select, RadioGroup, Typography
} from "@mui/material";
import Radio from "@mui/material/Radio";
import { useEffect, useState } from "react";
import i18n from "i18next";
import NextArrow from "../../../_assets/svg/rightArrow.svg";
import QaTabBars from "./qaTabBars";

export default function TabOne({ onClick, data, setQaTab }) {
  const [selectedValue, setSelectedValue] = useState();
  const [langPre, setLangPre] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);

  console.log("333344", selectedValue);

  useEffect(() => {
    setSelectedValue(data || "MySelf");
  }, [data]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleButtonClick = () => {
    setShowTooltip(false);
    if (
      langPre === ""
    ) {
      setShowTooltip(true);
    } else {
      onClick({
        value: selectedValue,
        lp: langPre,
      });
    }
  };


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "90%",
      }}
    >
      <Box>
        <Box
          sx={{
            color: "#30422E",
            gap: "8px",
            mt: "20px",
            // display: { sm: "block", xs: "none" },
          }}
        >
          <Typography
            sx={{
              fontSize: { md: "44px", sm: "36px", xs: "26px" },
              fontWeight: 700,
            }}
          >
            Step 1 of 4
          </Typography>
        </Box>
        <QaTabBars tabProp={1} />
        <Box sx={{ mt: { md: 10, sm: 7, xs: 7 } }}>
          <Typography
            sx={{
              fontSize: { md: "33px", sm: "25px", xs: "20px" },
              fontWeight: 700,
              color: "#30422E",
            }}
          >
            Who will use lifescript?
          </Typography>
          <Box
            sx={{
              mt: { md: 3, sm: 2, xs: 1 },
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <RadioGroup value={selectedValue} onChange={handleChange}>
              <FormControlLabel
                value="MySelf"
                checked={selectedValue === "MySelf"}
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked .MuiSvgIcon-root": {
                        fill: "#30422E",
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      ml: { md: 2, sm: 1, xs: 0.5 },
                      fontSize: { md: "24px", sm: "20px", xs: "16px" },
                      fontWeight: 400,
                      color: "rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    I am writing my own story
                  </Typography>
                }
              />
              <FormControlLabel
                value="BelovedOne"
                checked={selectedValue === "BelovedOne"}
                control={
                  <Radio
                    sx={{
                      "&.Mui-checked .MuiSvgIcon-root": {
                        fill: "#30422E",
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      ml: { md: 2, sm: 1, xs: 0.5 },
                      fontWeight: 400,
                      color: "rgba(0, 0, 0, 0.6)",
                      fontSize: { md: "24px", sm: "20px", xs: "16px" },
                    }}
                  >
                    I am assisting someone else write their story.
                  </Typography>
                }
              />
            </RadioGroup>
          </Box>
          <Box width="50%" mt="30px">
            <Typography
              sx={{
                fontSize: { md: "20.142px", sm: "18px", xs: "16px" },
                fontWeight: 500,
                color: "#30422E",
              }}
            >
              Language Preference
            </Typography>
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Select
                placeholder="Language Preference"
                value={langPre}
                onChange={(e) => setLangPre(e.target.value)}
                sx={{
                  width: "100%",
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
                  Language Preference
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        flex={1}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "end",
          gap: 2,
        }}
      >
        <Tooltip
          open={showTooltip}
          onClose={() => setShowTooltip(false)}
          title="Please fill in all fields before proceeding."
        >
          <GlobelBtn
            bgColor="#E1683B"
            color="white"
            btnText="Next"
            onClick={handleButtonClick}
            image2={NextArrow}
          />
        </Tooltip>
      </Box>
    </Box >
  );
}
