import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"

export default async function IndexPage() {

    return (
        <>
            <Hero />
            <Features />
        </>
    )
}