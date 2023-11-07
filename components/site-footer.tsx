import * as React from "react"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
    return (
        <footer className={cn(className)}>
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <svg width="37.5" height="20" viewBox="0 0 360 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M360 144C360 170.51 338.51 192 312 192C285.49 192 264 170.51 264 144C264 117.49 285.49 96 312 96C338.51 96 360 117.49 360 144Z" fill="#c2def2" />
                        <path d="M312 96C312 149.019 269.019 192 216 192C162.981 192 120 149.019 120 96C120 42.9807 162.981 4.67745e-06 216 4.67745e-06C269.019 4.67745e-06 312 42.9807 312 96Z" fill="#228fda" />
                        <path d="M192 120C192 159.765 159.765 192 120 192C80.2355 192 48 159.765 48 120C48 80.2355 80.2355 48 120 48C159.765 48 192 80.2355 192 120Z" fill="#5fa8db" />
                        <path d="M96 144C96 170.51 74.5097 192 48 192C21.4903 192 0 170.51 0 144C0 117.49 21.4903 96 48 96C74.5097 96 96 117.49 96 144Z" fill="#95c6e8" />
                    </svg>
                    <p className="text-center text-sm leading-loose md:text-left">
                        Follow us{" "}
                        <a
                            href={siteConfig.links.twitter}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            {siteConfig.name}
                        </a>
                        .
                    </p>
                </div>
                <div className=""></div>
            </div>
        </footer>
    )
}