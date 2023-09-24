import "./globals.css";

import { Poppins } from "next/font/google";
import { twMerge } from "tailwind-merge";

import MainHeader from "@/components/header/main-header";

export const metadata = {
  title: "CodeXn - Your Website, Your Way",
  description:
    "CodeXn is a website development agency. We build user experiences that bring customers and drive traffic to your website."
};

const ubuntu = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={twMerge("overflow-x-hidden", ubuntu.className)}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
