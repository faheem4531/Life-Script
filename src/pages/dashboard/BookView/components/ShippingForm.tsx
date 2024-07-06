import InputWithLabel from "@/components/Input";
import { getLuluBalance, getLuluShipping, selectLuluData } from "@/store/slices/authSlice";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CountrySelect from "@/components/dashboardComponent/AutoComplete";
import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from "react-redux";

const ShippingForm = ({ onChange, data, setShippingDataId }) => {
  const { t } = useTranslation();
  const dispatch: any = useDispatch();
  const luluData = useSelector(selectLuluData);
  const [shippingData, setShippingData] = useState({
    email: "",
    city: "",
    country_code: "",
    name: "",
    phone_number: "",
    postcode: "",
    state_code: "",
    street1: "",
    apt:""
  });

  useEffect(() => {
    onChange(shippingData);
  }, [shippingData])

  useEffect(() => {
    data && setShippingData(shippingData);
  }, [data]);

  useEffect(() => {
    dispatch(getLuluShipping());
  }, []);

  useEffect(() => {
    if (luluData) {
      setShippingData((prevData) => ({
        ...prevData,
        email: luluData?.email,
        name: luluData?.name,
        country_code: luluData?.country_code,
        city: luluData?.city,
        phone_number: luluData?.phone_number,
        postcode: luluData?.postcode,
        state_code: luluData?.state_code,
        street1: luluData?.street1,
        apt:luluData?.apt
      }));
      setShippingDataId(luluData?._id);
    }
  }, [luluData])

  return (
    <Box
      sx={{
        flex: 1,
        p: { md: "30px 24px", sm: "25px 18px", xs: "20px 10px" },
        bgcolor: "#F8F6F9",
        borderRadius: "4px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <InputWithLabel
        color="#474E60"
        label={t("shippingPage.name")}
        value={shippingData?.name}
        onChange={(e) =>
          setShippingData((prevData) => ({
            ...prevData,
            name: e.target.value,
          }))
        }
        placeholder={t("shippingPage.name")}
        borderRadius="4px"
        bgColor="white"
        border="1px solid #30422E"
      />
      <InputWithLabel
        color="#474E60"
        label={t("shippingPage.email")}
        value={shippingData?.email}
        onChange={(e) =>
          setShippingData((prevData) => ({
            ...prevData,
            email: e.target.value,
          }))
        }
        placeholder={t("shippingPage.email")}
        borderRadius="4px"
        bgColor="white"
        border="1px solid #30422E"
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          flexDirection: { sm: "row", xs: "column" },
        }}
      >
        <Box flex={1} width={"100%"}>
          <InputWithLabel
            color="#474E60"
            label={t("shippingPage.city")}
            value={shippingData?.city}
            onChange={(e) =>
              setShippingData((prevData) => ({
                ...prevData,
                city: e.target.value,
              }))
            }
            placeholder={t("shippingPage.city")}
            borderRadius="4px"
            bgColor="white"
            border="1px solid #30422E"
          />
        </Box>

        <Box flex={1} width={"100%"}>
          <Typography
            sx={{
              fontSize: { xs: 12, sm: 14, md: 16, lg: 16 },
              color: " #30422E",
              mb: "5px",
            }}
          >
           {t("shippingPage.countryCode")}
          </Typography>
          <Box
            sx={{
              height: "56px",
              border: "1px solid #30422E",
              bgcolor: "white",
              borderRadius: "4px",
            }}
          >
            <CountrySelect
              value={shippingData?.country_code}
              stripe={true}
              backgroundColor="transparent"
              onSelect={(val) => {
                setShippingData((prevData) => ({
                  ...prevData,
                  country_code: val,
                }));
              }}
            />
          </Box>
        </Box>
      </Box>
      <InputWithLabel
        color="#474E60"
        label={t("shippingPage.phoneNumber")}
        placeholder={t("shippingPage.phoneNumber")}
        value={shippingData?.phone_number}
        onChange={(e) =>
          setShippingData((prevData) => ({
            ...prevData,
            phone_number: e.target.value,
          }))
        }
        borderRadius="4px"
        bgColor="white"
        border="1px solid #30422E"
        type="number"
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap",
          flexDirection: { sm: "row", xs: "column" },
        }}
      >
        <Box flex={1} width={"100%"}>
          <InputWithLabel
            color="#474E60"
            label={t("shippingPage.stateCode")}
            value={shippingData?.state_code}
            onChange={(e) =>
              setShippingData((prevData) => ({
                ...prevData,
                state_code: e.target.value,
              }))
            }
            placeholder={t("shippingPage.stateCode")}
            borderRadius="4px"
            bgColor="white"
            border="1px solid #30422E"
            type="text"
          />
        </Box>
        <Box flex={1} width={"100%"}>
          <InputWithLabel
            color="#474E60"
            label={t("shippingPage.postCode")}
            value={shippingData?.postcode}
            onChange={(e) =>
              setShippingData((prevData) => ({
                ...prevData,
                postcode: e.target.value,
              }))
            }
            placeholder={t("shippingPage.postCode")}
            borderRadius="4px"
            bgColor="white"
            border="1px solid #30422E"
            type="number"
          />
        </Box>
      </Box>
      <InputWithLabel
        color="#474E60"
        label={t("shippingPage.street")}
        value={shippingData?.street1}
        onChange={(e) =>
          setShippingData((prevData) => ({
            ...prevData,
            street1: e.target.value,
          }))
        }
        placeholder={t("shippingPage.street")}
        borderRadius="4px"
        bgColor="white"
        border="1px solid #30422E"
      />
      <InputWithLabel
        color="#474E60"
        label={t("shippingPage.apt")}
        value={shippingData?.apt}
        onChange={(e) =>
          setShippingData((prevData) => ({
            ...prevData,
            apt: e.target.value,
          }))
        }
        placeholder={t("shippingPage.apt")}
        borderRadius="4px"
        bgColor="white"
        border="1px solid #30422E"
      />
    </Box>
  );
};

export default ShippingForm;
