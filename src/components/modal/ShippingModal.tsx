import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Checkbox from "@mui/material/Checkbox";
import { grey } from "@mui/material/colors";
import { useTranslation } from "react-i18next";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "100%", sm: "90%", md: "70%", lg: "60%" },
  bgcolor: "#F3ECDA",
  border: "2px solid #F3ECDA",
  p: 4,
  color: "gray",
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function ShippingModal({ open, setOpen, setSelectedTab }) {
    const { t } = useTranslation();

  const handleContinue = () => {
    setSelectedTab(3);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            
            sx={{ color: "#30422E", fontSize: { xs: "13px", sm: "15px",lg:"25px" } }}
          >
            {t("shippingModal.title")}
          </Typography>
          <Typography sx={{ mt: 2, fontSize: { xs: "10px", sm: "12px",md:"15px",lg:"17px" } }}>
          {t("shippingModal.info")}
          </Typography>
          <Typography
            sx={{ mt: 2, fontSize: { xs: "10px", sm: "12px",lg:"17px" } }}
            variant="body1"
          >
           {t("shippingModal.info2")}
          </Typography>
          <Box>
            <List>
              {[
                {
                  title: t("shippingModal.list1.title"),
                  description:t("shippingModal.list1.description")

                },
                {
                    title: t("shippingModal.list2.title"),
                    description:t("shippingModal.list2.description")
                },
                {
                    title: t("shippingModal.list3.title"),
                    description:t("shippingModal.list3.description")
                },
                {
                    title: t("shippingModal.list4.title"),
                    description:t("shippingModal.list4.description")
                },
                {
                    title: t("shippingModal.list5.title"),
                    description:t("shippingModal.list5.description")
                },
                {
                    title: t("shippingModal.list6.title"),
                    description:t("shippingModal.list6.description")
                },
              ].map((item, index) => (
                <ListItem key={index} sx={{ marginBottom: "0px", paddingY: "0px" }}>
                  <ListItemIcon sx={{ minWidth: "30px" }}>
                    <FiberManualRecordIcon
                      style={{ fontSize: 10, color: "gray" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        //   flexWrap: "wrap",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: { xs: "8px", sm: "10px",lg:"17px"},
                            fontWeight: "bold",
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          ml={"5px"}
                          variant="body1"
                          sx={{
                            fontSize: { xs: "8px", sm: "10px",lg:"17px" },
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
              ))}
            </List>
            <Typography
              sx={{ mt: 1, fontSize: { xs: "10px", sm: "12px",lg:"17px" } }}
              variant="body1"
            >
           {t("shippingModal.info3")}
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 3,
              width: "100%",
              border: "1px solid gray",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              padding: "4px",
            }}
          >
            <Checkbox
              sx={{
                backgroundColor: "transparent",
                "&.Mui-checked": {
                  color: grey[600],
                },
              }}
              {...label}
            />
            <Typography
              sx={{ fontSize: { xs: "10px", sm: "12px",lg:"17px" } }}
            >
              {t("shippingModal.info4")}
            </Typography>
          </Box>

          <Box
            mt={3}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              gap: 2,
            }}
          >
            <Button
              onClick={handleClose}
              sx={{
                width: { xs: "100px", sm: "125px" },
                color: "#E1683B",
                border: "1px solid #E1683B",
                bgcolor: "transparent",
              }}
            >
             {t("shippingModal.cancelBtn")}
            </Button>
            <Button
              onClick={handleContinue}
             
              sx={{
                width: { xs: "100px", sm: "125px" },
                backgroundColor: "#E1683B",
                color:"white",
                ":hover": {
                  backgroundColor: "#E1683B",
                },
              }}
            >
             {t("shippingModal.continueBtn")}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
