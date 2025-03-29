import "@/styles/globals.css";
import { Metadata } from "next";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
    >
      <head />
      <body className={`min-h-screen bg-background font-sans antialiased ${fontSans.variable} light`}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light", enableSystem: false }}>
          <div className="max-w-4xl bg-pink-100 m-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
