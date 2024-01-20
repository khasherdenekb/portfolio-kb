import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import Footer from "@/components/footer/footer";
import previewImg from "@/public/assets/project-overview.png";

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
  metadataBase: new URL(previewImg?.src),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="" lang="en" suppressHydrationWarning>
      <head />
      <body className={clsx("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "system",
            enableSystem: true,
          }}
        >
          <main className="container  py-6 mx-auto max-w-6xl 2xl:max-w-7xl xs-device">
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
