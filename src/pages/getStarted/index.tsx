import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";
import Arrow from "../../../public/startArrow.png";
// import Image from '@mui/material/Image';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/router";

const getStarted = () => {
  const router = useRouter();
  const { userName } = router.query;
  const isXs = useMediaQuery("(max-width:600px)");
  // const isSm = useMediaQuery("")
  const isMd = useMediaQuery("(min-width:601px)");
  const isLg = useMediaQuery("(min-width:1300px)");
  const isXl = useMediaQuery("(min-width:1920px)");

  let imageStyle = {
    width: "100px", // Default width for xs screens
    height: "auto", // Default height for xs screens
  };
  if (isXs) {
    imageStyle = {
      width: "150px", // Customize this for md screens
      height: "auto",
    };
  }
  if (isMd) {
    imageStyle = {
      width: "430px", // Customize this for md screens
      height: "auto",
    };
  }

  if (isLg) {
    imageStyle = {
      width: "550px", // Customize this for lg screens
      height: "auto",
    };
  }
  if (isXl) {
    imageStyle = {
      width: "672px", // Customize this for lg screens
      height: "auto",
    };
  }

  useEffect(() => {
    setTimeout(() => {
      router.push(`/getStarted/getTitle?userName=${userName}`);
    }, 3000);
  }, []);

  return (
    <div>
      <Box
        sx={{
          backgroundImage: 'url("/letsStarted.svg")',
          backgroundSize: "cover", // Adjust as needed
          backgroundPosition: "center center", // Adjust as needed
          backgroundRepeat: "no-repeat", // Adjust as needed
          width: "100%",
          height: "100vh", // Adjust the height as needed
          overflow: "hidden",
          margin: 0,
          padding: 0,
          gap: 0,
        }}
      >
        <Box
          sx={{
            paddingTop: {
              xs: "170px",
              sm: "170px",
              md: "170px",
              lg: "100px",
              xl: "70px",
            },
            paddingLeft: { xs: "20px", sm: "100px", md: "100px", lg: "125px" },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "30px",
                sm: "60px",
                md: "60px",
                lg: "60px",
                xl: "60px",
              },
              color: "white",
            }}
          >
            {userName} 👋
          </Typography>
        </Box>
        <Box
          sx={{
            paddingLeft: {
              xs: "140px",
              sm: "180px",
              md: "180px",
              lg: "250px",
              xl: "260px",
            },
            paddingTop: {
              xs: "140px",
              sm: "250",
              md: "250px",
              lg: "300px",
              xl: "150px",
            },
            color: "white",
          }}
        >
          <Image
            src={Arrow}
            alt="arrow"
            style={imageStyle}
            //  width={430}
            //  height={100}
            //  style={{
            //   width:{xs:'100px',md:'200px',lg:'300px',xl:'400px',
            // }}}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: { xs: "0px", md: "0px", lg: "0px" },
            paddingTop: {
              xs: "140px",
              sm: "300px",
              md: "50px",
              lg: "70px",
              xl: "150px",
            },
            paddingLeft: {
              xs: "130px",
              sm: "150px",
              md: "90px",
              lg: "230px",
              xl: "290px",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "30px",
                sm: "80px",
                md: "100px",
                lg: "120px",
                xl: "150px",
              },
              color: "white",
            }}
          >
            Let Us Help{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "35px",
                sm: "80px",
                md: "100px",
                lg: "120px",
                xl: "150px",
              },
              color: "#197065",
              paddingLeft: "30px",
            }}
          >
            You...
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default getStarted;
