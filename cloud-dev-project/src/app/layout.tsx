import "@/src/styles/global.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import ThemeRegistry from "./ThemeRegistry";
import Providers from "@/src/utils/provider";

require("dotenv").config();

const JetBrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DEV BLOG",
  description: "",
  icons:{icon:['/favicon.ico?v=4'],},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en">
      <body suppressHydrationWarning={true} className={JetBrains.className}>
        <ThemeRegistry options={{ key: "mui" }}>
            <Providers>{children}</Providers>
        </ThemeRegistry>
      </body>
    </html>
  );
}
