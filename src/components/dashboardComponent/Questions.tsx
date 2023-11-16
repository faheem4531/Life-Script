import Option from "@/_assets/png/X-menu.png";
import { Box, Button, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const options = ["None", "Atria", "Callisto"];
const ITEM_HEIGHT = 48;

interface QuestionsProps {
  question?: any;
  number?: number;
  answerClick?: (chapterName: string) => void; // Define the callback type here
}
export default function Questions({
  question,
  number,
  answerClick,
}: QuestionsProps) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          bgcolor: "#F9F9F9",
          width: "100%",
          borderRadius: "8px",
          borderLeft: "11px solid #186F65",
          height: { sm: "110px", xs: "90px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: { sm: "20px", xs: "10px" },
          cursor: "pointer",
        }}
        onClick={() => answerClick(question?.text)}
      >
        <Typography
          sx={{
            marginLeft: { sm: "20px", xs: "10px" },
            color: "rgba(22, 22, 22, 0.90)",
            fontSize: { sm: "25px", xs: "18px" },
            fontWeight: 400,
          }}
        >
          {number}2
          {". "}
          {question?.text} My name is faheem aaaaaaaannnnnnddddd
        </Typography>
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            onClick={() => { }}
            type="submit"
            sx={{
              borderRadius: " 0px 8px 8px 0px",
              backgroundColor: "#186F65",
              color: "rgba(255, 255, 255, 0.90)",
              width: "100px",
              height: { sm: "110px", xs: "90px" },
              "&:hover": {
                backgroundColor: "#186F65",
              },
            }}
          >
            Start
          </Button>
        </Box>
      </Box>

      {/* More option :start */}
      <Box sx={{ position: "absolute", right: { sm: "-30", xs: "-25px" }, top: { sm: "40px", xs: "30px" } }}>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Image alt="options" src={Option} />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "10ch",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              selected={option === "Pyxis"}
              onClick={handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      {/* More option :end */}
    </Box>
  );
}
