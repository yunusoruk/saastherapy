import { getCurrentUser } from "@/lib/session";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import { redirect } from "next/navigation";
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ManageSubscriptionButton from "@/components/manage-subscription-button";
import { Label } from "@/components/ui/label";

const BillingPage = async () => {
    const user = await getCurrentUser()
    if (!user) {
        redirect('/')
    }

    const isPro = await getUserSubscriptionPlan(user.id);

    return (
        <DashboardShell>
            <DashboardHeader
                heading="Billing"
                text="Manage your subscription."
            />
            <Card>
                <CardHeader>
                    <CardTitle>
                        Subscription Details
                    </CardTitle>
                </CardHeader>
                <CardContent className="">
                    <Label className="text-muted-foreground ">
                        {isPro.isPro ? "You are currently on a Pro plan." : "You are currently on a free plan."}
                    </Label>
                </CardContent>
                <CardFooter>
                    {!isPro.isPro
                        ? (
                            <Link href="/pricing" className={cn("ml-auto", buttonVariants({ variant: "premium" }))}>
                                Subscribe Now
                            </Link>
                        )
                        : (
                            <ManageSubscriptionButton />
                        )
                    }

                </CardFooter>
            </Card>
        </DashboardShell>
    );
}

export default BillingPage;