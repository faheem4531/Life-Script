import { Box, Stack, Typography } from "@mui/material";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        height: "29px",
        bgcolor: "rgba(127, 136, 107, 0.30)",
        borderRadius: "4px",
      }}
    >
      <Stack sx={{ width: "100%", color: "#7f886b" }} spacing={2}>
        <LinearProgress
          sx={{
            height: "27px", bgcolor: "rgba(127, 136, 107, 0.30)", borderRadius: "2px", "& .MuiLinearProgress-bar": {
              backgroundColor: "#7f886b",
            },
          }}
          variant="determinate"
          {...props}
        />
      </Stack>
      <Box sx={{ minWidth: 35, position: "absolute", right: "20px" }}>
        <Typography
          variant="body2"
          color={Math.round(props.value) === 100 ? "white" : "#7f886b"}
          fontWeight="500"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function LinearProgressBar({ percentage }: any) {

  return (
    <Box sx={{ width: "100%", marginTop: "10px" }}>
      <LinearProgressWithLabel value={percentage} />
    </Box>
  );
}

{
  /*  2nd  Linear Reload bar */
}

function LoadingProgress(props: LinearProgressProps & { value: number }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "45px",
        bgcolor: "#d1cfb9",
        borderRadius: "30px",
        position: "relative",
      }}
    >
      <Stack
        sx={{
          width: "100%",
          color: "#d1cfb9",
          borderRadius: "10px",
        }}
        spacing={2}
      >
        <LinearProgress
          sx={{
            height: "45px", bgcolor: "#d1cfb9", borderRadius: "5px", "& .MuiLinearProgress-bar": {
              backgroundColor: "#7f886b",
            },
          }}
          variant="determinate"
          {...props}
        />
        <Box
          sx={{ minWidth: 35, position: "absolute", right: "42%", top: "-12px" }}
        >
          <Typography
            variant="body2"
            color="#FAFAFA"
            fontSize="30px"
            fontWeight="300"
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export function ReloadingBar({ value }: any) {
  return (
    <Box sx={{ width: "100%" }}>
      <LoadingProgress value={value} />
    </Box>
  );
}
