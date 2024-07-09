import Counter from "@/components/dashboardComponent/QuantityInput";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import HalfBook from "@/_assets/png/halfBook.png";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  
  selectCoverData,
  
} from "@/store/slices/chatSlice";

const ShippingCard = ({ setCount, setPayment, count, QuantityCheck = false, amount = 39 }) => {
  const coverData = useSelector(selectCoverData);

  setPayment(count * 39 - amount)
  const {t}= useTranslation();
  return (
    <Box
      sx={{
        width: { md: "393px", sm: "360px", xs: "100%" },
        bgcolor: "#FFFFFF",
        borderRadius: "10px",
        p: "28px 21px 40px 23px",
        m: { md: "0px", xs: "auto" },
      }}
    >
      <Typography
        sx={{
          fontSize: { md: "20px", sm: "16px", xs: "14px" },
          fontWeight: 400,
          textTransform: "uppercase",
          mb: "30px", color: "#30422E"
        }}
      >
      {t("shippingPage.orderSummary")}
      </Typography>
      <Box
        sx={{
          height: { md: "290px", sm: "260px", xs: "240px" },
          width: { md: "210px", sm: "220px", xs: "200px" },
          margin: "auto",
        }}
      >
        <Image
          src={coverData?.coverPagePhoto}
          width={100}
          height={100}
          alt="book"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <Box
        sx={{
          mt: {
            md: "57px",
            sm: "40px",
            xs: "20px",
          },
          width: "80%",
          m: "auto",
        }}
      >
        <Box
          sx={{
            fontSize: {
              md: "18.752px",
              sm: "16.752px",
              xs: "14px",
            },
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1.2px solid #DCDCDC",
            pb: "8px",
          }}
        >
          <Typography sx={{ color: "#30422E" }}> {t("shippingPage.quantity")}</Typography>
          <Typography sx={{ color: "#30422E" }}>{count}</Typography>
        </Box>
        <Box
          sx={{
            fontSize: {
              md: "18.752px",
              sm: "16.752px",
              xs: "14px",
            },
            display: "flex",
            justifyContent: "space-between",
            mt: "5px",
          }}
        >
          <Typography sx={{ color: "#30422E" }}> {t("shippingPage.price")}</Typography>
          <Typography sx={{ color: "#30422E" }}>{count * 39 - amount} $</Typography>
        </Box>
        {!QuantityCheck && (
          <Box
            sx={{
              fontSize: {
                md: "18.752px",
                sm: "16.752px",
                xs: "14px",
              },
              display: "flex",
              justifyContent: "space-between",
              borderTop: "1.2px solid #DCDCDC",
              pb: "8px",
              pt: "5px",
            }}
          >
            <Typography sx={{ color: "#30422E" }}> {t("shippingPage.total")}</Typography>
            <Typography sx={{ color: "#30422E" }}>{count * 39 - 39} $</Typography>
          </Box>
        )}
      </Box>

      {QuantityCheck && (
        <Box>
          <Box
            sx={{
              mt: { md: "40px", sm: "30px", xs: "20px" },
              textAlign: "center",
              mb: { md: "30px", sm: "20px", xs: "15px" },
            }}
          >
            <Typography
              sx={{ fontSize: { md: "18.752px", sm: "16px", xs: "14px" }, color: "#30422E" }}
            >
              {t("shippingPage.orderAdditionalBook")}
            </Typography>
          </Box>
          <Box
            sx={{
              mb: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Counter min={1} setCount={setCount} count={count} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ShippingCard;
