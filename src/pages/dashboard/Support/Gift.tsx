import Pack from "@/_assets/svg/gift-pack.svg";
import Refer from "@/_assets/svg/refer-link.svg";
import Layout from "@/components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import AddChapterName from '@/components/dashboardComponent/AddChapterName';
import GiftCard from './components/GiftCard';
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Gift = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const accessRole = localStorage.getItem("accessRole")

  return (
    <Box>
      <Layout>
        <Box
          sx={{
            p: { sm: "0px", xs: "10px 10px" },
          }}
        >
          <AddChapterName editChapter={() => { }}
            chapterId
            chapter={t("giftABook.title")}
            title="noBack"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
              borderRadius: "4x",
              bgcolor: "#F3ECDA",
              flexDirection: { md: "row", sm: "column", xs: "column" },
              p: { md: "30px", sm: "20px 20px", xs: "16px" },
              mt: "26px",
            }}
          >
            <GiftCard
              image={Pack}
              info={t("giftABook.giftCard1Description.description")}
              btntext={t("giftABook.giftCard1Description.textBtn")}
              onClick={() => {
                router.push({
                  pathname: "/stripe-page/gift-subscription",
                  query: { inAppGiftFlow: "true" }
                });
              }} disabled={undefined} />
            <GiftCard
              image={Refer}
              info={t("giftABook.giftCard2Description.description")}
              btntext={t("giftABook.giftCard2Description.textBtn")}
              onClick={() => {
                router.push("/dashboard/Support/ReferAFriend");
              }}
              disabled={accessRole === "FreePlan"}
            />
          </Box>
        </Box>
      </Layout>

    </Box>
  );
};

export default Gift;
