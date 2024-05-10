import Layout from "@/components/Layout/Layout";
import SubscriptionHeader from "@/components/dashboardComponent/subscriptionHeader";
import { selectTocData } from "@/store/slices/chatSlice";
import styles from "@/styles/Dashboard.module.css";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import TOCMain from "./components/TOCMain";
import AddChapterName from '@/components/dashboardComponent/AddChapterName';

const TableOfContent = () => {
  const dispatch: any = useDispatch();
  const tocData = useSelector(selectTocData);
  const { t } = useTranslation();

  return (
    <div>
      <Layout>
        <Box className={styles.subContainer}>
          <Box
            sx={{
              p: { sm: "0px", xs: "20px 15px" },
            }}
          >
            <AddChapterName editChapter={() => { }}
              chapterId
              chapter={`${t("TOC.TOCHeader")}`}
              title="noBack"
            />
            <TOCMain />
          </Box>
        </Box>
      </Layout>
    </div>
  );
};

export default TableOfContent;
