import { DashboardConfig } from "@/types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [

    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: "billing",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
  sidebarAdminNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "post",
    },
    {
      title: "Users",
      href: "/admin-panel/users",
      icon: "user",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}
