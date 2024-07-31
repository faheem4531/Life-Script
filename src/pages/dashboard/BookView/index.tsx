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
import AddChapterName from '@/components/dashboardComponent/AddChapterName';
import { useTranslation } from "next-i18next";


const BookView = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState(0);
  const [count, setCount] = useState(1);
  const [remainingPayment, setRemainingPayment] = useState(0);
  const [bookInterior, setBookInterior] = useState({
    link: "",
    pages: 0,
  })

  const handleTabChange = () => {
    if (selectedTab === 0) {
      router.push("/dashboard/TableOfContent");
    } else if (selectedTab === 1) {
      router.push("/dashboard/BookCover/SelectBookCover");
    }
  };
  const tabs = [
    { label: t("reviewBook.labels.label1"), active: selectedTab >= 0 },
    { label: t("reviewBook.labels.label2"), active: selectedTab >= 1 },
    { label: t("reviewBook.labels.label3"), active: selectedTab >= 2 },
    { label: t("reviewBook.labels.label4"), active: selectedTab >= 3 },
    { label: t("reviewBook.labels.label5"), active: selectedTab === 4 },
  ];
  


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
          <AddChapterName editChapter={() => { }}
            chapterId
            chapter={
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
            title="noBack"
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
              <TableOfContentTab setSelectedTab={setSelectedTab} bookData={(obj) => {
                setBookInterior(prevState => ({
                  ...prevState,
                  link: obj.link,
                  pages: obj.pages,
                }))
              }} />
            )}
            {selectedTab === 1 && (
              <BookCoverTab setSelectedTab={setSelectedTab} pages={bookInterior?.pages} />
            )}
            {selectedTab === 2 && (
              <ReviewInterior setSelectedTab={setSelectedTab} interior={bookInterior?.link} totalInteriorPages={bookInterior?.pages}/>
            )}
            {selectedTab === 3 && (
              <Shipping
                setSelectedTab={setSelectedTab}
                count={count}
                setCount={setCount}
                setRemainingPaymenmt={setRemainingPayment}
              />
            )}
            {selectedTab === 4 && (
              <Checkout
                setSelectedTab={setSelectedTab}
                count={count}
                setCount={setCount}
                remainingPayment={remainingPayment}
              />
            )}
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default BookView;
