import { Box } from "@mui/material";
import Image from "next/image";
import Error404 from "../../_assets/svg/404Error.svg";
import styles from "./404.module.css";

const Errer404 = () => {
  return (
    <Box>
      {/* <NavBar /> */}
      <Box
        sx={{
          height: "calc(100vh)",
          width: "100%",
        }}
        className={styles.main404}
      >
        <Box
          sx={{
            width: { md: "679.341px", sm: "500px", xs: "280px" },
          }}
        >
          <Image
            src={Error404}
            alt="Error404"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Errer404;
