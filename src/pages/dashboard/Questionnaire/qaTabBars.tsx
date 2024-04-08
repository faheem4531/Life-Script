import { Grid } from "@mui/material";

const QaTabBars = ({ tabProp }) => {
  return (
    <Grid
      container
      gap={2.5}
      sx={{ width: "100%", maxWidth: "700px", }}
    >
      {/* Tab 1 */}
      <Grid
        item
        xs={tabProp === 1 ? 4 : 2.2}
        sx={{
          bgcolor: tabProp === 1 ? "#E1683B" : "#E1683B",
          borderRadius: "3px",
          height: "10px",
          opacity: tabProp === 1 ? "1" : "0.2",
        }}
      ></Grid>

      {/* Tab 2 */}
      <Grid
        item
        xs={tabProp === 2 ? 4 : 2.2}
        sx={{
          bgcolor: tabProp === 2 ? "#E1683B" : "#E1683B",
          borderRadius: "3px",
          height: "10px",
          opacity: tabProp === 2 ? "1" : "0.2",
        }}
      ></Grid>

      {/* Tab 3 */}
      <Grid
        item
        xs={tabProp === 3 ? 4 : 2.2}
        sx={{
          bgcolor: tabProp === 3 ? "#E1683B" : "#E1683B", // Change this color as needed
          borderRadius: "3px",
          height: "10px",
          opacity: tabProp === 3 ? "1" : "0.2",
        }}
      ></Grid>

      {/* Tab 4 */}
      <Grid
        item
        xs={tabProp === 4 ? 4 : 2.2}
        sx={{
          bgcolor: tabProp === 4 ? "#E1683B" : "#E1683B", // Change this color as needed
          borderRadius: "3px",
          height: "10px",
          opacity: tabProp === 4 ? "1" : "0.2",
        }}
      ></Grid>
    </Grid>
  );
};

export default QaTabBars;
