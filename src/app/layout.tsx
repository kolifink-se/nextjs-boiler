import type { Metadata } from "next";
import { headers } from "next/headers";
import { Orelega_One } from "next/font/google";
import { IBM_Plex_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const orelegaOne = Orelega_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orelega",
});

const ibmPlex = IBM_Plex_Sans_Devanagari({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "The Kolifink boiler.",
  description: "May the Kolifink be with you on your development journey!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nonce = headers().get("x-nonce");
  return (
    <html lang="en">
      <body
        className={`${orelegaOne.className} ${orelegaOne.variable} ${ibmPlex.className} ${ibmPlex.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
