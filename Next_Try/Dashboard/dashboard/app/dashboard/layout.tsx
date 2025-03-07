// app/layout.tsx
"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "next-themes";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import SearchBar from "@/components/ui/searchBar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { ModeToggle } from "@/components/ui/modeToggler";
import { AppSidebar } from "@/components/app-sidebar";
import { ClientQueryProvider } from "@/components/clientQueryProvider"; // Import the new component
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
//   const isRegisterPage = pathname === "/register";
  const isSignUpPage = pathname === "/register";


  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {isLoginPage || isSignUpPage ? (
              // Render only children for the login page (no sidebar)
              <>{children}</>
            ) : (
              // Render sidebar and other components for other pages
              <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                  <header className="flex my-5 h-20 shrink-0  items-center gap-5 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 justify-between">
                    <div className="flex items-center gap-2 px-4">
                      <SidebarTrigger className="-ml-1" />
                      <ModeToggle />
                      <Separator orientation="vertical" className="mr-2 h-4" />

                      <Breadcrumb>
                        <BreadcrumbList>
                          <BreadcrumbItem className="hidden md:block">
                            <BreadcrumbLink href="#">
                              Building
                            </BreadcrumbLink>
                          </BreadcrumbItem>
                          <BreadcrumbSeparator className="hidden md:block" />
                          <BreadcrumbItem>
                            <BreadcrumbPage>Overview</BreadcrumbPage>
                          </BreadcrumbItem>
                        </BreadcrumbList>
                      </Breadcrumb>
                    </div>
                    <div className="flex items-center justify-end gap-3 px-3 my-2">
                      <SearchBar />
                    </div>
                  </header>
                  {children}
                </SidebarInset>
              </SidebarProvider>
            )}
          </ThemeProvider>
        </ClientQueryProvider>
      </body>
    </html>
  );
}
