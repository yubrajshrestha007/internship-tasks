import { Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
// import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        {children}

      </body>
    </html>
  );
}
