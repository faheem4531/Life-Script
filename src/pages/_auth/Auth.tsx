import EmailVerification from "@/components/authComponent/EmailVerification";
import ForgetPassword from "@/components/authComponent/ForgetPassword";
import Register from "@/components/authComponent/Register";
import LetsStarted from "@/components/authComponent/LetsStarted";
import { Box } from "@mui/material";
import ForgetPasswordLink from "@/components/authComponent/ForgetPasswordLink";
import ResetPassword from "@/components/authComponent/ResetPassword";
import EmailVerificationLink from "@/components/authComponent/EmailVerificationLink";

export default function AuthPage() {
  return (
    <Box>
      <Register />  
      {/* <ForgetPassword/> */}
      {/* <ForgetPasswordLink/> */}
    {/* <EmailVerification/> */}
    {/* <EmailVerificationLink/> */}
    {/* <LetsStarted/> */}
    {/* <ResetPassword/> */}
    </Box>
  );
}
