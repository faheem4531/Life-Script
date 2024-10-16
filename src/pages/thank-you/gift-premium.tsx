import Head from "next/head";
import { useRouter } from "next/router";

import Thankyou from "@/components/webComponents/Thankyou";

const GiftPremium = () => {
  const router = useRouter();

  function handleRoutes() {
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Thank You For Your Gift Purchase</title>
      </Head>
      <Thankyou
        onClick={handleRoutes}
        head1={"THANK YOU FOR"}
        head2={"YOUR GIFT PURCHASE!"}
        typo1={`You’ve gifted the Premium Plan.`}
        typo2={"The recipient will receive their gift on the scheduled date."}
      />
    </>
  )
}

export default GiftPremium