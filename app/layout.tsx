import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    images: [
      {
        url: "/assets/project-overview.png",
        width: 1200,
        height: 630,
        alt: "projectBg",
      },
    ],
  },
  metadataBase: new URL("https://khasherdene.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "system",
            enableSystem: true,
            disableTransitionOnChange: true
          }}
        >
          <div className="relative flex min-h-screen flex-col bg-background py-6 md:px-8 md:py-0">
            <Navbar/>
            <main className="flex-1 px-7">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
