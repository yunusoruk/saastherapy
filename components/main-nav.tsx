"use client"

import * as React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

import { MainNavItem } from "@/types"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { MobileNav } from "@/components/mobile-nav"
import { Command as Logo, X } from 'lucide-react'
import { Icons } from "./icons"
import Image from "next/image"

interface MainNavProps {
    items?: MainNavItem[]
    children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
    const segment = useSelectedLayoutSegment()
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

    return (
        <div className="flex gap-6 md:gap-10">
            <Link href="/" className="hidden items-center space-x-2 md:flex">
                <svg width="37.5" height="20" viewBox="0 0 360 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M360 144C360 170.51 338.51 192 312 192C285.49 192 264 170.51 264 144C264 117.49 285.49 96 312 96C338.51 96 360 117.49 360 144Z" fill="#c2def2" />
                    <path d="M312 96C312 149.019 269.019 192 216 192C162.981 192 120 149.019 120 96C120 42.9807 162.981 4.67745e-06 216 4.67745e-06C269.019 4.67745e-06 312 42.9807 312 96Z" fill="#228fda" />
                    <path d="M192 120C192 159.765 159.765 192 120 192C80.2355 192 48 159.765 48 120C48 80.2355 80.2355 48 120 48C159.765 48 192 80.2355 192 120Z" fill="#5fa8db" />
                    <path d="M96 144C96 170.51 74.5097 192 48 192C21.4903 192 0 170.51 0 144C0 117.49 21.4903 96 48 96C74.5097 96 96 117.49 96 144Z" fill="#95c6e8" />
                </svg>
                <p className="hidden font-bold sm:inline-block text-xl  ">
                    <span className="text-primary">
                        SaaS
                    </span>{" "}
                    Therapy
                </p>
            </Link>
            {items?.length ? (
                <nav className="hidden gap-6 md:flex">
                    {items?.map((item, index) => (
                        <Link
                            key={index}
                            href={item.disabled ? "#" : item.href}
                            className={cn(
                                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                                item.href.startsWith(`/${segment}`)
                                    ? "text-foreground"
                                    : "text-foreground/60",
                                item.disabled && "cursor-not-allowed opacity-80"
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
            ) : null}
            <button
                className="flex items-center space-x-2 md:hidden"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
                {showMobileMenu
                    ?
                    <X />
                    :
                    <svg width="37.5" height="20" viewBox="0 0 360 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M360 144C360 170.51 338.51 192 312 192C285.49 192 264 170.51 264 144C264 117.49 285.49 96 312 96C338.51 96 360 117.49 360 144Z" fill="#c2def2" />
                        <path d="M312 96C312 149.019 269.019 192 216 192C162.981 192 120 149.019 120 96C120 42.9807 162.981 4.67745e-06 216 4.67745e-06C269.019 4.67745e-06 312 42.9807 312 96Z" fill="#228fda" />
                        <path d="M192 120C192 159.765 159.765 192 120 192C80.2355 192 48 159.765 48 120C48 80.2355 80.2355 48 120 48C159.765 48 192 80.2355 192 120Z" fill="#5fa8db" />
                        <path d="M96 144C96 170.51 74.5097 192 48 192C21.4903 192 0 170.51 0 144C0 117.49 21.4903 96 48 96C74.5097 96 96 117.49 96 144Z" fill="#95c6e8" />
                    </svg>
                }
                <span className="font-bold">Menu</span>
            </button>
            {showMobileMenu && items && (
                <MobileNav items={items}>{children}</MobileNav>
            )}
        </div>
    )
}