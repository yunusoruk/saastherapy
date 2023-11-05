import ChatClient from '@/components/chat/chat-client';
import CompanionList from '@/components/companion/companion-list';
import { Particles } from '@/components/landing/particles';
import { prismadb } from '@/lib/prismadb';
import { Metadata } from 'next';
import type { FC } from 'react';


export const metadata: Metadata = {
    title: "Chat",
    description: "Engage with SaaS Therapy's AI Companions: Discover a new dimension of support and practice in the world of mental wellness.",
}

interface TherapyPageProps {
    searchParams: {
        name: string
    }
}

const TherapyPage: FC<TherapyPageProps> = async ({ searchParams }) => {

    const companion = await prismadb.companion.findUnique({
        where: {
            id: "aa0723ba-b4fa-43a5-91fb-e72998c9e5aa"
        }
    })

    if (!companion) {
        return (
            <div className="">
                <div className="max-w-3xl mx-auto h-full">
                    No companion
                </div>
            </div>
        )
    }

    return (
        <div className="bg-background w-full h-full ">
            <ChatClient
                companion={companion} />

        </div>
    );
}
export default TherapyPage;