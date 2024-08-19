import GlobelBtn from "@/components/button/Button";
import {
  Box,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import i18n from "i18next";
import { useEffect, useState } from "react";
import backArrow from "../../../_assets/svg/left.svg";
import NextArrow from "../../../_assets/svg/rightArrow.svg";
import QaTabBars from "./qaTabBars";
import { useTranslation } from "react-i18next";

export default function TabTwo({
  onClickBack,
  onClickNext,
  data,
  userName,
  setQaTab,
}) {
  const [maritalStatus, setMaritalStatus] = useState("");
  const [gender, setGender] = useState("");
  const [langPre, setLangPre] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [name, setName] = useState("");
  const { t } = useTranslation();
  const maxDate = new Date();

  useEffect(() => {
    if (data?.name) {
      setGender(data.gender);
      setMaritalStatus(data.martialStatus);
      setSelectedDate(data.dateOfBirth);
      setName(data.name);
      // setLangPre(data.LanguagePreferences);
    }
  }, [data]);

  useEffect(() => {
    const userName = localStorage.getItem("username");
    setName(userName.toString());
  }, []);

  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language);
  // };

  const handleButtonClick = () => {
    setShowTooltip(false);
    if (
      !name ||
      maritalStatus === "" ||
      gender === "" ||
      !selectedDate
      // langPre === ""
    ) {
      setShowTooltip(true);
    } else {
      // Continue with your button click logic
      onClickNext({
        name: name,
        maritalStatus: maritalStatus,
        gender: gender,
        dob: selectedDate,
        // lp: langPre,
      });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "90%",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <Box>
        <Box
          sx={{
            color: "#30422E",
            alignItems: "center",
            gap: "8px",
            mt: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: { md: "44px", sm: "36px", xs: "26px" },
              fontWeight: 700,
            }}
          >
            {t("onboarding.step3.step")}
          </Typography>
        </Box>
        <QaTabBars tabProp={3} />
        <Box sx={{ mt: 10 }}>
          <Typography
            sx={{
              fontSize: { md: "33px", sm: "25px", xs: "20px" },
              fontWeight: 700,
              color: "#30422E",
            }}
          >
            {t("onboarding.step3.heading")}
          </Typography>
        </Box>
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              display: "flex",
              gap: { md: "40px", sm: "30px", xs: "15px" },
              marginBottom: "20px",
              flexDirection: { sm: "row", xs: "column" },
            }}
          >
            <Box flex={1}>
              <Typography
                sx={{
                  fontSize: { md: "20.142px", sm: "18px", xs: "16px" },
                  fontWeight: 500,
                  color: "#30422E",
                }}
              >
                {t("onboarding.step3.fullName")}
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Full Name"
                name="email"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "2px",
                    backgroundColor: "white",
                  },
                }}
              />
            </Box>
            <Box flex={1}>
              <Typography
                sx={{
                  fontSize: { md: "20.142px", sm: "18px", xs: "16px" },
                  fontWeight: 500,
                  color: "#30422E",
                }}
              >
{t("onboarding.step3.status.title")}
              </Typography>
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <Select
                  placeholder= {t("onboarding.step3.status.title")}
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  sx={{
                    width: "100%",
                    borderRadius: "2px",
                    backgroundColor: "white",
                  }}
                >
                  <MenuItem value="Single">{t("onboarding.step3.status.options.option1")}</MenuItem>
                  <MenuItem value="Married">{t("onboarding.step3.status.options.option2")}</MenuItem>
                  <MenuItem value="Divorced">{t("onboarding.step3.status.options.option3")}</MenuItem>
                  <MenuItem value="Widowed">{t("onboarding.step3.status.options.option4")}</MenuItem>
                </Select>
                {maritalStatus === "" && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "18px",
                      left: "20px",
                      color: "gray",
                    }}
                  >
{t("onboarding.step3.status.title")}
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: { md: "40px", sm: "30px", xs: "15px" },
              marginBottom: "20px",
              flexDirection: { sm: "row", xs: "column" },
            }}
          >
            {/* Second row with two text fields */}
            <Box flex={1}>
              <Typography
                sx={{
                  fontSize: { md: "20.142px", sm: "18px", xs: "16px" },
                  fontWeight: 500,
                  color: "#30422E",
                }}
              >
                {t("onboarding.step3.gender.title")}
              </Typography>
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <Select
                  placeholder={t("onboarding.step3.gender.title")}
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  sx={{
                    width: "100%",
                    borderRadius: "2px",
                    backgroundColor: "white",
                  }}
                >
                  <MenuItem value="Male">{t("onboarding.step3.gender.options.option1")}</MenuItem>
                  <MenuItem value="Female">{t("onboarding.step3.gender.options.option2")}</MenuItem>
                  <MenuItem value="Other">{t("onboarding.step3.gender.options.option3")}</MenuItem>
                </Select>
                {gender === "" && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "18px",
                      left: "20px",
                      color: "gray",
                    }}
                  >
                    {t("onboarding.step3.gender.title")}
                  </Box>
                )}
              </Box>
            </Box>
            <Box flex={1}>
              <Typography
                sx={{
                  fontSize: { md: "20.142px", sm: "18px", xs: "16px" },
                  fontWeight: 500,
                  color: "#30422E",
                }}
              >
                {t("onboarding.step3.DOB")}
              </Typography>
              <DatePicker
                value={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                maxDate={maxDate}
                sx={{
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "2px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: "2px",
                    },
                  },
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: { md: "40px", sm: "30px", xs: "15px" },
              marginBottom: "20px",
              flexDirection: { sm: "row", xs: "column" },
            }}
          >
            {/* Second row with two text fields */}
            {/* <Box flex={1}>
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
            </Box> */}
            <Box flex={1}></Box>
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
        {/* <GlobelBtn
          bgColor="#ffffff"
          border='1px solid #E1683B'
          borderRadius="4px"
          color="#E1683B"
          btnText="Back"
          onClick={onClickBack}
          image={backArrow}
        /> */}
        <Tooltip
          open={showTooltip}
          onClose={() => setShowTooltip(false)}
          title="Please fill in all fields before proceeding."
           placement="top"
        >
           <span>
          <GlobelBtn
            borderRadius="4px"
            bgColor="#E1683B"
            color="white"
            btnText={t("onboarding.step2.buttonText.next")}
            onClick={handleButtonClick}
            image2={NextArrow}
          /></span>
        </Tooltip>
      </Box>
    </Box>
  );
}
