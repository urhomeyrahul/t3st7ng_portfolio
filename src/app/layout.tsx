import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Portfolio",
  description: "created by Rahul Aggarwal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
