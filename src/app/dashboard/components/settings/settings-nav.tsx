'use client'

import Link from "next/link"
import clsx from "clsx"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

interface Link {
    id: number;
    name: string;
    href: string;
  }
  
const links: Link[] = [
    {
      id: 1,
      name: 'General',
      href: "/dashboard/settings"
    },
    {
      id: 2,
      name: 'Payments',
      href: "/dashboard/settings/payments"
    },
    {
      id: 3,
      name: 'Service Type',
      href: "/dashboard/settings/service-type"
    }
]

export const SettingsNav = () => {
    const pathname = usePathname()
    return (
        <nav
            className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0"
          >
            {
              links.map((link:Link) => {
                return (
                  <Link key={link.id} href={link.href} className={clsx(
                    "transition-colors hover:text-foreground",
                    {
                      "text-accent-foreground transition-colors hover:text-foreground": pathname === link.href
                    },
                  )}>
                    {link.name}
                  </Link>
                )
              })
            }
          </nav>
    )
}
    