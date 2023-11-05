"use client"

import { Companion } from '@prisma/client';
import type { FC, ReactHTMLElement } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Icons } from '../icons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';

interface ChatHeaderProps {
    companion: Companion
}

const ChatHeader: FC<ChatHeaderProps> = ({ companion }) => {
    return (
        <div className="flex flex-row justify-center">
            <Popover>
                <PopoverTrigger asChild>
                    <Card className='max-w-md w-full cursor-pointer hover:bg-accent transition-all'>
                        <CardHeader className="flex flex-row items-center space-x-4">
                            <Avatar className='h-16 w-16'>
                                <AvatarImage src={companion.image} />
                                <AvatarFallback>
                                    <Icons.user className="h-8 w-8 text-muted-foreground" />
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col  space-y-1">
                                <CardTitle className='space-x-2 mb-1 flex flex-row ' >
                                    <span>
                                        {companion.name}
                                    </span>
                                    <Avatar className='rounded-sm w-6 h-6'>
                                        <AvatarImage src={companion.flag || ""} />
                                        <AvatarFallback>
                                            <Icons.flag className="h-8 w-8 text-muted-foreground" />
                                        </AvatarFallback>
                                    </Avatar>
                                </CardTitle>
                                <CardDescription>
                                    Age:{" "}{companion.age}
                                </CardDescription>
                                <CardDescription>
                                    {" "}
                                </CardDescription>
                            </div>
                            <div className=" justify-end flex flex-row w-full p-4">
                                <svg width="27" height="27" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd">
                                    </path>
                                </svg>
                            </div>
                        </CardHeader>
                    </Card>
                </PopoverTrigger>
                <PopoverContent className="max-w-md w-[448px]">
                    <div className="grid gap-4">
                        <div className="space-y-2">
                            <h4 className="font-medium leading-none">Who is {companion.name}?</h4>
                            <p className="text-sm text-muted-foreground">
                                {companion.description}
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-medium leading-none">Illness</h4>
                            <Badge className='capitalize rounded-md'>
                                {companion.illness}
                            </Badge>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}
export default ChatHeader;