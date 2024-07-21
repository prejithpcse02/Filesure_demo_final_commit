import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
//import Image from "next/legacy/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Company - Demo Company",
  description: "User centric excellence: App Development Service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main gray-back">
          {/*<div className="gray-back" />*/}
          <div className="max-lg:hidden w-[46.5%] h-full absolute top-0 right-0">
            <Image
              src="/images/Frame_final.svg"
              alt="Frame"
              width={750}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <main className="app absolute top-0">{children}</main>
      </body>
    </html>
  );
}
