import * as React from "react"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { FaXTwitter, FaDiscord, FaTiktok } from "react-icons/fa6";
import Link from "next/link";

const navigation = {
    other: [
        { name: "Blog", href: "/blog", status: true },
        { name: "Pricing", href: "/pricing", status: true },
        { name: "Chat", href: "/chat", status: true },
        { name: "Contact", href: "/contact", status: true },
        { name: "Terms", href: "/terms", status: true },
        { name: "Privacy", href: "/Privacy", status: true },
    ],
    social: [
        {
            name: "Twitter",
            href: siteConfig.links.twitter,
            icon: FaXTwitter,
        },
        {
            name: "Tiktok",
            href: "https://tiktok.com/@saastherapy",
            icon: FaTiktok,
        },
        {
            name: "Discord",
            href: "",
            icon: FaDiscord,
        },
    ],
};

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
    return (
        <footer className={cn("py-12", className)}>
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 space-y-4 md:space-y-0">
                <div>
                    <Link href="/" className="flex items-center space-x-2">
                        <svg width="37.5" height="20" viewBox="0 0 360 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M360 144C360 170.51 338.51 192 312 192C285.49 192 264 170.51 264 144C264 117.49 285.49 96 312 96C338.51 96 360 117.49 360 144Z" fill="#c2def2" />
                            <path d="M312 96C312 149.019 269.019 192 216 192C162.981 192 120 149.019 120 96C120 42.9807 162.981 4.67745e-06 216 4.67745e-06C269.019 4.67745e-06 312 42.9807 312 96Z" fill="#228fda" />
                            <path d="M192 120C192 159.765 159.765 192 120 192C80.2355 192 48 159.765 48 120C48 80.2355 80.2355 48 120 48C159.765 48 192 80.2355 192 120Z" fill="#5fa8db" />
                            <path d="M96 144C96 170.51 74.5097 192 48 192C21.4903 192 0 170.51 0 144C0 117.49 21.4903 96 48 96C74.5097 96 96 117.49 96 144Z" fill="#95c6e8" />
                        </svg>
                        <p className="font-bold inline-block text-xl">
                            <span className="text-primary">
                                SaaS
                            </span>{" "}
                            Therapy
                        </p>
                    </Link>
                    <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-4">
                        {navigation.social.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                target="_blank"
                                className="text-muted-foreground hover:text-muted-foreground/80"
                            >
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="grid max-w-xs flex-1 grid-cols-2 gap-x-4 gap-y-2 text-center">
                    {navigation.other.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="text-muted-foreground hover:text-muted-foreground/80 flex-shrink-0 text-sm"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="mx-auto mt-4 flex w-full container flex-wrap justify-center md:justify-between gap-4 px-8 md:mt-12 lg:mt-24">
                <p className="text-muted-foreground text-sm">
                    © {new Date().getFullYear()} Saas Therapy, Inc. All rights reserved.
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5">
                </div>
            </div>
        </footer>
    )
}