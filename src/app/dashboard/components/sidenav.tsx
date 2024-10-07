'use client'
import * as React from "react"

import Link from "next/link"
import clsx from "clsx"
import { usePathname } from "next/navigation"

import {
  Home,
  LineChart,
  CircleUser,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users2,
  BookText,
  CircleDollarSign
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const links = [
  {
    id: 1,
    name: 'Dashboard',
    href: '/dashboard',
    icon: Home,
  },
  {
    id: 2,
    name: 'Services',
    href: '/dashboard/services',
    icon: ShoppingCart,
  }, 
  {
    id: 3,
    name: 'History',
    href: '/dashboard/history',
    icon: BookText,
  }, 
  {
      id: 4,
      name: 'Payments',
      href: '/dashboard/payments',
      icon: CircleDollarSign,
  }, 
  {
    id: 5,
    name: 'Clients',
    href: '/dashboard/clients',
    icon: Users2,
  }, 
  {
    id: 6,
    name: 'Analytics',
    href: '/dashboard/analytics',
    icon: LineChart,
  }, 
]

export const description =
  "An orders dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. The main area has a list of recent orders with a filter and export button. The main area also has a detailed view of a single order with order details, shipping information, billing information, customer information, and payment information."

export const SideNav = () => {
  const pathname = usePathname()
  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          {
            links.map((link) => {
              const LinkIcon = link.icon
              return (
                <TooltipProvider key={link.id} >
                  <Tooltip>
                      <TooltipTrigger asChild>
                      <Link
                          href={link.href}
                          className={clsx(
                            "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                            {
                              "bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8": pathname === link.href
                            },
                          )}
                      >
                          <LinkIcon className={clsx("h-5 w-5", {"text-foreground": pathname === link.href})} />
                          <span className="sr-only">{link.name}</span>
                      </Link>
                      </TooltipTrigger>
                      <TooltipContent side="right">{link.name}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )
            })
          }
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/settings/"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="mt-auto p-4">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                    <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </aside>
    </div>
  )
}

export default SideNav;