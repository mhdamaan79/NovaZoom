import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NovaZoom",
  description: "Video Calling App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          logoImageUrl: "/icons/novazoom-logo.svg",
          socialButtonsVariant: "iconButton",
        },
        variables: {
          colorText: "#FFF",
          colorPrimary: "#0E78F9",
          colorBackground: "#1C1F2E",
          colorInputBackground: "#252A41",
          colorInputText: "#FFF",
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.className} bg-white-2`}>
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
