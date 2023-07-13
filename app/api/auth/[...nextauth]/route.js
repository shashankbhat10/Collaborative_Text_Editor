import { firestore } from "@/firebase";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";
// import {} from "next-auth/f"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code",
      //   },
      // },
    }),
  ],
  // adapter: FirestoreAdapter(),
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY
        ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/gm, "\n")
        : undefined,
    }),
  }),
  // adapter: FirestoreAdapter(firestore),
  // session: { strategy: "jwt" },
  // debug: true,
};

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       // authorization: {
//       //   params: {
//       //     prompt: "consent",
//       //     access_type: "offline",
//       //     response_type: "code",
//       //   },
//       // },
//     }),
//   ],
//   // adapter: FirestoreAdapter(),
//   adapter: FirestoreAdapter({
//     credential: cert({
//       projectId: process.env.FIREBASE_PROJECT_ID,
//       clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//       privateKey: process.env.FIREBASE_PRIVATE_KEY
//         ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/gm, "\n")
//         : undefined,
//     }),
//   }),
//   // adapter: FirestoreAdapter(firestore),
//   session: { strategy: "jwt" },
//   // debug: true,
// });

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
