import Thankyou from "@/components/webComponents/Thankyou"
import Head from "next/head"

const FreeTrail = () => {
  return (
    <>
      <Head>
        <title>Welcome to Free Trial</title>
      </Head>
      <Thankyou
        route={"/_auth/Auth"}
        head1={"WELCOME TO THE"}
        head2={"7-DAY FREE TRIAL!"}
        typo1={"You’ve gifted the Basic Plan."}
        typo2={"The recipient will receive their gift on the scheduled date."} />
    </>
  )
}

export default FreeTrail