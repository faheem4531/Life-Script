import Layout from "@/components/Layout/Layout";
import SubscriptionHeader from "@/components/dashboardComponent/subscriptionHeader";
import { selectTocData } from "@/store/slices/chatSlice";
import styles from "@/styles/Dashboard.module.css";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import TOCMain from "./components/TOCMain";

const TableOfContent = () => {
  const dispatch: any = useDispatch();
  const tocData = useSelector(selectTocData);

  return (
    <div>
      <Layout>
        <Box className={styles.subContainer}>
          <Box
            sx={{
              p: { sm: "0px", xs: "20px 15px" },
            }}
          >
            <SubscriptionHeader title="Table of Content" />
            <TOCMain />
          </Box>
        </Box>
      </Layout>
    </div>
  );
};

export default TableOfContent;
