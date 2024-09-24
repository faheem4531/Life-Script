import Head from "next/head";
import { useRouter } from "next/router";

import Thankyou from "@/components/webComponents/Thankyou";

const UpgradeBasic = () => {
  const router = useRouter();

  function handleRoutes() {
    const auth = router.query.auth || '';
    
    if (auth === "auto") {
      const userName = localStorage.getItem("username");
      router.push(`/getStarted/getTitle?userName=${userName}`);
    } else {
      router.push('/_auth/Auth');
    }
  }

  return (
    <>
      <Head>
        <title>Thank You For Your Gift Purchase</title>
      </Head>
      <Thankyou
        onClick={handleRoutes}
        head1={"THANK YOU FOR"}
        head2={"YOUR PURCHASE!"}
        typo1={"You’ve purchased the Basic Plan."}
        typo2={"A confirmation email will be sent shortly."}
      />
    </>
  )
}

export default UpgradeBasic