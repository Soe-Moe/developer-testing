import { eudox } from "@/lib/fonts";
import "@/styles/global.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";
import ApolloWrapper from "@/components/Apollo/ApolloWrapper";

export const metadata: Metadata = {
  title: process.env.APP_NAME,
  description: "Generated by create next app",
};

export const revalidate = 0;
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={eudox.className}>
        <ApolloWrapper>
          <Header />
          {children}
          <Footer />
          <MobileMenu />
        </ApolloWrapper>
      </body>
    </html>
  );
}