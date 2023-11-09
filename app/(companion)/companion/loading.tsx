import { CardSkeleton } from "@/components/card-skeleton";


export default function CompanionsLoading() {
    return (
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-4">
                <CardSkeleton />
                <CardSkeleton />
            </div>
        </div>
    )
}