import { Card, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { SendHorizonal } from "lucide-react"

export function ChatSkeleton() {
    return (
        <div className="flex flex-col h-full pt-4">
            {/* CHAT HEADER */}
            <div className="flex flex-row justify-center mb-4">
                <Card className='w-full'>
                    <CardHeader className="flex flex-row items-center space-x-4">
                        <Skeleton className="h-16 w-16 rounded-full" />
                        <div className="flex flex-col  space-y-1">
                            <Skeleton className="h-4 w-[100px]" />
                            <Skeleton className="h-4 w-[180px]" />
                        </div>
                    </CardHeader>
                </Card>
            </div>
            {/* CHAT MESSAGES */}
            <div className="flex-1 overflow-y-auto pr-4 pl-2 ">
                <div className="mt-4 flex flex-row space-x-3">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <Skeleton className="h-24 max-w-sm w-full" />
                </div>
            </div>
            {/* CHAT FORM */}
            <div className="border-t border-primary/10 py-4 flex items-center gap-x-2">
                <Skeleton className="h-10 w-full" />
                <div className="h-10 px-4 py-2 inline-flex items-center justify-center">
                    <SendHorizonal className="w-6 h-6 animate-pulse rounded-md text-secondary" />
                </div>
            </div>

        </div>
    )
}