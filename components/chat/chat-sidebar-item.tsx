"use client"

import { CompanionChatItem } from '@/types';
import type { FC } from 'react';
import { Card, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Label } from '../ui/label';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import qs from "query-string";
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';


interface ChatSidebarItemProps {
    companion: CompanionChatItem
}

const ChatSidebarItem: FC<ChatSidebarItemProps> = ({ companion }) => {

    const router = useRouter();
    const path = usePathname()


    return (
        <TooltipProvider>
            <Tooltip delayDuration={50}>
                <TooltipTrigger asChild>
                    <div className={cn('flex flex-row items-center space-x-4 border rounded-md p-2 bg-card hover:bg-accent cursor-pointer',
                        path === `/chat/${companion.id}` ? "bg-accent" : "bg-card",
                    )}
                        onClick={() => router.push(`/chat/${companion.id}`)}>
                        <Avatar className='h-10 w-10'>
                            <AvatarImage src={companion.image} />
                        </Avatar>
                        <p className='text-lg font-medium'>
                            {companion.name}
                        </p>
                    </div>
                </TooltipTrigger>
                <TooltipContent side='right' align='center'>
                    <p className="font-semibold text-sm capitalize">
                        {`Chat with ${companion.name}`}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    );
}
export default ChatSidebarItem