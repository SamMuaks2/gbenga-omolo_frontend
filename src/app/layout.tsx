import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gbenga Omole",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50">{children}</body>
    </html>
  );
}
