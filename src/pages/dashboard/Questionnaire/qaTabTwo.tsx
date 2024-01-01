import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import Image from "next/image";
import { useEffect, useState } from "react";
import backArrow from "../../../_assets/svg/left.svg";
import NextArrow from "../../../_assets/svg/rightArrow.svg";
import QaTabBars from "./qaTabBars";

export default function TabTwo({
  onClickBack,
  onClickNext,
  data,
  userName,
  setQaTab,
}) {
  const [maritalStatus, setMaritalStatus] = useState("Marital Status");
  const [gender, setGender] = useState("Gender");
  const [langPre, setLangPre] = useState("Language Preference");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showTooltip, setShowTooltip] = useState(false);
  const [name, setName] = useState(userName);
  const maxDate = new Date();

  useEffect(() => {
    if (data?.name) {
      setGender(data.gender);
      setMaritalStatus(data.martialStatus);
      setSelectedDate(data.dateOfBirth);
      setName(data.name);
      setLangPre(data.LanguagePreferences);
    }
  }, [data]);

  const handleButtonClick = () => {
    setShowTooltip(false);
    if (
      !name ||
      maritalStatus === "Marital Status" ||
      gender === "Gender" ||
      !selectedDate ||
      langPre === "Language Preference"
    ) {
      setShowTooltip(true);
    } else {
      // Continue with your button click logic
      onClickNext({
        name: name,
        maritalStatus: maritalStatus,
        gender: gender,
        dob: selectedDate,
        lp: langPre,
      });
    }
  };

  return (
    <>
      <Box
        sx={{
          color: "black",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Typography
          sx={{
            fontSize: { md: "44px", sm: "36px", xs: "26px" },
            fontWeight: 700,
          }}
        >
          Identity!
        </Typography>
        <Typography
          sx={{
            fontSize: { md: "16px", sm: "14px", xs: "12px" },
            fontWeight: 700,
            color: "rgba(78, 81, 109, 0.70)",
          }}
        >
          Tell us about yourself
        </Typography>
      </Box>
      <QaTabBars tabProp={2} />
      <Box sx={{ mt: 4 }}>
        <Typography
          sx={{
            fontSize: { md: "33px", sm: "25px", xs: "20px" },
            fontWeight: 700,
            color: "black",
          }}
        >
          Tell us about yourself
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
                color: "#171725",
              }}
            >
              Full Name
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
                  borderRadius: "50px",
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
                color: "#171725",
              }}
            >
              Marital Status
            </Typography>
            <Select
              placeholder="Marital Status"
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
              sx={{
                width: "100%",
                borderRadius: "50px",
                backgroundColor: "white",
              }}
            >
              <MenuItem value="Marital Status" disabled>
                Marital Status
              </MenuItem>
              <MenuItem value="Single">Single</MenuItem>
              <MenuItem value="Married">Married</MenuItem>
            </Select>
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
                color: "#171725",
              }}
            >
              Gender
            </Typography>
            <Select
              placeholder="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              sx={{
                width: "100%",
                borderRadius: "50px",
                backgroundColor: "white",
              }}
            >
              <MenuItem value="Gender" disabled>
                Gender
              </MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Special</MenuItem>
            </Select>
          </Box>
          <Box flex={1}>
            <Typography
              sx={{
                fontSize: { md: "20.142px", sm: "18px", xs: "16px" },
                fontWeight: 500,
                color: "#171725",
              }}
            >
              Date of Birth
            </Typography>
            <DatePicker
              value={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              maxDate={maxDate}
              sx={{
                width: "100%",
                backgroundColor: "white",
                borderRadius: "50px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: "50px",
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
          <Box flex={1}>
            <Typography
              sx={{
                fontSize: { md: "20.142px", sm: "18px", xs: "16px" },
                fontWeight: 500,
                color: "#171725",
              }}
            >
              Language Preference
            </Typography>
            <Select
              placeholder="Language Preference"
              value={langPre}
              onChange={(e) => setLangPre(e.target.value)}
              sx={{
                width: "100%",
                borderRadius: "50px",
                backgroundColor: "white",
              }}
            >
              <MenuItem value="Language Preference" disabled>
                Language Preference
              </MenuItem>
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Spanish">Spanish</MenuItem>
            </Select>
          </Box>
          <Box flex={1}></Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 2,
            mt: 2,
          }}
        >
          <Button
            onClick={onClickBack}
            sx={{
              width: "176px",
              borderRadius: "26.267px",
              border: " 0.71px solid #197065",
              fontSize: { xs: "12px", md: "14px", lg: "18.752px" },
              color: "#197065",
              textTransform: "capitalize",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Image src={backArrow} alt="backArrow" /> Back
          </Button>
          <Tooltip
            open={showTooltip}
            onClose={() => setShowTooltip(false)}
            title="Please fill in all fields before proceeding."
          >
            <Button
              onClick={handleButtonClick}
              sx={{
                width: "176px",
                borderRadius: "26.267px",
                border: " 0.71px solid #197065",
                fontSize: { xs: "12px", md: "14px", lg: "18.752px" },
                color: "white",
                textTransform: "capitalize",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                bgcolor: "#197065",
                ":hover": {
                  bgcolor: "#197065",
                },
              }}
            >
              Next <Image src={NextArrow} alt="NextArrow" />
            </Button>
          </Tooltip>
        </Box>
      </Box>
    </>
  );
}
