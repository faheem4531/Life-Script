import Layout from "@/components/Layout/Layout";
import ChooseTemplate from "@/components/dashboardComponent/ChooseTemplate";
import DetailCard from "@/components/dashboardComponent/DetailCard";
import {
  cloneTemplate,
  getChapters,
  getTemplates,
  selectTemplates,
} from "@/store/slices/chatSlice";
import styles from "@/styles/Dashboard.module.css";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch: any = useDispatch();
  const templates = useSelector(selectTemplates);
  console.log("tempppp", templates);

  useEffect(() => {
    dispatch(getTemplates()).then(() => {
      dispatch(cloneTemplate({ id: "655b729ea7266075e3ce3568" })).then(() =>
        getChapters()
      );
    });
  }, []);

  return (
    <Layout>
      <Box className={styles.subContainer}>
        <ChooseTemplate />
        <Box
          sx={{ marginTop: { sm: "48px", xs: "30px" } }}
          className={styles.CardsContainer}
        >
          {templates?.map((template, index) => (
            <DetailCard key={index + 1} chapter={template} />
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

export default Dashboard;
