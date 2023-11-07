import { getCurrentUser } from '@/lib/session';
import { Metadata } from 'next';
import type { FC } from 'react';


export const metadata: Metadata = {
    title: "Chat",
    description: "Engage with SaaS Therapy's AI Companions: Discover a new dimension of support and practice in the world of mental wellness.",
}

interface ChatPageProps {

}

const ChatPage: FC<ChatPageProps> = async ({ }) => {

    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return (
            <div className="">
                {/* TODO */}
                Please sign in to chat
            </div>
        )
    }





    return (
        <div className="bg-background w-full h-full ">
            {/* TODO */}
            No companion
        </div>
    );
}
export default ChatPage;