import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import Footer from "@/components/footer/footer";

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
      <body className={clsx("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "system",
            enableSystem: true,
          }}
        >
          <main
            className="container relative h-full w-full  py-6 mx-auto max-w-[74rem] 2xl:max-w-[84rem]  xs-device 4xl:max-w-[100rem] xs:hidden
          "
          >
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
