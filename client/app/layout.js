import "./globals.css";
import { Montserrat } from "@next/font/google";
import { AnalyticsWrapper } from "@/main/Analytics";
import Navbar from "@/main/navbar";

const montserrat = Montserrat({
  weights: [400, 500, 600, 700],
  subsets: ["latin"],
  variable: "font--montserrat",
});

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
