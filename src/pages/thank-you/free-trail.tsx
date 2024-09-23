import Thankyou from "@/components/webComponents/Thankyou";
import Head from "next/head";
import { useRouter } from "next/router";

const FreeTrail = () => {
  const router = useRouter();

  function handleRoutes() {
    const auth = router.query.auth || '';
    const userName = localStorage.getItem("username");

    if (auth === 'google') {
      router.push(`/getStarted/getTitle?userName=${userName}`);
    } else {
      router.push('/_auth/Auth');
    }
  }

  return (
    <>
      <Head>
        <title>Welcome to Free Trial</title>
      </Head>
      <Thankyou
        onClick={handleRoutes}
        head1={"WELCOME TO THE"}
        head2={"7-DAY FREE TRIAL!"}
        typo1={"You’ve gifted the Basic Plan."}
        typo2={"The recipient will receive their gift on the scheduled date."} />
    </>
  )
}

export default FreeTrail