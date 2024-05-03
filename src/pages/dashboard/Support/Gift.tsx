import Pack from "@/_assets/svg/gift-pack.svg";
import Refer from "@/_assets/svg/refer-link.svg";
import Layout from "@/components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import AddChapterName from '@/components/dashboardComponent/AddChapterName';
import GiftCard from './components/GiftCard';
import { useRouter } from "next/router";

const Gift = () => {
  const router = useRouter();

  const accessRole = localStorage.getItem("accessRole")

  return (
    <Box>
      <Layout>
        <Box
          sx={{
            p: { sm: "0px", xs: "10px 10px" },
          }}
        >
          <AddChapterName
            chapterId
            chapter="Gift a Book"
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
              info="Give a truly meaningful gift to a friend that will be cherished for generations."
              btntext="Send as a gift"
              onClick={() => { } } disabled={undefined}            />
            <GiftCard
              image={Refer}
              info="Get a bonus book for referring a friend, plus they'll enjoy a 10% sign-up discount!"
              btntext="Refer a friend"
              onClick={() => {
                router.push("/dashboard/Support/ReferAFriend");
              }}
              disabled={accessRole}
            />
          </Box>
        </Box>
      </Layout>

    </Box>
  );
};

export default Gift;
