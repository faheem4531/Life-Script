import { Grid, Typography } from "@mui/material";
import { useSession } from "next-auth/react";

const GiftTabBar = ({ tabs, onClick }) => {
  const { data: session } = useSession();
  // console.log("tabs", tabs);
  return (
    <Grid
      container
      sx={{
        color: "black",
        width: "100%",
        maxWidth: "1500px",
      }}
    >
      {tabs?.map(
        (tab, index) =>
          // Render the registration tab only if it's not the second tab and there's no session
          (index !== 1 || !session) && (
            <Grid
              key={index}
              item
              xs={2.5}
              sx={{ padding: "2px" }}
              onClick={() => onClick(index)}
            >
              <Typography
                sx={{
                  marginBottom: "5px",
                  color: tab.active ? "black" : "#7C7C7C",
                  fontSize: { md: "14.097px", sm: "10px", xs: "10px" },
                  fontWeight: 700,
                  textAlign: "left",
                }}
              >
                {tab.label}
              </Typography>
              <Grid
                sx={{
                  bgcolor: tab.active ? "#e1693b" : "f0d2ba",
                  borderRadius: "10px",
                  height: "9px",
                  border: "1px solid #e1693b",
                  width: "100%",
                }}
              />
            </Grid>
          )
      )}
    </Grid>
  );
};

export default GiftTabBar;