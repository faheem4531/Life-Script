import Layout from "@/components/Layout/Layout";
import SubscriptionHeader from "@/components/dashboardComponent/subscriptionHeader";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import BookCoverTab from "./BookCoverTab";
import Checkout from "./Checkout";
import Shipping from "./Shipping";
import TableOfContentTab from "./TableOfContentTab";
import ReviewInterior from "./ViewBookTab";
import TabBars from "./components/TabBars";

const BookView = () => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState(1);
  const [count, setCount] = useState(1);

  const handleTabChange = () => {
    if (selectedTab === 0) {
      router.push("/dashboard/TableOfContent");
    } else if (selectedTab === 1) {
      router.push("/dashboard/BookCover/SelectBookCover");
    }
  };
  const tabs = [
    { label: "1. Review TOC", active: selectedTab >= 0 },
    { label: "2. Cover Design", active: selectedTab >= 1 },
    { label: "3. Review Interior", active: selectedTab >= 2 },
    { label: "4. Shipping", active: selectedTab >= 3 },
    { label: "5. Checkout", active: selectedTab === 4 },
  ];

  console.log("selectedTab", selectedTab);

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
            title={
              selectedTab === 0
                ? "Review Table of Content"
                : selectedTab === 1
                ? "Book Cover"
                : selectedTab === 2
                ? "Review Interior"
                : selectedTab === 3
                ? "Shipping"
                : selectedTab === 4 && "Checkout"
            }
            description=""
          />
          <Box
            sx={{
              my: "20px",
            }}
          >
            <TabBars tabs={tabs} />
          </Box>
          <Box mt="15px">
            {selectedTab === 0 && (
              <TableOfContentTab setSelectedTab={setSelectedTab} />
            )}
            {selectedTab === 1 && (
              <BookCoverTab setSelectedTab={setSelectedTab} />
            )}
            {selectedTab === 2 && (
              <ReviewInterior setSelectedTab={setSelectedTab} />
            )}
            {selectedTab === 3 && (
              <Shipping
                setSelectedTab={setSelectedTab}
                count={count}
                setCount={setCount}
              />
            )}
            {selectedTab === 4 && (
              <Checkout
                setSelectedTab={setSelectedTab}
                count={count}
                setCount={setCount}
              />
            )}
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default BookView;
