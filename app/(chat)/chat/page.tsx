import ChatClient from '@/components/chat/chat-client';
import CompanionList from '@/components/companion/companion-list';
import { Particles } from '@/components/landing/particles';
import { prismadb } from '@/lib/prismadb';
import { getCurrentUser } from '@/lib/session';
import { Metadata } from 'next';
import type { FC } from 'react';


export const metadata: Metadata = {
    title: "Chat",
    description: "Engage with SaaS Therapy's AI Companions: Discover a new dimension of support and practice in the world of mental wellness.",
}

interface TherapyPageProps {
    searchParams: {
        companion: string
    }
}

const TherapyPage: FC<TherapyPageProps> = async ({ searchParams }) => {

    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return
    }

    if (searchParams.companion === undefined) {
        return (
            <div className="">
                <div className="max-w-3xl mx-auto h-full">
                    No companion
                </div>
            </div>
        )
    }



    const companion = await prismadb.companion.findUnique({
        where: {
            id: searchParams.companion
        },
        include: {
            messages: true
        }
    })

    if (!companion) {
        return (
            <div className="bg-background w-full h-full ">
                <div className="flex flex-col h-full max-w-3xl mx-auto  pt-2">
                    No companion
                </div>
            </div>
        )
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
            />
        </div>
    );
}
export default TherapyPage;