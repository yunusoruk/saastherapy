import { CardSkeleton } from "@/components/card-skeleton";
import { ChatSkeleton } from "@/components/chat-skeleton";


export default function ChatLoading() {
    return (
        <div className="bg-background w-full h-full ">
            <ChatSkeleton />
        </div>
    )
}