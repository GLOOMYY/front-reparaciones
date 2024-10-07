'use client'

import * as React from "react"
import { usePathname } from 'next/navigation';
import { capitalize } from "@/lib/utils"
import Link from "next/link"
import clsx from "clsx"


import {
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  ShoppingCart,
  Users2,
  Settings,
  BookText,
  CircleDollarSign,
} from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

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
    {
        id: 7,
        name: 'Settings',
        href: '/dashboard/settings',
        icon: Settings,
    },
  ]

export const Header = () => {
    const pathname = usePathname()
    const pathSegments = pathname.split('/').filter(Boolean); // Divide el pathname y elimina cualquier valor vacío


    return (
        <header className="sticky top-0 z-30 flex h-14 p-2 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
                <nav className="grid gap-6 text-lg font-medium">
                <Link
                    href="#"
                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                    <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                {
                    links.map((link) => {
                        const LinkIcon = link.icon
                        return (
                            <Link
                            key = {link.id}
                            href={link.href}
                            className={clsx(
                                "flex items-center gap-4 px-2.5 text-muted-foreground rounded-lg transition-colors hover:text-foreground",
                                {
                                  "text-black text-accent-foreground": pathname === link.href
                                },
                              )}
                        >
                            <LinkIcon className="h-5 w-5" />
                            {link.name}
                        </Link>
                        )
                    })
                }
                </nav>
            </SheetContent>
            </Sheet>
            <Breadcrumb className="hidden md:flex">
              <BreadcrumbList>
                {pathSegments.map((segment, index) => {
                  const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
                  const isLast = index === pathSegments.length - 1;

                  return (
                    <React.Fragment key={href}> {/* Usamos React.Fragment y le damos la clave al Fragment */}
                      <BreadcrumbItem>
                        {isLast ? (
                          <span className=" text-accent-foreground">
                            {capitalize(segment)}
                          </span>
                        ) : (
                          <BreadcrumbLink asChild>
                            <Link href={href}>{capitalize(segment)}</Link>
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                      {!isLast && <BreadcrumbSeparator key={`separator-${index}`} />} {/* Añadimos la key al separador */}
                    </React.Fragment>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
        </header>
    )
}

export default Header