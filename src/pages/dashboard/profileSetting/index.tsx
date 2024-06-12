import ProfileAvatar from "@/_assets/svg/ui-user-profile.svg";
import Layout from "@/components/Layout/Layout";
import {
  Box,
  FormControl,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DatePicker } from "@mui/x-date-pickers";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";

import {
  getUserProfile,
  selectUser,
  updateUserProfile,
} from "@/store/slices/authSlice";
import { uploadImage } from "@/store/slices/chatSlice";

import InputWithLabel from "@/components/Input";
import GlobelBtn from "@/components/button/Button";
import CountrySelect from "@/components/dashboardComponent/AutoComplete";
import TransitionsDialog from "@/components/modal/TransitionDialog";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import AddChapterName from '@/components/dashboardComponent/AddChapterName';
import TooltipTab from "@/__webComponents/tooltip/Tooltip";
import informationIcon from "../../../_assets/svg/informationIcon.svg"

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
  const [hover, setHover] = useState(false);
  const dispatch: any = useDispatch();
  const { t } = useTranslation();

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
    <Box
      sx={{
        p: { sm: "0px", xs: "10px" },
      }}
    >
      <Layout>
        <AddChapterName editChapter={() => { }}
          chapterId
          chapter="Profile Settings"
          title="noBack"
        />
        <Box
          sx={{
            display: "flex",
            gap: "30px",
            borderRadius: "14.994px",
            bgcolor: "#F3ECDA",
            p: { md: "26px 30px", sm: "20px 20px", xs: "16px" },
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
              mt: { xs: "20px", sm: "40px" },
            }}
          >
            <Box>

              <div style={{ cursor: "pointer" }}>
                <input {...getInputProps()} />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: "15px",
                    columnGap: "60px",
                    height: "158px",
                  }}
                >
                  <Box
                    sx={{
                      width: "150px",
                      height: "150px",
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
                          border: "1.6px solid #E1683B"
                        }}
                      />
                    ) : (
                      <Box
                        sx={{
                          width: "150px",
                          height: "150px",
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
                    <GlobelBtn
                      bgColor="transparent"
                      color="#E1683B"
                      border="1.6px solid #E1683B"
                      borderRadius='4px'
                      fontW={500}
                      p="16px 20px 14px"
                      btnText={`${t("profileSetting.changeProBtn")}`}
                    />
                  </Box>
                </Box>
              </div>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                mt: "50px",
              }}
            >
              <InputWithLabel
                color="#474E60"
                label={`${t("profileSetting.fullName")}`}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={`${t("profileSetting.fullName")}`}
                borderRadius="4px"
                bgColor="#F6F9FB"
                border="0px"
              />
              <InputWithLabel
                color="#474E60"
                label={`${t("profileSetting.Email")}`}
                value={userEmail}
                disabled={true}
                placeholder={`${t("profileSetting.Email")}`}
                borderRadius="4px"
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

              <Box sx={{ bgcolor: "#fff", p: "24px 11px 24px 23px" }}>
                <Box sx={{display:"flex", alignItems:"center", gap:"10px"}}>
                  <Typography sx={{
                    fontSize: { xs: 12, sm: 14, md: 16, lg: 17 },
                    color: "#30422E",
                    borderBottom: "1px solid rgba(48, 66, 46, 0.20)",
                    // pb: "12px",
                    fontFamily: "Avenir8 !important"
                  }}>
                    Book Credits
                  </Typography>
                  <Box >
                    <Box
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                    // sx={{ display: 'inline-block' }} 
                    >
                      <Image src={informationIcon} width={20} alt="Info Tooltip" />
                    </Box>

                    {hover && (
                      <Box
                        sx={{
                          display: {
                            md: "block",
                            xs: "none",
                          },
                          // position: "absolute", 
                          // mt: 1 
                        }}
                      >
                        <TooltipTab
                          title="Book Credits"
                          text={`One book credit equals one physical book. Increase your credits by adding additional books during checkout from the "View Book" section on the Overview page or get free ones by referring a friend through the "Gift a Book" section on the left.`}
                          transform="none"
                          top={undefined} left={undefined} bottom={"130px"} right={"75px"} position={"absolute"} />

                      </Box>
                    )}
                  </Box>
                </Box>
                <Typography sx={{
                  color: "#30422E",
                  pt: "12px",
                  fontSize: { xs: 12, sm: 16, lg: 18 },
                }}>You have {userData?.bookCredit} book credits.
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                    color: "#30422E",
                  }}
                >
                  {`${t("profileSetting.DOB")}`}
                </Typography>
                <DatePicker
                  value={selectedDate}
                  onChange={(date) => {
                    setSelectedDate(date);
                    console.log("date", date);
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "4px",
                      backgroundColor: "#F6F9FB",
                      border: "0px",
                      color: "#30422E",
                      pl: "15px",
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

              {/* <FormControl fullWidth>
                <Typography
                  sx={{
                    fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                    color: "black",
                  }}
                >
                  {`${t("profileSetting.Gender")}`}
                </Typography>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  onChange={handleChangeGender}
                  sx={{
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
                  <MenuItem value={"Male"}>{t("profileSetting.male")}</MenuItem>
                  <MenuItem value={"Female"}>
                    {t("profileSetting.female")}
                  </MenuItem>
                  <MenuItem value={"Other"}>
                    {t("profileSetting.other")}
                  </MenuItem>
                </Select>
              </FormControl> */}
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
                    color: "#30422E",
                  }}
                >
                  {t("profileSetting.Phone")}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "4px",
                    columnGap: "10px",
                    color: "#30422E",
                    height: "56px",
                    mt: "5px"
                  }}
                >
                  <CountrySelect
                    onSelect={(val) => setCountryValue(val)}
                    value={countryValue}
                  />
                  <TextField
                    variant="outlined"
                    placeholder={`${t("profileSetting.Phone")}`}
                    name="Phone"
                    value={userPhone}
                    inputProps={{ min: 0, max: 9 }}
                    onChange={(e) =>
                      setUserPhone(e.target.value.replace(/[^0-9]/g, ""))
                    }
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "4px",
                        backgroundColor: "#F6F9FB",
                        color: "#30422E",
                      },
                      ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                        border: "0px",
                      },
                      width: "100%",
                    }}
                  />
                </Box>
              </Box>
              <Box sx={{ m: "40px 80px 0 auto" }}>
                <GlobelBtn
                  bgColor="#E1683B"
                  color="white"
                  borderRadius='4px'
                  btnText={`${t("profileSetting.save")}`}
                  onClick={() => {
                    setProfile(true);
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        <TransitionsDialog
          open={profile}
          heading={`${t("profileSetting.save")}`}
          description={`${t("profileSetting.saveDes")}`}
          cancel={() => {
            setProfile(false);
          }}
          closeModal={() => {
            setProfile(false);
          }}
          proceed={handleUpdateProfile}
          proceedText={`${t("profileSetting.SaveChBtn")}`}
          cancelText={`${t("profileSetting.DelBtn")}`}
        />
      </Layout>
    </Box>
  );
};

export default ProfileSetting;
