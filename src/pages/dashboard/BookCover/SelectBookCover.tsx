import Layout from "@/components/Layout/Layout";
import SelectBookCoverCard from "@/components/dashboardComponent/SelectBookCoverCard";
import SelectBookCoverHeader from "@/components/dashboardComponent/SelectBookCoverHeader";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";

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
                router.push(`/dashboard/BookCover/EditBookCover?CoverNumber=1`)
              }
            >
              <SelectBookCoverCard landScape="1" />
            </Box>
          </Box>
          <Box flex={"auto"}>
            <Box
              onClick={() =>
                router.push(`/dashboard/BookCover/EditBookCover?CoverNumber=2`)
              }
            >
              <SelectBookCoverCard landScape="2" />
            </Box>
          </Box>
        </Box>
        <Box display="flex" justifyContent="flex-end" mt="40px">
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: { sm: "10px", xs: "5px" },
              width: "200px",
              borderRadius: "26.267px",
              border: " 0.71px solid #197065",
              fontSize: { xs: "12px", md: "14px", lg: "18.752px" },
              color: "#197065",
              textTransform: "capitalize",
              p: "5px 4px",
              cursor: "pointer",
            }}
          >
            {"View more"}
          </Button>
        </Box>
      </Layout>
    </div>
  );
};

export default SelectBookCover;
