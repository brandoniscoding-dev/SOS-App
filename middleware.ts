import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;

    // Log pour voir si le token est présent
    console.log("Token:", token);

    // Si le token n'existe pas et que la page n'est pas de connexion, rediriger
    if (!token) {
      // Accès à la page de connexion sans token
      if (req.nextUrl.pathname.startsWith("/auth/signin")) {
        console.log("User not authenticated, accessing sign-in page.");
        return NextResponse.next();
      }

      // Rediriger l'utilisateur vers la page de connexion
      console.log("User not authenticated, redirecting to /auth/signin");
      return NextResponse.redirect(new URL("/auth/signin", req.url));
    }

    // Vérification des rôles
    const isAdmin = token?.role === "ADMIN";
    const isModerator = token?.role === "MODERATOR";

    // Log pour voir les informations sur le rôle
    console.log("User role:", token?.role);

    // Si l'utilisateur n'est ni Admin ni Moderator et essaie d'accéder au dashboard
    if (
      req.nextUrl.pathname.startsWith("/dashboard") &&
      !isAdmin && 
      !isModerator
    ) {
      console.log("User not authorized for /dashboard, redirecting to /auth/signin");
      return NextResponse.redirect(new URL("/auth/signin", req.url)); // Redirection vers login
    }

    // Si tout est OK, laisser passer la requête
    console.log("User authorized, proceeding to requested page.");
    return NextResponse.next();
  },
  {
    callbacks: {
      // Autoriser l'accès uniquement si le token existe
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*"], // Applique ce middleware uniquement aux pages du dashboard
};
