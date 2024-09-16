import Img from "@/_assets/book-cover";
import BookCover from "@/_assets/svg/book-cover-header.svg";
import Layout from "@/components/Layout/Layout";
import SelectBookCoverHeader from "@/components/dashboardComponent/SelectBookCoverHeader";
import TransitionsDialog from "@/components/modal/TransitionDialog";
import { getBookCover } from "@/store/slices/chatSlice";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

const SelectBookCover = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPremium, setIsPremium] = useState(false);
  const [buyPremium, setBuyPremium] = useState(false)
  const router = useRouter();
  const { flag } = router.query;
  const dispatch: any = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    const jwt = require("jsonwebtoken");
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwt.decode(token);
      const accessRole = decodedToken?.accessRole;
      if (accessRole === "PremiumPlan") {
        setIsPremium(true);
      } else {
        setIsPremium(false);
      }
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getBookCover())
      .unwrap()
      .then((res) => {
        setIsLoading(false);

        if (flag === 'true') {
          // Stay on the current page
          return;
        } else {
          const destination = res?.coverNumber
            ? `/dashboard/BookCover/ViewBookCover?CoverNumber=${res?.coverNumber}`
            : "/dashboard/BookCover/SelectBookCover";

          router.push(destination);
        }
      })

      .catch((err) => {
        setIsLoading(false);
      });
  }, []);

  const getCoverImage = (coverNumber: number) => {
    return `/covers/Cover${coverNumber}.png`;
  };

  const myArray = [...Array(Object.keys(Img).length)].map((_, i) => i + 1);

  const handleCoverClick = (index: number) => {
    if (index < 3) {
      router.push(
        `/dashboard/BookCover/EditBookCover?CoverNumber=${index + 1
        }`
      )
    } else {
      if (isPremium) {
        router.push(
          `/dashboard/BookCover/EditBookCover?CoverNumber=${index + 1
          }`
        )
      }
      else if (!isPremium) {
        setBuyPremium(true);
      }
    }
  }


  return (
    <div>
      <Layout>
        <Box
          sx={{
            p: {
              sm: "0px",
              xs: "10px 20px",
            },
          }}
        >
          <SelectBookCoverHeader
            img={BookCover}
            discription={`${t("BookCover.BookCover")}`}
          />
          {isLoading ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100vh"
            >
              <CircularProgress />
            </Box>
          ) : (
            <Grid container spacing={3} paddingTop={3}>
              {myArray.map((_, index) => (
                <Grid item xs={12} sm={6} md={4} key={index + 1}>
                  <Box
                    sx={{
                      position: "relative",
                      backgroundColor: "#F4F4F4",
                      borderRadius: "4px",
                      width: "100%",
                      maxWidth: "375px",
                      maxHeight: "500px",
                      height: "100%",
                      padding: "22px",
                      cursor: "pointer",
                      "&:hover": {
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: "#30422ED9",
                          borderRadius: "4px",
                          zIndex: 1,
                        },
                        "& p": {
                          opacity: 1,
                        },
                      },
                    }}
                    onClick={() => handleCoverClick(index)}
                  >
                    <img
                      src={getCoverImage(index + 1)}
                      alt={`Cover ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <Typography
                      variant="body1"
                      component="p"
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "white",
                        textAlign: "center",
                        opacity: 0,
                        transition: "opacity 0.3s ease-in-out",
                        zIndex: 2,
                      }}
                    >
                      {t("BookCoverCard.UseThisCover")}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Layout>

      <TransitionsDialog
        open={buyPremium}
        heading={`${t("richText.ByPreHeading")}`}
        description={t("richText.PreDesCovers")}
        cancel={() => {
          setBuyPremium(false);
        }}
        closeModal={() => {
          setBuyPremium(false);
        }}
        proceed={() => {
          setBuyPremium(false);
          router.push("/dashboard/SubscribePlans");
        }}
      />
    </div>
  );
};

export default SelectBookCover;
