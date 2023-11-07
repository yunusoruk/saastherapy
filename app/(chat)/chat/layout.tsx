import Link from "next/link"
import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { UserAccountNav } from "@/components/user-account-nav"
import { getCurrentUser } from "@/lib/session"
import { notFound } from "next/navigation"
import PremiumButton from "@/components/premium-button"
import { ModeToggle } from "@/components/mode-toggle"
import ChatSidebar from "@/components/chat/chat-sidebar"


interface MarketingLayoutProps {
    children: React.ReactNode
}

export default async function MarketingLayout({
    children,
}: MarketingLayoutProps) {

    const user = await getCurrentUser()

    return (
        <div className="h-full flex flex-col">
            <header className="border-b z-40 bg-background">
                <div className=" container flex h-20 items-center justify-between py-6">
                    <MainNav items={marketingConfig.mainNav} />
                    <div className="flex flex-row items-center space-x-4">
                        <PremiumButton />
                        <ModeToggle />
                        {user ? (
                            <UserAccountNav
                                user={{
                                    name: user.name,
                                    image: user.image,
                                    email: user.email,
                                }}
                            />
                        ) : (
                            <nav>
                                <Link
                                    href="/login"
                                    className={cn(
                                        buttonVariants({ variant: "secondary", size: "sm" }),
                                        "px-4"
                                    )}
                                >
                                    Login
                                </Link>
                            </nav>
                        )}
                    </div>
                </div>
            </header>

            <main className="flex-1 h-full overflow-y-auto flex lg:flex-cols-4  container space-x-4">
                <ChatSidebar />
                {children}
                <div className="border rounded-md my-4 hidden xl:flex ">
                    <div className="w-60">

                    </div>
                </div>
            </main>
        </div>
    )
}