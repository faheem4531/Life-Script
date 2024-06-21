import Layout from "@/components/Layout/Layout";
import GlobelBtn from "@/components/button/Button";
import {
  Box,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Typography,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import AddChapterName from "@/components/dashboardComponent/AddChapterName";
import {
  selectUser,
  getUserProfile,
  updateUserProfile,
} from "@/store/slices/authSlice";

const EmailPreference = () => {
  const userData = useSelector(selectUser);
  const dispatch: any = useDispatch();
  const { t } = useTranslation();
  const [questionFrequency, setQuestionFrequency] = useState("");
  const [checked, setChecked] = useState({
    chapter: false,
    milestone: false,
    newsletter: false,
    promotion: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked,
    });
  };

  const handleQuestionFrequency = (event) => {
    setQuestionFrequency(event.target.value);
  };

  useEffect(() => {
    if (userData?.questionAskType) {
      setQuestionFrequency(userData?.questionAskType);
    }
  }, [userData?.questionAskType]);

  const handleSubmit = () => {
    if (questionFrequency !== userData?.questionAskType) {
      dispatch(
        updateUserProfile({
          questionAskType: questionFrequency,
        })
      )
        .then(() => toast.success("updated successfully"))
        .catch(() => toast.error("Failed to update"));
    }
  };

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  return (
    <Box>
      <Layout>
        <Box
          sx={{
            p: { sm: "0px", xs: "10px 10px" },
          }}
        >
          <AddChapterName
            editChapter={() => {}}
            chapterId
            chapter= {t("emailpreference.title")}
            title="noBack"
          />
          <Box
            sx={{
              borderRadius: "4x",
              bgcolor: "#F3ECDA",
              p: { md: "30px", sm: "20px 20px", xs: "16px" },
              mt: "26px",
            }}
          >
            <Typography
              sx={{
                fontSize: { sm: "24px", xs: "20px" },
                fontWeight: 700,
                color: "#30422E",
              }}
            >
              {t("emailpreference.question")}
            </Typography>
            <Box sx={{ mt: 2, gap: 2 }}>
              <RadioGroup
                sx={{
                  display: "flex",
                  flexDirection: { md: "row", xs: "column", sm: "column" },
                  gap: "16px",
                }}
                value={questionFrequency}
                onChange={handleQuestionFrequency}
              >
                <FormControlLabel
                  value="ONEDAY"
                  checked={questionFrequency === "ONEDAY"}
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
                        fontSize: { sm: "20px", xs: "16px" },
                        fontWeight: 400,
                        color: "rgba(0, 0, 0, 0.6)",
                      }}
                    >
                     {t("emailpreference.q1Options.option1")}
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="TWODAYS"
                  checked={questionFrequency === "TWODAYS"}
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
                        fontSize: { sm: "20px", xs: "16px" },
                        fontWeight: 400,
                        color: "rgba(0, 0, 0, 0.6)",
                      }}
                    >
                     {t("emailpreference.q1Options.option2")}
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="FIVEDAYS"
                  checked={questionFrequency === "FIVEDAYS"}
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
                        fontSize: { sm: "20px", xs: "16px" },
                        fontWeight: 400,
                        color: "rgba(0, 0, 0, 0.6)",
                      }}
                    >
                      {t("emailpreference.q1Options.option3")}
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="SEVENDAYS"
                  checked={questionFrequency === "SEVENDAYS"}
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
                        fontSize: { sm: "20px", xs: "16px" },
                        fontWeight: 400,
                        color: "rgba(0, 0, 0, 0.6)",
                      }}
                    >
                      {t("emailpreference.q1Options.option4")}
                    </Typography>
                  }
                />
              </RadioGroup>
            </Box>
            <Box sx={{ mt: { sm: "50px", xs: "25px" }, mb: "35px" }}>
              <Typography
                sx={{
                  fontSize: { sm: "24px", xs: "20px" },
                  fontWeight: 700,
                  color: "#30422E",
                  mb: "20px",
                }}
              >
                {t("emailpreference.question2")}
              </Typography>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    bgcolor: "#fff",
                    width: { sm: "75%", xs: "100%" },
                    borderRadius: "4px",
                    p: "10px 0 10px 20px",
                    mb: "15px",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked.chapter}
                        onChange={handleChange}
                        name="chapter"
                        style={{ color: "#30422E", marginRight: "7px" }}
                      />
                    }
                    label={
                      <Typography
                        sx={{
                          color: "#30422E",
                          fontSize: { sm: "20px", xs: "16px" },
                        }}
                      >
                        {t("emailpreference.q2Options.option1")}
                      </Typography>
                    }
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    bgcolor: "#fff",
                    width: { sm: "75%", xs: "100%" },
                    borderRadius: "4px",
                    p: "10px 0 10px 20px",
                    mb: "15px",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked.milestone}
                        onChange={handleChange}
                        name="milestone"
                        style={{ color: "#30422E", marginRight: "7px" }}
                      />
                    }
                    label={
                      <Typography
                        sx={{
                          color: "#30422E",
                          fontSize: { sm: "20px", xs: "16px" },
                        }}
                      >
                         {t("emailpreference.q2Options.option2")}
                      </Typography>
                    }
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    bgcolor: "#fff",
                    width: { sm: "75%", xs: "100%" },
                    borderRadius: "4px",
                    p: "10px 0 10px 20px",
                    mb: "15px",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked.newsletter}
                        onChange={handleChange}
                        name="newsletter"
                        style={{ color: "#30422E", marginRight: "7px" }}
                      />
                    }
                    label={
                      <Typography
                        sx={{
                          color: "#30422E",
                          fontSize: { sm: "20px", xs: "16px" },
                        }}
                      >
                         {t("emailpreference.q2Options.option3")}
                      </Typography>
                    }
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    bgcolor: "#fff",
                    width: { sm: "75%", xs: "100%" },
                    borderRadius: "4px",
                    p: "10px 0 10px 20px",
                    mb: "15px",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked.promotion}
                        onChange={handleChange}
                        name="promotion"
                        style={{ color: "#30422E", marginRight: "7px" }}
                      />
                    }
                    label={
                      <Typography
                        sx={{
                          color: "#30422E",
                          fontSize: { sm: "20px", xs: "16px" },
                        }}
                      >
                         {t("emailpreference.q2Options.option4")}
                      </Typography>
                    }
                  />
                </Box>
              </Box>
            </Box>
            <GlobelBtn
              borderRadius="4px"
              bgColor="#E1683B"
              color="white"
              btnText={t("emailpreference.btnText")}
              onClick={handleSubmit}
            />
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default EmailPreference;
