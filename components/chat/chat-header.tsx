"use client"

import { Companion } from '@prisma/client';
import type { FC } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Icons } from '../icons';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import ReactCountryFlag from "react-country-flag"

interface ChatHeaderProps {
    companion: Companion
}

const ChatHeader: FC<ChatHeaderProps> = ({ companion }) => {
    return (
        <Card >
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
                        Age:{" "}{companion.age}<br />
                        Residence:{" "}
                    </CardDescription>
                    {/* <CardDescription className='flex flex-row items-center '>
                        asdas
                    </CardDescription> */}
                </div>
            </CardHeader>
        </Card>
    );
}
export default ChatHeader;