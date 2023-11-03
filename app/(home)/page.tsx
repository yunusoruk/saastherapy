import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default async function IndexPage() {

    return (
        <>
            <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
                <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
                    <Link
                        href={siteConfig.links.twitter}
                        className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
                        target="_blank"
                    >
                        Follow along on X
                    </Link>
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Comprehensive solution for mental health support.
                    </h1>
                    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        Whether you&apos;re a psychology student looking to hone your skills or someone in need of a compassionate ear, our innovative platform offers the ideal space to connect, learn, and grow.
                    </p>
                    <div className="space-x-4">
                        <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
                            Get Started
                        </Link>
                        {/* <Link
                            href={siteConfig.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                        >
                            GitHub
                        </Link> */}
                    </div>
                </div>
            </section>
            <section
                id="features"
                className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        Why Choose SaaS Therapy?
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        At SaaS Therapy, we bring together advanced technology and a commitment to mental well-being.
                        With our innovative approach, you can practice, learn, and seek support, all within a secure and judgment-free environment.
                    </p>
                </div>
                <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                        <div className="flex lg:h-[300px] flex-col justify-between rounded-md p-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                                <rect width="18" height="18" x="3" y="3" rx="2" />
                                <path d="M7 7v10" />
                                <path d="M11 7v10" />
                                <path d="m15 7 2 10" />
                            </svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">Practice and Learn</h3>
                                <p className="text-sm text-muted-foreground">
                                    Psychology students, here&apos;s your chance to gain valuable experience.
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Our AI-driven patient and psychologist companions provide a safe environment for you to practice therapeutic sessions, offering real-world scenarios to enhance your skills.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                        <div className="flex lg:h-[300px] flex-col justify-between rounded-md p-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                                <path d="m3 15 5.12-5.12A3 3 0 0 1 10.24 9H13a2 2 0 1 1 0 4h-2.5m4-.68 4.17-4.89a1.88 1.88 0 0 1 2.92 2.36l-4.2 5.94A3 3 0 0 1 14.96 17H9.83a2 2 0 0 0-1.42.59L7 19" /><path d="m2 14 6 6" />
                            </svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">Support for Depression</h3>
                                <p className="text-sm text-muted-foreground">
                                    If you&apos;re feeling down, overwhelmed, or just need someone to talk to, our AI psychologists are here to lend an understanding ear.
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Our empathetic AI psychologists are always available, ensuring you have a caring companion.
                                </p>


                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                        <div className="flex lg:h-[300px] flex-col justify-between rounded-md p-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">Safe and Private Environment</h3>
                                <p className="text-sm text-muted-foreground">
                                    Your mental health and privacy are of utmost importance to us.
                                </p>
                                <p className="text-sm text-muted-foreground ">
                                    SaaS Therapy offers a secure and confidential space for all interactions.
                                    Ensuring that your personal information and emotional well-being remain protected.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                        <div className="flex lg:h-[300px] flex-col justify-between rounded-md p-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
                                <path d="M12 2v2" />
                                <path d="M12 20v2" />
                                <path d="m4.9 4.9 1.4 1.4" />
                                <path d="m17.7 17.7 1.4 1.4" />
                                <path d="M2 12h2" />
                                <path d="M20 12h2" />
                                <path d="m6.3 17.7-1.4 1.4" />
                                <path d="m19.1 4.9-1.4 1.4" />
                            </svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">24/7 Availability</h3>
                                <p className="text-sm text-muted-foreground">
                                    SaaS Therapy is accessible anytime, anywhere.
                                    Our AI companions are available round the clock, providing support and practice opportunities whenever you need them.
                                    Whether it&apos;s a late-night study session or an early morning moment of reflection.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                        <div className="flex lg:h-[300px] flex-col justify-between rounded-md p-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                                <path d="M20 22h-2" /><path d="M20 15v2h-2" /><path d="M4 19.5V15" /><path d="M20 8v3" /><path d="M18 2h2v2" /><path d="M4 11V9" /><path d="M12 2h2" /><path d="M12 22h2" /><path d="M12 17h2" /><path d="M8 22H6.5a2.5 2.5 0 0 1 0-5H8" /><path d="M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8" />
                            </svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">Various Scenarios</h3>
                                <p className="text-sm text-muted-foreground line-clamp-7">
                                    SaaS Therapy offers a diverse selection of scenarios for psychology students to work with, allowing you to experience and master various therapeutic situations. Gain valuable insights into your progress.
                                    Experiment with different cases to become a well-rounded practitioner.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                        <div className="flex lg:h-[300px] flex-col justify-between rounded-md p-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" />
                                <path d="m4.93 4.93 4.24 4.24" /><path d="m14.83 9.17 4.24-4.24" /><path d="m14.83 14.83 4.24 4.24" /><path d="m9.17 14.83-4.24 4.24" /><circle cx="12" cy="12" r="4" />
                            </svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">Community Support and Forums</h3>
                                <p className="text-sm text-muted-foreground line-clamp-7">
                                    Connect with a community of like-minded individuals.
                                    Our forums and discussion boards provide a platform for sharing insights and engaging in meaningful conversations. Foster connections with fellow psychology enthusiasts and those on their mental health journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}