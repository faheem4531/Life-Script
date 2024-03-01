import Layout from "@/components/Layout/Layout";
import GlobelBtn from "@/components/button/Button";
import SelectBookCoverHeader from "@/components/dashboardComponent/SelectBookCoverHeader";
import { Box, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Img from "@/_assets/book-cover";
import Cover1 from "@/_assets/book-cover/Cover1.png";

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
          <SelectBookCoverHeader
            discription={`${t("BookCover.SelectBookCover")}`}
          />
          <Grid container spacing={3} paddingTop={3}>
            {myArray.map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index + 1}>
                <Box
                  sx={{
                    position: "relative",
                    backgroundColor: "white",
                    borderRadius: "6.077px",
                    border: "0.304px solid rgb(25, 112, 101)",
                    width: "100%",
                    height: "100%",
                    padding: "53px 20px",
                    cursor: 'pointer',
                    "&:hover": {
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        borderRadius: "6.077px",
                        zIndex: 1,
                      },
                      "& p": {
                        opacity: 1,
                      },
                    },
                  }}
                  onClick={() =>
                    router.push(
                      `/dashboard/BookCover/EditBookCover?CoverNumber=${
                        index + 1
                      }`
                    )
                  }
                >
                  {/* <Img.Cover4 sx={{ fontSize: "300px" } } /> */}
                  <img
                    src={getCoverImage(index + 1)}
                    alt={`Cover ${index + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  {/* {getCoverImage(index + 1)({ sx: { fontSize: "300px" } })} */}
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
                    USE THIS COVER
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box display="flex" justifyContent="flex-end" mt="40px">
            <GlobelBtn
              btnText={`${t("BookCover.viewMore")}`}
              border="1px solid #197065"
              width={"180px"}
            />
          </Box>
        </Box>
      </Layout>
    </div>
  );
};

export default SelectBookCover;
