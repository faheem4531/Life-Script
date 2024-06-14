"use client";
import Layout from "@/components/Layout/Layout";
import AddChapterName from "@/components/dashboardComponent/AddChapterName";
import NoQuestions from "@/components/dashboardComponent/NoQuestions";
// import ProgressBar from "@/components/dashboardComponent/ProgressBar";
import Questions from "@/components/dashboardComponent/Questions";
import CustomizationDialog from "@/components/modal/CustomizationDialog";
// import AddQuestion from "@/pages/events/addQuestion";
import FrameImage from "@/_assets/svg/Frame.svg";
import UseTemplate from "@/_assets/svg/useTemplate.svg";
import { default as GlobelBtn } from "@/components/button/Button";
import TransitionsDialog from "@/components/modal/TransitionDialog";
import {
  cloneTemplate,
  // cloneTemplate,
  getTemplates,
  isTemplateCloned,
  selectTemplates,
} from "@/store/slices/chatSlice";
import { Box, CircularProgress, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import backArrow from "../../../_assets/svg/left.svg";
import Loading from "./components/loading";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TooltipTab from "@/__webComponents/tooltip/Tooltip";

const chapterName = () => {
  const [openModal, setOpenModal] = useState(false);
  const [completionModal, setCompletionModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [copyTemLoading, setCopyTemLoading] = useState(true);
  const [templateTitle, setTemplateTitle] = useState("");
  const [allQuestions, setAllQuestions] = useState([]);
  const [tempQuestionIds, setTempQuestionIds] = useState([]);
  const [buttonLoading, setButtonLoading] = useState(true);
  const router = useRouter();
  const dispatch: any = useDispatch();
  const { templateId } = router.query;
  const allTemplates = useSelector(selectTemplates);
  const [templateState, setTemplateState] = useState(false);
  const [isLoaded, setIsloaded] = useState(false);
  const { t } = useTranslation();
  const [hover, setHover] = useState(false);
  let templateData;

  const handleChapterClone = () => {
    setButtonLoading(false);
    setCopyTemLoading(true);
    dispatch(isTemplateCloned({ id: templateId.toString() }))
      .unwrap()
      .then((res) => {
        if (res == "Template is already cloned") {
          setTemplateState(true);
          setCopyTemLoading(false);
        } else {
          setIsloaded(true);
          dispatch(
            cloneTemplate({ id: templateId.toString(), ids: tempQuestionIds })
          )
            .unwrap()
            .then(() => {
              setCopyTemLoading(false);
              setOpenModal(true);
              setButtonLoading(true);
            })
            .catch(() => {
              setButtonLoading(true);
              setCopyTemLoading(false);
              setCopyTemLoading(false);
              setIsloaded(false);
            });
        }
      })
      .catch(() => {
        setCopyTemLoading(false);
        setIsloaded(false);
        setButtonLoading(true);
      });
  };

  const toggleIdInArray = (id) => {
    const index = tempQuestionIds.indexOf(id);

    if (index !== -1) {
      const updatedIds = [...tempQuestionIds];
      updatedIds.splice(index, 1);
      setTempQuestionIds(updatedIds);
    } else {
      setTempQuestionIds([...tempQuestionIds, id]);
    }
  };

  const handleCopyAgain = () => {
    setTemplateState(false);
    setIsloaded(true);
    dispatch(cloneTemplate({ id: templateId.toString(), ids: tempQuestionIds }))
      .then(() => {
        setCopyTemLoading(false);
        setOpenModal(true);
        setTemplateState(false);
      })
      .catch(() => {
        setCopyTemLoading(false);
        setButtonLoading(false);
        setTemplateState(false);
      });
  };

  useEffect(() => {
    templateData = allTemplates.find((template) => template._id === templateId);
    setAllQuestions(templateData?.questions);
    const ids = templateData?.questions?.map((obj) => obj._id);
    setTempQuestionIds(ids);
    setTemplateTitle(templateData?.title);
  }, [allTemplates]);

  useEffect(() => {
    dispatch(getTemplates())
      .unwrap()
      .then(() => {
        setLoading(false);
        setCopyTemLoading(false);
        setIsloaded(false);
      });
  }, []);

  return (
    <>
      <Layout>
        <Box
          sx={{
            display: { sm: "block", xs: "none" },
          }}
        >
          <AddChapterName
            editChapter={() => { }}
            chapterId={templateData?._id}
            chapter={templateTitle}
            title="templateView"
          />
        </Box>

        {false ? (
          <Box
            sx={{
              marginTop: "8%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        ) : isLoaded ? (
          <Loading
            progressCompleted={openModal}
            completed={() => {
              setCompletionModal(true);
              setIsloaded(false);
            }}
          />
        ) : (
          <Box
            sx={{
              backgroundColor: "#fff",
              padding: {
                md: "5px 46px 16px 37px",
                sm: "5px 30px 10px 30px",
                xs: "10px 10px 100px",
              },
              minHeight: { md: "60vh", xs: "calc(100vh - 175px)" },
              borderRadius: { sm: "18px", xs: "5px" },
              marginTop: { xs: "15px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
                mt: { sm: "10px", xs: "0px" },
              }}
            >
              <Box
                onClick={() => {
                  router.back();
                }}
                sx={{
                  borderRadius: "50%",
                  display: { xs: "flex", sm: "none" },
                  alignItems: "center",
                  justifyContent: "center",
                  width: "45.679px",
                  height: "45.679px",
                  flexShrink: "0",
                  border: "1px solid #17645A",
                }}
              >
                <Image src={backArrow} alt="backArrow" />
              </Box>
              <Typography
                sx={{
                  fontSize: { md: "19.379px", sm: "18.501px" },
                  fontWeight: 700,
                  color: "#30422E",
                  marginBottom: "-90px",
                  display: { sm: "block", xs: "none" },
                }}
              >
                {t("template.Questions")}
              </Typography>

              <Box
                sx={{
                  opacity:
                    tempQuestionIds?.length && buttonLoading ? "1" : "0.6",
                  display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", position: "relative"
                }}
              >
                <Box>
                  <Box
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  >
                     <InfoOutlinedIcon sx={{color:"#7F886B"}}/>
                  </Box>

                  {hover && (
                    <Box
                      sx={{
                        display: {
                          md: "block",
                          xs: "block",
                        },
                        // position: "absolute", 
                        // mt: 1 
                      }}
                    >
                      <TooltipTab
                        title="Use the Template"
                        text={`Mark the questions you'd like to include in this chapter. You can mark as many as you like and later delete or add your own questions.`}
                        transform="none"
                        top={undefined} left={undefined} bottom={undefined} right={undefined} position={"absolute"} />

                    </Box>
                  )}
                </Box>
                <GlobelBtn
                  image={UseTemplate}
                  btnText={`${t("template.useTemBtn")}`}
                  onClick={() => {
                    tempQuestionIds?.length &&
                      buttonLoading &&
                      handleChapterClone();
                  }}
                  width={"220px"}
                />
              </Box>
            </Box>

            {loading ? (
              <Box
                sx={{
                  marginTop: "8%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </Box>
            ) : (
              // <Loading isLoaded={isLoaded} />
              <Box
                sx={{
                  marginTop: "60px",
                  bgcolor: "#f3ecda",
                  padding: "10px 0 30px",
                  borderRadius: "5px",
                }}
              >
                {allQuestions?.length > 0 ? (
                  allQuestions.map((question, index) => (
                    <Questions
                      key={question._id}
                      question={question}
                      number={index + 1}
                      title="templateView"
                      templateQuestion={(id) => toggleIdInArray(id)}
                    />
                  ))
                ) : (
                  <NoQuestions />
                )}
              </Box>
            )}
          </Box>
        )}
      </Layout>

      {/* Use Template Modal   */}
      <CustomizationDialog
        open={completionModal}
        title=""
        handleClose={() => {
          setCompletionModal(false);
          router.push("/dashboard/chapters");
        }}
        customStyles={{ backgroundColor: "#f3ecda", borderRadius: "5px" }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{
              width: { md: "91.555px", sm: "66.161px", xs: "47px" },
              margin: "auto",
            }}
          >
            <Image
              alt="image"
              // src={ModalImage}
              src={FrameImage}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: { md: "22px", sm: "21.679px", xs: "15.508px" },
              fontWeight: 900,
              color: "#30422e",
              margin: { md: "25px 0", sm: "15px 0px", xs: "5px" },
            }}
          >
            {t("template.temModal.thankYou")}
          </Typography>
          <Typography
            sx={{
              fontSize: { md: "16.5px", sm: "16.259px", xs: "11.631px" },
              color: "#30422e",
              width: { md: "400px", sm: "300px", xs: "180px" },
              margin: { md: "0 120px", sm: "0px 55px", xs: "0px" },
            }}
          >
            {t("template.temModal.TYDescription")}
          </Typography>
          <Box
            sx={{
              margin: { md: "40px 0 30px", sm: "22px 0", xs: "16px 0" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <GlobelBtn
              btnText={`${t("template.temModal.SEBtn")}`}
              bgColor="#e1693b"
              color="white"
              onClick={() => {
                router.push("/dashboard/chapters");
                setCompletionModal(false);
              }}
              width={{ md: "234px", sm: "153px", xs: "103px" }}
            />
          </Box>
        </Box>
      </CustomizationDialog>
      <TransitionsDialog
        open={templateState}
        heading={`${t("template.temModal.copyTem")}`}
        description={`${t("template.temModal.copyTemDes")}`}
        cancel={() => {
          setTemplateState(false);
          setButtonLoading(true);
          setCopyTemLoading(false);
        }}
        closeModal={() => {
          setTemplateState(false);
          setButtonLoading(true);
          setCopyTemLoading(false);
        }}
        proceed={handleCopyAgain}
      />
    </>
  );
};

export default chapterName;
