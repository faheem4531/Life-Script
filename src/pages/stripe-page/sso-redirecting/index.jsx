import { Box, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { facebookLogin } from "@/store/slices/authSlice";
import { useDispatch } from "react-redux";

const SsoRedirecting = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { data: session } = useSession();
    useEffect(() => {
        setLoading(true)
        if (session) {
          if (session.user) {
            const payload = {
              name: session.user.name,
              email: session.user.email
            };
            dispatch(facebookLogin(payload))
            .unwrap() 
            .then((res) => {
                setLoading(false)
              console.log("Res Console" ,res)
              toast.success(t("login with facebook"));
              router.push(`/getStarted/getTitle?userName=${res?.name}`); 
            })
            
            .catch((error) => {
                setLoading(false)
              toast.error(error.message);
            });
          }
        }
      }, [session, dispatch]);


  return <Box>{loading && <CircularProgress />}</Box>;
};

export default SsoRedirecting;
