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

export default function Questions({ question, number }) {
  console.log("qqq", question);
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
          height: "110px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: "20px",
        }}
      >
        <Typography
          sx={{
            marginLeft: "20px",
            color: "rgba(22, 22, 22, 0.90)",
            fontSize: "25px",
            fontWeight: 400,
          }}
        >
          {number}
          {". "}
          {question?.text}
        </Typography>
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            onClick={() => {}}
            type="submit"
            sx={{
              borderRadius: " 0px 8px 8px 0px",
              backgroundColor: "#186F65",
              color: "rgba(255, 255, 255, 0.90)",
              width: "100px",
              height: "110px",
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
      <div style={{ position: "absolute", right: "-30px", top: "40px" }}>
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
      </div>
      {/* More option :end */}
    </Box>
  );
}