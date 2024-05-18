import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-3xl mx-auto">
          <NavBar />
          <div className="mt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}