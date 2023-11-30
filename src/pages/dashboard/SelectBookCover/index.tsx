import Layout from "@/components/Layout/Layout";
import SelectBookCoverCard from "@/components/dashboardComponent/SelectBookCoverCard";
import SelectBookCoverHeader from "@/components/dashboardComponent/SelectBookCoverHeader";
import { Box } from "@mui/material";
import React from "react";


const SelectBookCover = () => {
    return (<div>
        <Layout>
            <SelectBookCoverHeader/>
            <Box>
                <SelectBookCoverCard/>
            </Box>
        </Layout>
    </div>)
}

export default SelectBookCover