//@ts-nocheck
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";  // Assure-toi que le chemin vers ton Prisma client est correct

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log("Missing email or password");
          throw new Error("Please enter an email and password");
        }

        // Recherche l'utilisateur dans la base de données
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          console.log(`No user found with email: ${credentials.email}`);
          throw new Error("No user found with this email");
        }

        // Vérification du mot de passe
        const passwordMatch = await bcrypt.compare(credentials.password, user.password);

        if (!passwordMatch) {
          console.log("Incorrect password");
          throw new Error("Incorrect password");
        }

        console.log("User authenticated:", user);

        // Retourner l'utilisateur et son rôle
        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name,
          role: user.role,  // Utiliser le rôle de l'utilisateur depuis la base de données
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Ajouter le rôle au token si l'utilisateur est authentifié
      if (user) {
        console.log('Adding role to JWT:', user.role);
        token.role = user.role;  // Attacher le rôle de l'utilisateur au token
      }
      console.log('JWT Token:', token);
      return token;
    },
    async session({ session, token }) {
      // Ajouter le rôle du token à la session
      if (session?.user) {
        session.user.role = token.role;
        console.log('Session user with role:', session.user);
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",  // Page de connexion personnalisée
  },
  session: {
    strategy: "jwt",  // Utilisation du JWT pour la gestion de session
  },
});

export { handler as GET, handler as POST };
