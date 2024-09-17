import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import GrainEffect from "@/components/visualEffect/GrainEffect";
import Cursor from "@/components/visualEffect/Cursor";

const Bricolage = Bricolage_Grotesque({ subsets: ["latin"],weight:["200","300"] });

export const metadata: Metadata = {
  title: "Mebrouki Amine",
  description: "Mebrouki Amine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(Bricolage.className,"bg-[#020c06] relative")}>
        <div className="absolute w-96 h-96 bg-green-900/30 -top-6 -left-11 mix-blend-screen rounded-full blur-3xl"></div>
        <Cursor color="white" />
        <GrainEffect />
        {children}
        </body>
    </html>
  );
}
