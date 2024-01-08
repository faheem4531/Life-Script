import Layout from "@/components/Layout/Layout";
import SubscriptionHeader from "@/components/dashboardComponent/subscriptionHeader";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import BookCoverTab from "./BookCoverTab";
import TableOfContentTab from "./TableOfContentTab";
import ViewBookTab from "./ViewBookTab";

const BookView = () => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = () => {
    if (selectedTab === 0) {
      router.push("/dashboard/TableOfContent");
    } else if (selectedTab === 1) {
      router.push("/dashboard/BookCover/SelectBookCover");
    }
  };

  return (
    <Box>
      <Layout>
        <Box
          sx={{
            p: {
              sm: "0px",
              xs: "10px",
            },
          }}
        >
          <SubscriptionHeader
            title="Book View"
            description="If you want to edit something then click on the edit button."
            btnCheck={true}
            onClick={() => {
              handleTabChange();
            }}
          />
          {selectedTab === 0 && (
            <TableOfContentTab setSelectedTab={setSelectedTab} />
          )}
          {selectedTab === 1 && (
            <BookCoverTab setSelectedTab={setSelectedTab} />
          )}
          {selectedTab === 2 && <ViewBookTab setSelectedTab={setSelectedTab} />}
        </Box>
      </Layout>
    </Box>
  );
};

export default BookView;
