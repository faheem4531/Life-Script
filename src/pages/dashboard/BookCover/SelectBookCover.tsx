import Img from "@/_assets/book-cover";
import BookCover from "@/_assets/svg/book-cover-header.svg";
import Layout from "@/components/Layout/Layout";
import SelectBookCoverHeader from "@/components/dashboardComponent/SelectBookCoverHeader";
import { Box, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const SelectBookCover = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const getCoverImage = (coverNumber: number) => {
    return `/covers/Cover${coverNumber}.png`;
  };
  const myArray = [...Array(Object.keys(Img).length)].map((_, i) => i + 1)

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
          <SelectBookCoverHeader img={BookCover} discription={`${t("BookCover.BookCover")}`} />
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
                    cursor: 'pointer',
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
                  onClick={() =>
                    router.push(
                      `/dashboard/BookCover/EditBookCover?CoverNumber=${index + 1
                      }`
                    )
                  }
                >
                  <img
                    src={getCoverImage(index + 1)}
                    alt={`Cover ${index + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
        </Box>
      </Layout>
    </div>
  );
};

export default SelectBookCover;
