import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function CardSkeleton() {
    return (
        <Card>
            <CardHeader className="gap-4">
                <Skeleton className="h-16 w-16 rounded-full" />
                <div className="flex flex-col space-y-2">
                    <Skeleton className="h-5 w-2/5" />
                    <Skeleton className="h-4 w-5/5" />
                </div>
            </CardHeader>
            <CardContent className="felx flex-col space-y-4 mb-1">
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-5 w-2/5" />
            </CardContent>
            <CardFooter>
                <Skeleton className="h-10 w-full" />
            </CardFooter>
        </Card>
    )
}