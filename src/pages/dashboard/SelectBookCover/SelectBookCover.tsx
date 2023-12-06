import Layout from "@/components/Layout/Layout";
import SelectBookCoverCard from "@/components/dashboardComponent/SelectBookCoverCard";
import SelectBookCoverHeader from "@/components/dashboardComponent/SelectBookCoverHeader";
import { Box } from "@mui/material";
import React from "react";

const SelectBookCover = () => {
  return (
    <div>
      <Layout>
        <SelectBookCoverHeader />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            mt: "20px"
          }}
        >
          <Box flex={"auto"}>
            <SelectBookCoverCard landScape={true} />
          </Box>
          <Box flex={"auto"}>
            <SelectBookCoverCard landScape={false} />
          </Box>
        </Box>
      </Layout>
    </div>
  );
};

export default SelectBookCover;
