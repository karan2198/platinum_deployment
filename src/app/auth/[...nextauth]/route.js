import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: "864826304513-0lbbnu2nuj22tnpbab3qtsfgv2rlcord.apps.googleusercontent.com",
      clientSecret:  "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",
    }),
  ],
});

export { handler as GET, handler as POST };
