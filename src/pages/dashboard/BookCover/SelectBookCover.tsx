import Layout from "@/components/Layout/Layout";
import SelectBookCoverCard from "@/components/dashboardComponent/SelectBookCoverCard";
import SelectBookCoverHeader from "@/components/dashboardComponent/SelectBookCoverHeader";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const SelectBookCover = () => {
  const router = useRouter();
  return (
    <div>
      <Layout>
        <SelectBookCoverHeader />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            mt: "20px",
          }}
        >
          <Box flex={"auto"}>
            <Box
              onClick={() =>
                router.push(
                  `/dashboard/BookCover/EditBookCover?CoverNumber=1`
                )
              }
            >
              <SelectBookCoverCard landScape="1" />
            </Box>
          </Box>
          <Box flex={"auto"}>
            <Box
              onClick={() =>
                router.push(
                  `/dashboard/BookCover/EditBookCover?CoverNumber=2`
                )
              }
            >
              <SelectBookCoverCard landScape="2" />
            </Box>
          </Box>
        </Box>
        <Box display="flex" justifyContent="flex-end" mt="40px">
          <Button
            sx={{
              bgcolor: "transparent",
              fontSize: "25px",
              color: "black",
              textDecoration: "underline",
              textTransform: "capitalize",
            }}
          >
           { "View more ->"}
          </Button>
        </Box>
      </Layout>
    </div>
  );
};

export default SelectBookCover;
