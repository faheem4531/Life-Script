// import NextAuth from "next-auth";
// import FacebookProvider from "next-auth/providers/facebook";

// export default NextAuth({
//   secret: "9Cg2vk+Rw31F0NJ/QDCr1JTA0NZoBaMWpW9uqNdSXwc=",
//   providers: [
//     FacebookProvider({
//       // clientId: "1076442010181556",
//       // clientSecret: "d1c2f79cf4c2eb1140b40fb3ec4defac",
//       // clientId: "1312964509404401",
//       // clientSecret: "40973a1ce353c433ef815f0ad9d5442f",

//       //latest
//       clientId: "740306394918022",
//       clientSecret: "e9b0bbbdda592c638e763c5ba787fd55",
//     }),
//   ],
// });

import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';

const options = {
  providers: [
    FacebookProvider({
      clientId: "740306394918022",
      clientSecret: "e9b0bbbdda592c638e763c5ba787fd55",
    }),
  ],
}

export default (req, res) => NextAuth(req, res, options)
