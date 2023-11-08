import ChatNoCompanion from '@/components/chat/chat-no-companion';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import { buttonVariants } from '@/components/ui/button';
import { getCurrentUser } from '@/lib/session';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import Link from 'next/link';
import type { FC } from 'react';


export const metadata: Metadata = {
    title: "Chat",
    description: "Engage with SaaS Therapy's AI Companions: Discover a new dimension of support and practice in the world of mental wellness.",
}

interface ChatPageProps {

}

const ChatPage: FC<ChatPageProps> = async ({ }) => {

    // const currentUser = await getCurrentUser()

    return (
        <div className="bg-background w-full h-full py-4">
            <ChatNoCompanion />
        </div>
    );
}
export default ChatPage;