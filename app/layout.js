import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Customer Support",
  description:
    "An AI-powered customer support chatbot using Next.js and the OpenAI API. Week 3 project of SWE fellowship at Headstarter AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
