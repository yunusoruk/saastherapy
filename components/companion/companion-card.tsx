"use client"

import { Companion } from '@prisma/client';
import type { FC } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import qs from "query-string";
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Icons } from '../icons';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { Label } from '../ui/label';

interface CompanionCardProps {
    companion: Companion & {
        _count: {
            messages: number
        }
    }
}

const CompanionCard: FC<CompanionCardProps> = ({
    companion
}) => {

    const router = useRouter();

    const chatHandle = () => {
        const url = qs.stringifyUrl({
            url: "/chat",
            query: {
                companion: companion.id
            }
        })
        router.push(url)
    }

    return (
        <Card>
            <CardHeader className="flex flex-col space-y-4">
                <Avatar className='h-16 w-16'>
                    <AvatarImage src={companion.image} />
                    <AvatarFallback>
                        <Icons.user className="h-8 w-8 text-muted-foreground" />
                    </AvatarFallback>
                </Avatar>
                <div className="flex flex-col space-y-2">
                    <CardTitle className='space-x-2 flex flex-row ' >
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
                </div>
            </CardHeader>
            <CardContent className='gap-6'>
                <div className="flex items-center justify-between space-x-2">
                    <Label className='flex flex-col space-y-1'>
                        <span className="font-normal leading-snug text-muted-foreground line-clamp-4">
                            {companion.description}
                        </span>
                    </Label>
                </div>
                <div className="mt-4">
                    <Badge className='rounded-md capitalize'>
                        {companion.illness}
                    </Badge>
                </div>
            </CardContent>
            <CardFooter>
                <Button className='w-full' variant='secondary' onClick={() => router.push(`/chat/${companion.id}`)} >
                    Chat
                </Button>
            </CardFooter>
        </Card>

    );
}
export default CompanionCard;