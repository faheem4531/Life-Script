import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import Image from "next/image";
import { useEffect, useState } from "react";
import CameraIcon from "../../_assets/svg/cameraIcon.svg";
import Profile from "../../_assets/svg/profile.svg";
import CustomizationDialog from "./CustomizationDialog";

const FamilyTreeDataModal = ({
  familyModal,
  setFamilyModal,
  selectedRelation,
}) => {
  //   const [familyModal, setFamilyModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const [inputValueName, setInputValueName] = useState("");
  const [inputValueLocation, setInputValueLocation] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [dateOfDeath, setDateOfDeath] = useState(null);
  const maxDate = new Date();

  const handleInputChangeName = (event) => {
    if (event.target.value.length <= 20) {
      setInputValueName(event.target.value);
    }
  };

  const handleInputChangeLocation = (event) => {
    if (event.target.value.length <= 20) {
      setInputValueLocation(event.target.value);
    }
  };

  useEffect(() => {
    // setSelectedValue( || "MySelf");
  }, []);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleDateOfBirthChange = (date) => {
    setDateOfBirth(date);
  };

  const handleDateOfDeathChange = (date) => {
    setDateOfDeath(date);
  };

  const isDateOfBirthValid = (date) => {
    return dateOfDeath ? date <= dateOfDeath : true;
  };

  // Function to check if the date of death is before the date of birth
  const isDateOfDeathValid = (date) => {
    return dateOfBirth ? date >= dateOfBirth : true;
  };

  const handleLivingStatusChange = (event) => {
    setSelectedValue(event.target.value);
    setShowDatePicker(event.target.value === "Deceased");
    if (event.target.value === "Living") {
      setDateOfDeath(null);
    }
  };
  return (
    <div>
      <CustomizationDialog
        open={familyModal}
        title={`Add ${selectedRelation} of Haseeb`}
        // title="Add father of Haseeb"
        handleClose={() => {
          setFamilyModal(false);
        }}
        customStyles={{
          width: { md: "500px", sm: "400px", xs: "100%" },
        }}
      >
        <Box
          sx={{
            height: "75vh",
            overflowY: "auto",
            p: "10px 10px",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <Box
            sx={{
              width: { md: "100px", sm: "90px", xs: "80px" },
              height: { md: "100px", sm: "90px", xs: "80px" },
              borderRadius: "50%",
              border: "1px solid #186F65",
              position: "relative",
            }}
          >
            <Image
              src={Profile}
              alt=""
              style={{
                width: "100%",
                height: "100%",
              }}
            />
            <Box
              sx={{
                width: { md: "23px", sm: "18px", xs: "16px" },
                height: { md: "23px", sm: "18px", xs: "16px" },
                bgcolor: "#B6B6B6",
                position: "absolute",
                right: "-2px",
                bottom: "10px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={CameraIcon}
                alt=""
                style={{
                  width: "16px",
                  height: "16px",
                }}
              />
            </Box>
          </Box>

          <RadioGroup value={selectedValue} onChange={handleChange}>
            <Typography
              sx={{
                mt: "20px",
                fontSize: { md: "16.06px", sm: "14px", xs: "12px" },
                color: "#171725",
              }}
            >
              Gender
            </Typography>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box>
                <FormControlLabel
                  value="Male"
                  checked={selectedValue === "Male"}
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked .MuiSvgIcon-root": {
                          fill: "rgba(25, 112, 101, 1)",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography
                      sx={{
                        ml: { md: 0.6, sm: 0.5, xs: 0.25 },
                        fontSize: { md: "15px", sm: "14px", xs: "12px" },
                        fontWeight: 400,
                        color: "rgba(0, 0, 0, 0.6)",
                      }}
                    >
                      Male
                    </Typography>
                  }
                />
              </Box>
              <Box>
                <FormControlLabel
                  value="Female"
                  checked={selectedValue === "Female"}
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked .MuiSvgIcon-root": {
                          fill: "rgba(25, 112, 101, 1)",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography
                      sx={{
                        fontWeight: 400,
                        color: "rgba(0, 0, 0, 0.6)",
                        ml: { md: 0.6, sm: 0.5, xs: 0.25 },
                        fontSize: { md: "15px", sm: "14px", xs: "12px" },
                      }}
                    >
                      Female
                    </Typography>
                  }
                />
              </Box>
              <Box>
                <FormControlLabel
                  value="Unknown"
                  checked={selectedValue === "Unknown"}
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked .MuiSvgIcon-root": {
                          fill: "rgba(25, 112, 101, 1)",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography
                      sx={{
                        ml: { md: 0.6, sm: 0.5, xs: 0.25 },
                        fontSize: { md: "15px", sm: "14px", xs: "12px" },
                        fontWeight: 400,
                        color: "rgba(0, 0, 0, 0.6)",
                      }}
                    >
                      Unknown
                    </Typography>
                  }
                />
              </Box>
            </Box>
          </RadioGroup>
          <Box
            sx={{
              mt: "20px",
            }}
          >
            <Typography
              sx={{
                color: "#171725",
                fontSiz: { md: "16.06px", sm: "14px", xs: "12px" },
                mb: "10px",
              }}
            >
              Full Name
            </Typography>
            <TextField
              placeholder="Enter text (20 characters limit)"
              value={inputValueName}
              onChange={handleInputChangeName}
              inputProps={{ maxLength: 20 }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "17px",
                  border: "1px solid #186F65",
                  height: "35px",
                  pl: "5px",
                  fontSize: "14px",
                },
                ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                  border: "0px",
                },
                width: "100%",
                "&:hover": {
                  border: "none",
                  outline: "none",
                },
              }}
            />
          </Box>

          <Box
            sx={{
              mt: "20px",
            }}
          >
            <Typography
              sx={{
                color: "#171725",
                fontSiz: { md: "16.06px", sm: "14px", xs: "12px" },
                mb: "10px",
              }}
            >
              Location of Birth
            </Typography>
            <TextField
              placeholder="Enter text (20 characters limit)"
              value={inputValueLocation}
              onChange={handleInputChangeLocation}
              inputProps={{ maxLength: 20 }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "17px",
                  border: "1px solid #186F65",
                  height: "35px",
                  pl: "5px",
                  fontSize: "14px",
                },
                ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                  border: "0px",
                },
                width: "100%",
                "&:hover": {
                  border: "none",
                  outline: "none",
                },
              }}
            />
          </Box>

          <Box mt={"20px"}>
            <Typography
              sx={{
                color: "#171725",
                fontSiz: { md: "16.06px", sm: "14px", xs: "12px" },
                mb: "10px",
                mt: "20px",
              }}
            >
              Date of Birth
            </Typography>
            <DatePicker
              value={dateOfBirth}
              onChange={handleDateOfBirthChange}
              maxDate={maxDate}
              shouldDisableDate={(date) => !isDateOfBirthValid(date)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "17px",
                  border: "1px solid #186F65",
                  height: "35px",
                  pl: "5px",
                  fontSize: "14px",
                },
                ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                  border: "0px",
                },
                width: "100%",
                "&:hover": {
                  border: "none",
                  outline: "none",
                },
              }}
            />
          </Box>

          <RadioGroup value={selectedValue} onChange={handleLivingStatusChange}>
            <Typography
              sx={{
                mt: "20px",
                fontSize: "16.06px",
                color: "#171725",
              }}
            >
              Living
            </Typography>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box>
                <FormControlLabel
                  value="Living"
                  checked={selectedValue === "Living"}
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked .MuiSvgIcon-root": {
                          fill: "rgba(25, 112, 101, 1)",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography
                      sx={{
                        ml: { md: 0.6, sm: 0.5, xs: 0.25 },
                        fontSize: { md: "15px", sm: "14px", xs: "12px" },
                        fontWeight: 400,
                        color: "rgba(0, 0, 0, 0.6)",
                      }}
                    >
                      Living
                    </Typography>
                  }
                />
              </Box>
              <Box>
                <FormControlLabel
                  value="Deceased"
                  checked={selectedValue === "Deceased"}
                  control={
                    <Radio
                      sx={{
                        "&.Mui-checked .MuiSvgIcon-root": {
                          fill: "rgba(25, 112, 101, 1)",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography
                      sx={{
                        fontWeight: 400,
                        color: "rgba(0, 0, 0, 0.6)",
                        ml: { md: 0.6, sm: 0.5, xs: 0.25 },
                        fontSize: { md: "15px", sm: "14px", xs: "12px" },
                      }}
                    >
                      Deceased
                    </Typography>
                  }
                />
              </Box>
            </Box>
          </RadioGroup>

          {showDatePicker && (
            <Box mt={"20px"}>
              <Typography
                sx={{
                  color: "#171725",
                  fontSiz: { md: "16.06px", sm: "14px", xs: "12px" },
                  mb: "10px",
                }}
              >
                Date of Death
              </Typography>
              <DatePicker
                maxDate={maxDate}
                value={dateOfDeath}
                minDate={dateOfBirth}
                onChange={handleDateOfDeathChange}
                shouldDisableDate={(date) => !isDateOfDeathValid(date)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "17px",
                    border: "1px solid #186F65",
                    height: "35px",
                    pl: "5px",
                    fontSize: "14px",
                  },
                  ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                    border: "0px",
                  },
                  width: "100%",
                  "&:hover": {
                    border: "none",
                    outline: "none",
                  },
                }}
              />
            </Box>
          )}
        </Box>
      </CustomizationDialog>
    </div>
  );
};

export default FamilyTreeDataModal;
