// "use client";

import { Inter} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AspireAI - AI Career Coach",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <ClerkProvider suppressHydrationWarning
    appearance={{
      baseTheme: "dark",
    }}>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-black text-foreground`}
      >
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          {/* header */}
          <Header/>

        <main className="min-h-screen">{children}</main>

        {/* footer */}
        <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-4 text-center  text-gray-300">
          <p>Made with 💌 by Aditya Raj</p>
        </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
