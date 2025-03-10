"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  GalleryVerticalEnd,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
// import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "yubraj",
    email: "m@example.com",
    avatar: "",
  },
  teams: [
    {
      name: "BOOK Store",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    }],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
    //   isActive: false,
    },
    {
      title: "Product",
      url: "/dashboard/Product",
      icon: Bot,
    },
    {
      title: "Orders",
      url: "/dashboard/order-items",
      icon: BookOpen,
    },
    {
      title: "test",
      url: "/dashboard/test",
      icon: Settings2,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
