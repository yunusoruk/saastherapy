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
import { useRouter } from 'next/navigation';


interface ChatSidebarItemProps {
    companion: CompanionChatItem
}

const ChatSidebarItem: FC<ChatSidebarItemProps> = ({ companion }) => {

    const router = useRouter();

    const handleClick = () => {
        const url = qs.stringifyUrl({
            url: "/chat",
            query: {
                companion: companion.id
            }
        })
        router.push(url)
        router.refresh()

    }

    return (
        <TooltipProvider>
            <Tooltip delayDuration={50}>
                <TooltipTrigger asChild>
                    <div className='flex flex-row items-center space-x-4 border rounded-md p-2 bg-card hover:bg-accent cursor-pointer' onClick={handleClick}>
                        <Avatar className='h-10 w-10'>
                            <AvatarImage src={companion.image} />
                        </Avatar>
                        <Label className='text-lg'>
                            {companion.name}
                        </Label>
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