import { Inter } from "next/font/google";
import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "created by Rahul Aggarwal",
}

export default function RootLayout({ children }: any) {
  return (
    <html lang="en" >
      <body className={inter.className}> {children}</body>
    </html >
  )
}