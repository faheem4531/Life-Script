import Counter from "@/components/dashboardComponent/QuantityInput";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectCoverData } from "@/store/slices/chatSlice";
import { useEffect, useState } from "react";

const ShippingCard = ({ setCount, setPayment, count, QuantityCheck = false, amount, quantity }) => {
  const coverData = useSelector(selectCoverData);
  const { t } = useTranslation();
  const [remainingCredits, setRemainingCredits] = useState(quantity);

  useEffect(() => {
    const totalCost = count * 39;
    if (amount >= totalCost) {
      setPayment(0);
    } else {
      setPayment(totalCost - amount);
    }

    const newRemainingCredits = quantity - count;
    setRemainingCredits(newRemainingCredits >= 0 ? newRemainingCredits : 0);
  }, [count, amount, quantity, setPayment]);

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
          mb: "30px",
          color: "#30422E",
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
          mt: { md: "57px", sm: "40px", xs: "20px" },
          width: "80%",
          m: "auto",
        }}
      >
        <Box
          sx={{
            fontSize: { md: "18.752px", sm: "16.752px", xs: "14px" },
            display: "flex",
            justifyContent: "space-between",
            pb: "8px",
          }}
        >
          <Typography sx={{ color: "#30422E" }}> {t("Book Credit")}</Typography>
          <Typography sx={{ color: "#30422E" }}>{remainingCredits}</Typography>
        </Box>
        <Box
          sx={{
            fontSize: { md: "18.752px", sm: "16.752px", xs: "14px" },
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
            fontSize: { md: "18.752px", sm: "16.752px", xs: "14px" },
            display: "flex",
            justifyContent: "space-between",
            mt: "5px",
          }}
        >
          <Typography sx={{ color: "#30422E" }}> {t("shippingPage.price")}</Typography>
          <Typography sx={{ color: "#30422E" }}>{count * 39 - Math.min(amount, count * 39)} $</Typography>
        </Box>
        {!QuantityCheck && (
          <Box
            sx={{
              fontSize: { md: "18.752px", sm: "16.752px", xs: "14px" },
              display: "flex",
              justifyContent: "space-between",
              borderTop: "1.2px solid #DCDCDC",
              pb: "8px",
              pt: "5px",
            }}
          >
            <Typography sx={{ color: "#30422E" }}> {t("shippingPage.total")}</Typography>
            <Typography sx={{ color: "#30422E" }}>{Math.max(count * 39 - amount, 0)} $</Typography>
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
