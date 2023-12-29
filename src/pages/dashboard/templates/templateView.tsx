"use client";
import Layout from "@/components/Layout/Layout";
import AddChapterName from "@/components/dashboardComponent/AddChapterName";
import NoQuestions from "@/components/dashboardComponent/NoQuestions";
// import ProgressBar from "@/components/dashboardComponent/ProgressBar";
import Questions from "@/components/dashboardComponent/Questions";
import CustomizationDialog from "@/components/modal/CustomizationDialog";
// import AddQuestion from "@/pages/events/addQuestion";
import ModalImage from "@/_assets/png/view-template-modal.png";
import UseTemplate from "@/_assets/svg/useTemplate.svg";
import Button from "@/components/button/Button";
import TransitionsDialog from "@/components/modal/TransitionDialog";
import {
  cloneTemplate,
  // cloneTemplate,
  getTemplates,
  isTemplateCloned,
  selectTemplates,
} from "@/store/slices/chatSlice";
import { Box, ButtonBase, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const chapterName = () => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [templateTitle, setTemplateTitle] = useState("");
  const [allQuestions, setAllQuestions] = useState([]);
  const [tempQuestionIds, setTempQuestionIds] = useState([]);
  const [buttonLoading, setButtonLoading] = useState(true);
  const router = useRouter();
  const dispatch: any = useDispatch();
  const { templateId } = router.query;
  const allTemplates = useSelector(selectTemplates);
  const [templateState, setTemplateState] = useState(false);
  let templateData;

  const handleChapterClone = () => {
    setButtonLoading(false);
    dispatch(isTemplateCloned({ id: templateId.toString() }))
      .unwrap()
      .then((res) => {
        if (res == "Template is already cloned") {
          setTemplateState(true);
        } else {
          dispatch(
            cloneTemplate({ id: templateId.toString(), ids: tempQuestionIds })
          )
            .unwrap()
            .then(() => {
              setOpenModal(true);
              setButtonLoading(true);
            })
            .catch(() => {
              setButtonLoading(true);
            });
        }
      })
      .catch(() => {
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
    dispatch(cloneTemplate({ id: templateId.toString(), ids: tempQuestionIds }))
      .then(() => {
        setOpenModal(true);
        setTemplateState(false);
      })
      .catch(() => {
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
      .then(() => setLoading(false));
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
            chapterId={templateData?._id}
            chapter={templateTitle}
            title="templateView"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: { sm: "flex-end", xs: "center" },
            marginBottom: "10px",
            mt: { sm: "10px", xs: "0px" },
            opacity: tempQuestionIds?.length && buttonLoading ? "1" : "0.6",
          }}
        >
          <Button
            image={UseTemplate}
            title="Use Template"
            background="#197065"
            borderRadius="55px"
            border={0}
            fontSize="17px"
            color="#fff"
            width="220px"
            padding="8px 0px"
            onClick={() => {
              tempQuestionIds?.length && buttonLoading && handleChapterClone();
            }}
            height={undefined}
          />
        </Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: { md: "35px", sm: "35px 21px", xs: "15px 10px" },
            minHeight: { md: "60vh", xs: "calc(100vh - 175px)" },
            borderRadius: { sm: "18px", xs: "5px" },
          }}
        >
          <Typography
            sx={{
              fontSize: { md: "19.379px", sm: "18.501px" },
              fontWeight: 700,
              color: "rgba(0, 0, 0, 0.87)",
              display: { sm: "block", xs: "none" },
            }}
          >
            Questions
          </Typography>

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
            <>
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
            </>
          )}
        </Box>
      </Layout>

      {/* Use Template Modal   */}
      <CustomizationDialog
        open={openModal}
        title=""
        handleClose={() => {
          setOpenModal(false);
          router.push("/dashboard/chapters");
        }}
        customStyles={{ backgroundColor: "auto", borderRadius: "22px" }}
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
              src={ModalImage}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: { md: "30px", sm: "21.679px", xs: "15.508px" },
              fontWeight: 700,
              color: "#070707",
              margin: { md: "25px 0", sm: "15px 0px", xs: "5px" },
            }}
          >
            Thank You!
          </Typography>
          <Typography
            sx={{
              fontSize: { md: "22.5px", sm: "16.259px", xs: "11.631px" },
              color: "#070707",
              width: { md: "400px", sm: "300px", xs: "191px" },
              margin: { md: "0 120px", sm: "0px 55px", xs: "0px 25px" },
            }}
          >
            Template has been added to your chapters
          </Typography>

          <ButtonBase
            onClick={() => {
              router.push("/dashboard/chapters");
              setOpenModal(false);
            }}
            sx={{
              borderRadius: "78px",
              color: "#fff",
              fontSize: { md: "18.75px", sm: "13.549px", xs: "9.693px" },
              bgcolor: "#197065",
              margin: { md: "40px 0 30px", sm: "22px 0", xs: "16px 0" },
              "&:hover": {
                color: "#fff",
                bgcolor: "#197065",
              },
              p: {
                md: "10.357px 35.98px 10.723px 37.385px",
                sm: "7.484px 25.491px 8.092px 27.015px",
                xs: "5.354px 18.463px 4.949px 19.325px",
              },
            }}
          >
            Start editing
          </ButtonBase>
        </Box>
      </CustomizationDialog>
      <TransitionsDialog
        open={templateState}
        heading="Copy Template"
        description="This template is already copied, want to copy template again?"
        cancel={() => {
          setTemplateState(false);
          setButtonLoading(true);
        }}
        closeModal={() => {
          setTemplateState(false);
          setButtonLoading(true);
        }}
        proceed={handleCopyAgain}
      />
    </>
  );
};

export default chapterName;
