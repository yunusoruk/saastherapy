import { getCurrentUser } from "@/lib/session";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import { redirect } from "next/navigation";

const SettingsPage = async () => {
    const user = await getCurrentUser()
    if (!user) {
        redirect('/')
    }

    const isPro = await getUserSubscriptionPlan(user.id);

    return (
        <div className="h-full p-4 space-y-2">
            <h3 className="text-lg font-medium">Settings</h3>
            <div className="text-muted-foreground text-sm">
                {isPro.isPro ? "You are currently on a Pro plan." : "You are currently on a free plan."}
            </div>
            {/* <SubscriptionButton isPro={isPro} /> */}
        </div>
    );
}

export default SettingsPage;