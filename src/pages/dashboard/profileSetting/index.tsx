import ProfileAvatar from "@/_assets/svg/ui-user-profile.svg";
import Layout from "@/components/Layout/Layout";
import { DatePicker } from "@mui/x-date-pickers";
import ProfileHeader from "@/components/dashboardComponent/subscriptionHeader";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";

import {
  getUserProfile,
  selectUser,
  updateUserProfile,
} from "@/store/slices/authSlice";
import { uploadImage } from "@/store/slices/chatSlice";

import InputWithLabel from "@/components/Input";
import CountrySelect from "@/components/dashboardComponent/AutoComplete";
import TransitionsDialog from "@/components/modal/TransitionDialog";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProfileSetting = () => {
  const userData = useSelector(selectUser);
  const [gender, setGender] = useState("");
  const [droppedImage, setDroppedImage] = useState(null);
  const [profile, setProfile] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [fullName, setFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [countryValue, setCountryValue] = useState("92");
  const dispatch: any = useDispatch();

  function filterEmptyProperties(data) {
    const filteredData = {};

    for (const key in data) {
      if (data[key] !== null && data[key] !== undefined && data[key] !== "") {
        filteredData[key] = data[key];
      }
    }

    return filteredData;
  }

  const handleUpdateProfile = () => {
    setProfile(false);
    const fullData = {
      name: fullName,
      dateOfBirth: selectedDate,
      profileImage: userImage,
      phone: countryValue + ":" + userPhone,
      gendetr: gender,
    };
    const updateData = filterEmptyProperties(fullData);
    dispatch(updateUserProfile(fullData))
      .unwrap()
      .then(() => toast.success("Profile updated successfully"))
      .catch(() => toast.error("Failed to update profile"));
  };
  const handleChangeGender = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };
  function formatDate(inputDate: string): string {
    console.log("wwww", inputDate, "eeee", typeof inputDate);
    const months: { [key: string]: string } = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12",
    };

    const parts = inputDate.split(" ");
    const day = parts[2];
    const month = months[parts[1]];
    const year = parts[3];
    return `${day}-${month}-${year}`;
  }

  const onDrop = (acceptedFiles: File[]) => {
    const reader = new FileReader();
    reader.onload = () => {
      setDroppedImage(reader.result);
    };
    reader.readAsDataURL(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      const formData = new FormData();
      formData.append("image", file);

      // Make API request
      dispatch(uploadImage(formData))
        .unwrap()
        .then((res) => setUserImage(res));
    },
  });

  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

  useEffect(() => {
    if (userData?._id) {
      setSelectedDate(new Date(userData?.dateOfBirth.toString()));
      setGender(userData?.gender);
      setFullName(userData?.name);
      setUserEmail(userData?.email);
      if (userData?.phone) {
        const [countryValue, userPhone] = userData?.phone?.split(":");
        setUserPhone(userPhone);
        setCountryValue(countryValue);
      }
      userData?.profileImage && setUserImage(userData?.profileImage);
    }
  }, [userData]);

  return (
    <div>
      <Layout>
        <ProfileHeader title="Profile Settings" description="" />
        <Box
          sx={{
            display: "flex",
            gap: "30px",
            borderRadius: "14.994px",
            bgcolor: "#FFF",
            border: " 1.669px solid #E2E7F0",
            p: "26px 30px",
            mt: "26px",
            flexWrap: "wrap",
          }}
        >
          <Box
            flex={1}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              minWidth: "280px",
              mt: { xs: "20px", sm: "0px" },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                  color: "#474E60",
                }}
              >
                Set Profile Image
              </Typography>
              <div style={{ cursor: "pointer" }}>
                <input {...getInputProps()} />
                <Box
                  sx={{
                    borderRadius: "12.737px",
                    p: "22px",
                    bgcolor: "#F6F9FB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "15px",
                  }}
                >
                  <Box
                    sx={{
                      width: "106.812px",
                      height: "106.812px",
                    }}
                  >
                    {userImage ? (
                      <img
                        src={userImage}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: "106.812px",
                          height: "106.812px",
                        }}
                      >
                        <Image
                          src={ProfileAvatar}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                    )}
                  </Box>
                  <Box {...getRootProps()}>
                    <Button
                      sx={{
                        height: { sx: "25px", md: "30px", lg: "45px" },
                        borderRadius: "26.267px",
                        border: " 0.71px solid #197065",
                        p: { xs: "8px 20px", lg: "10.358px 26.989px" },
                        fontSize: { xs: "12px", md: "14px", lg: "18.752px" },
                        color: "#197065",
                        textTransform: "capitalize",
                      }}
                    >
                      Change Profile
                    </Button>
                  </Box>
                </Box>
              </div>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <InputWithLabel
                color="#474E60"
                label="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                borderRadius="47.202px"
                bgColor="#F6F9FB"
                border="0px"
              />
              <InputWithLabel
                color="#474E60"
                label="Email"
                value={userEmail}
                disabled={true}
                placeholder="Email"
                borderRadius="47.202px"
                bgColor="#F6F9FB"
                border="0px"
              />
            </Box>
          </Box>
          <Box flex={1} minWidth={"300px"}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                  color: "#474E60",
                }}
              >
                Date of Birth
              </Typography>
              <DatePicker
                value={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date);
                  console.log("date", date);
                }}
                sx={{
                  backgroundColor: "#F6F9FB",
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderRadius: "50px",
                    },
                  },
                }}
              />
              <FormControl fullWidth>
                <Typography
                  sx={{
                    fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                    color: "#474E60",
                  }}
                >
                  Gender
                </Typography>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  onChange={handleChangeGender}
                  sx={{
                    marginTop: "10px",
                    borderRadius: "50px",
                    backgroundColor: "#F6F9FB",
                    border: "0px",
                    width: "100%",
                    px: "15px",
                    ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                      border: "0px",
                    },
                  }}
                >
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
              </FormControl>
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                    color: "#474E60",
                  }}
                >
                  Phone
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "50px",
                    backgroundColor: "#F6F9FB",
                    pl: "20px",
                  }}
                >
                  <CountrySelect
                    onSelect={(val) => setCountryValue(val)}
                    value={countryValue}
                  />
                  <TextField
                    variant="outlined"
                    placeholder={"Phone"}
                    name="Phone"
                    value={userPhone}
                    type="number" // Set input type to "number"
                    inputProps={{ min: 0, max: 9 }}
                    onChange={(e) =>
                      setUserPhone(e.target.value.replace(/[^0-9]/g, ""))
                    }
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "50px",
                        backgroundColor: "#F6F9FB",
                      },
                      ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                        border: "0px",
                      },
                      width: "100%",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Button
            sx={{
              height: { sx: "25px", md: "30px", lg: "45px" },
              borderRadius: "26.267px",
              border: " 0.71px solid #197065",
              p: { xs: "8px 20px", lg: "10.358px 26.989px" },
              fontSize: { xs: "12px", md: "14px", lg: "18.752px" },
              color: "white",
              textTransform: "capitalize",
              bgcolor: "#197065",
              mt: "24px",
              "&:hover": {
                bgcolor: "#197065",
              },
            }}
            onClick={() => {
              setProfile(true);
            }}
          >
            Save Changes
          </Button>
        </Box>

        <TransitionsDialog
          open={profile}
          heading="Save Changes"
          description="Do you want to save the changes"
          cancel={() => {
            setProfile(false);
          }}
          closeModal={() => {
            setProfile(false);
          }}
          proceed={handleUpdateProfile}
          proceedText="Save Changes"
          cancelText="Don’t Save"
        />
      </Layout>
    </div>
  );
};

export default ProfileSetting;
