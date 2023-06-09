import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "1074196211888-1nqfkk85lnrl9pdk0mj6crg43ht83b3a.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
});
