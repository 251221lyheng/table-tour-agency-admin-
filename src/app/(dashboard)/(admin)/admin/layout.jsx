import { Poppins } from "next/font/google";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";


const poppins = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
export const metadata = {
  title: "Jalat",
  description: "Jalat Travel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
