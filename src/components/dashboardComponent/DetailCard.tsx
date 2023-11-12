"use client";

import More from "@/_assets/png/options.png";
import Tick from "@/_assets/svg/checked.svg";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import PropTypes from "prop-types";
import * as React from "react";
import styles from "./HomeSteps.module.css";

const options = ["None", "Atria", "Callisto"];

const ITEM_HEIGHT = 48;
export default function DetailCard({ chapter }: { chapter?: any }) {
  const questions = chapter?.questions;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card
      sx={{ borderRadius: "6.5px", maxHeight: "382px", minHeight: "300px" }}
    >
      <div
        style={{ backgroundColor: "#197065", padding: "25px 17px 25px 17px" }}
        className={styles.header}
      >
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Image alt="options" src={More} />
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
              width: "20ch",
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
      <CardContent>
        <Typography
          variant="body2"
          color="text "
          fontWeight="600"
          fontSize="19px"
          textAlign="center"
        >
          {chapter?.title}
        </Typography>
        <Divider
          sx={{
            width: "245px",
            backgroundColor: "#000",
            height: "2px",
            margin: "9px auto 0",
            marginBottom: "30px",
          }}
        />
        {questions?.slice(0, 5).map((question) => (
          <Typography
            key={question._id}
            display="flex"
            alignItems="center"
            columnGap="10px"
            color="rgba(22, 22, 22, 0.90)"
            fontSize="13px"
            marginTop="5px"
          >
            <Image alt="check" src={Tick} />
            {question.text}
          </Typography>
        ))}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "15px",
          }}
        >
          <Typography color="rgba(22, 22, 22, 0.90)" fontSize="11px">
            Last Edited 3 Days Ago
          </Typography>
          <CircularWithValueLabel />
        </Box>
      </CardContent>
    </Card>
  );
}

// Progress Bar code
function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress color="success" variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="#197065">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

function CircularWithValueLabel() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}
