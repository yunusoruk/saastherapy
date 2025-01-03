import { ChatSkeleton } from '@/components/chat-skeleton';
import ChatClient from '@/components/chat/chat-client';
import CompanionList from '@/components/companion/companion-list';
import { Particles } from '@/components/landing/particles';
import { prismadb } from '@/lib/prismadb';
import { getCurrentUser } from '@/lib/session';
import { getUserSubscriptionPlan } from '@/lib/subscription';
import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import type { FC } from 'react';


export const metadata: Metadata = {
    title: "Chat",
    description: "Engage with SaaS Therapy's AI Companions: Discover a new dimension of support and practice in the world of mental wellness.",
}

interface ChatIdPageProps {
    params: {
        chatId: string
    }
}

const ChatIdPage: FC<ChatIdPageProps> = async ({ params }) => {

    const currentUser = await getCurrentUser()

    if (!currentUser) {
        redirect(`/chat`)
    }


    const { isPro } = await getUserSubscriptionPlan(currentUser.id)

    const companion = await prismadb.companion.findUnique({
        where: {
            id: params.chatId
        },
        include: {
            messages: {
                where: {
                    userId: currentUser.id
                },
                orderBy: {
                    createdAt: "asc"
                }
            }
        }
    })

    if (!companion) {
        return notFound()
    }

    return (
        <div className="bg-background w-full h-full ">
            <ChatClient
                companion={companion}
                user={{
                    name: currentUser.name || null,
                    image: currentUser.image || null,
                    email: currentUser.email || null,
                }}
                isPro={isPro}
            />
        </div>
    );
}
export default ChatIdPage;