import { Metadata } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ChevronLeft, Command as Logo } from "lucide-react"
import { UserAuthForm } from "../components/user-auth-form"
import { UserLoginForm } from "../components/user-login-form"

export const metadata: Metadata = {
    title: "Login",
    description: "Login to your account",
}

export default function LoginPage() {
    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <Link
                href="/"
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "absolute left-4 top-4 md:left-8 md:top-8"
                )}
            >
                <>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                </>
            </Link>
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <svg className="mx-auto" width="45" height="24" viewBox="0 0 360 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M360 144C360 170.51 338.51 192 312 192C285.49 192 264 170.51 264 144C264 117.49 285.49 96 312 96C338.51 96 360 117.49 360 144Z" fill="#c2def2" />
                        <path d="M312 96C312 149.019 269.019 192 216 192C162.981 192 120 149.019 120 96C120 42.9807 162.981 4.67745e-06 216 4.67745e-06C269.019 4.67745e-06 312 42.9807 312 96Z" fill="#228fda" />
                        <path d="M192 120C192 159.765 159.765 192 120 192C80.2355 192 48 159.765 48 120C48 80.2355 80.2355 48 120 48C159.765 48 192 80.2355 192 120Z" fill="#5fa8db" />
                        <path d="M96 144C96 170.51 74.5097 192 48 192C21.4903 192 0 170.51 0 144C0 117.49 21.4903 96 48 96C74.5097 96 96 117.49 96 144Z" fill="#95c6e8" />
                    </svg>
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Welcome back
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Enter your email to sign in to your account
                    </p>
                </div>
                <UserLoginForm />
                <p className="px-8 text-center text-sm text-muted-foreground">
                    <Link
                        href="/register"
                        className="hover:text-brand underline underline-offset-4"
                    >
                        Don&apos;t have an account? Sign Up
                    </Link>
                </p>
            </div>
        </div>
    )
}