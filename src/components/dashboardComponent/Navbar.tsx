import NavMenu from "@/_assets/svg/nav-menu.svg";
import More from "@/_assets/svg/nav-menue.svg";
import Search from "@/_assets/svg/searchbar.svg";
import {
  getChapterNotifications,
  readNotification,
  selectChapterNotification,
} from "@/store/slices/chatSlice";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Box, InputBase } from "@mui/material";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Navbar.module.css";
import Step1 from "@/_assets/svg/smallBook.svg";

const options = ["Logout"];
const ITEM_HEIGHT = 48;

const NavBar = ({ sideBarHandle }: { sideBarHandle?: () => void }) => {
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
  const allNotifications = useSelector(selectChapterNotification);
  const [moreAnchorEl, setMoreAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const router = useRouter();
  const dispatch: any = useDispatch();

  useEffect(() => {
    allNotifications && setNotifications(allNotifications);
  }, [allNotifications]);

  const handleNotificationNavigate = (notification) => {
    dispatch(readNotification({ id: notification?._id, isRead: true }))
      .unwrap()
      .then(() => {
        dispatch(getChapterNotifications());
        router.push(
          `/dashboard/narrative?chapterId=${notification?.chapter}&openai=true`
        );
      });
  };

  const handleNotificationClick = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationAnchorEl(null);
  };

  const handleMoreClick = (event) => {
    setMoreAnchorEl(event.currentTarget);
  };

  const handleMoreClose = () => {
    setMoreAnchorEl(null);
  };

  const handleClickOption = (option) => {
    if (option === "Logout") {
      // dispatch(logout());
      localStorage.clear();
      router.push("/");
    }
    handleMoreClose();
  };

  let buttonsHide;
  if (router.asPath === "/dashboard/overview") {
    buttonsHide = true;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: { md: "#197065", sm: "#fff", xs: "#fff" },
        padding: "0 14px",
        height: "70px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{ display: { xs: "block", sm: "block", md: "none" } }}
          onClick={sideBarHandle}
        >
          <Image src={NavMenu} alt="logo" />
        </Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "0 20px 0 6px",
            border: "1px solid #197065",
            width: "300px",
            display: "flex",
            alignItems: "center",
            margin: "0 auto",
            borderRadius: "15px",
            marginLeft: "10px",
          }}
          className={styles.searchBox}
        >
          <Image src={Search} alt="logo" />
          <InputBase
            sx={{
              fontFamily: "sans-serif",
              backgroundColor: "#fff",
              width: "100%",
              paddingLeft: "5px",
              opacity: ".6",
              fontSize: "16px",
            }}
            placeholder="Search"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Notification Icon */}
          <IconButton
            aria-label="notifications"
            color="inherit"
            onClick={handleNotificationClick}
          >
            <Badge badgeContent={notifications?.length} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* Notification List */}

          <Menu
            anchorEl={notificationAnchorEl}
            open={Boolean(notificationAnchorEl)}
            onClose={handleNotificationClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 3.5,
                width: "260px",
                overflowY: "auto",
                background: "transparent",
                boxShadow: "0px",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                "&:after": {
                  content: '""',
                  width: "10px",
                  height: "10px",
                  borderBottom: "0.917px solid #197065",
                  borderLeft: "0.917px solid #197065",
                  position: "absolute",
                  right: " 50.5px",
                  top: "-5px",
                  transform: "rotate(135deg)",
                  zIndex: "1",
                  bgcolor: "white",
                },
                bgcolor: "white"
              }}
            >
              {notifications.map((notification, index) => (
              <MenuItem
                key={index}
                onClick={() => handleNotificationNavigate(notification)}
                sx={{
                  bgcolor: "white",
                  borderBottom: "1.5px solid gray",
                  "&:hover": {
                    background: "white"
                  }
                }}
              >
                <Box sx={{
                  display: "flex",
                  alignItems: "start",
                  gap: "10px",
                }}>
                  <Box>
                    <Image alt="icon" src={Step1} style={{
                      width: "18px"
                    }} />
                  </Box>
                  <Box  sx={{
                    whiteSpace: "wrap",
                    fontSize: "12px",
                    mt: "5px"
                  }}>Your chapter {notification.title} is fused.
             Click to view</Box>
                </Box>

              </MenuItem>
            ))}
              {notifications.length === 0 && (
              <MenuItem sx={{
                bgcolor: "white",
                borderBottom: "1.5px solid gray",
                "&:hover": {
                  background: "white"
                }
              }}>
               <Box sx={{
                  display: "flex",
                  alignItems: "start",
                  gap: "10px",
                }}>
                  <Box>
                    <Image alt="icon" src={Step1} style={{
                      width: "18px"
                    }} />
                  </Box>
                  <Box sx={{
                    whiteSpace: "wrap",
                    fontSize: "12px",
                    mt: "5px"
                  }}>No Notifications. </Box>

                </Box>
              </MenuItem>
             )}
            </Box>
          </Menu>
          {/* More option :start */}
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={moreAnchorEl ? "long-menu" : undefined}
            aria-expanded={moreAnchorEl ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleMoreClick}
          >
            <Image alt="options" src={More} />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={moreAnchorEl}
            open={Boolean(moreAnchorEl)}
            onClose={handleMoreClose}
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
                onClick={() => handleClickOption(option)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
          {/* More option :end */}
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
