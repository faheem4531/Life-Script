import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  secret: "9Cg2vk+Rw31F0NJ/QDCr1JTA0NZoBaMWpW9uqNdSXwc=",
  providers: [
    FacebookProvider({
      clientId: "1076442010181556",
      clientSecret: "d1c2f79cf4c2eb1140b40fb3ec4defac",
    }),
  ],
});
