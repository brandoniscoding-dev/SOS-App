import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SOS- Anonymous Crime Reporting",
  description: "Securely and anonymously report crimes to law enforcement",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen bg-black selection:bg-sky-500/20">
          {/* Gradient Background */}
          <div className="fixed inset-0 -z-10 min-h-screen">
            <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_50%)]" />
            <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.04),transparent_70%)]" />
          </div>
          <Navbar />
          <main className="pt-16">
            <Providers>{children}</Providers>
          </main>

          <footer className="bg-zinc-900 py-16">
            <div className="mx-auto max-w-5xl px-6 text-center text-zinc-400">
              <div className="mb-10">
                <h2 className="text-2xl font-semibold text-white">Stay Connected</h2>
                <p className="mt-4 text-sm">
                  Reporting made simple and anonymous. We are committed to your safety and security.
                </p>
              </div>
              
              {/* Liens utilisateurs */}
              <div className="flex flex-wrap justify-center gap-8 mb-10">
                <Link href="/submit-report" className="text-sm font-medium text-sky-400 hover:text-sky-500">Submit Report</Link>
                <Link href="/track-report" className="text-sm font-medium text-sky-400 hover:text-sky-500">Track Report</Link>
                <Link href="/how-it-works" className="text-sm font-medium text-sky-400 hover:text-sky-500">How It Works</Link>
                <Link href="/resources" className="text-sm font-medium text-sky-400 hover:text-sky-500">Resources</Link>
                <Link href="/map" className="text-sm font-medium text-sky-400 hover:text-sky-500">Map</Link>
              </div>
              
              {/* Liens pour les organismes */}
              <div className="border-t border-zinc-700 pt-10 mt-10">
                <div className="flex justify-center gap-8">
                  <Link href="auth/signin" className="text-sm font-medium text-white hover:text-sky-500">Sign In</Link>
                  <Link href="/dashboard" className="text-sm font-medium text-white hover:text-sky-500">Dashboard</Link>
                </div>
              </div>
              
              {/* Footer Info */}
              <div className="mt-10 text-sm text-zinc-500">
                <p>© 2024 Your Platform. All Rights Reserved.</p>
              </div>
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}
