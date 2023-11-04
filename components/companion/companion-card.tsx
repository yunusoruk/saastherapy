"use client"

import { Companion } from '@prisma/client';
import type { FC } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Icons } from '../icons';
import { Button } from '../ui/button';
import { toast } from '../ui/use-toast';

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
    return (
        <Card>
            <CardHeader>
                <Avatar className=' h-full w-full mb-4'>
                    <AvatarImage src={companion.image || '/images/avatars/avatar.png'} alt='companion' />
                    <AvatarFallback>
                        <Icons.user className="h-full w-full" />
                    </AvatarFallback>
                </Avatar>
                <CardTitle className='text-center'>
                    {companion.name}
                </CardTitle>
                <CardDescription className='text-justify'>
                    {companion.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Badge className='rounded-md capitalize'>
                    {companion.illness}
                </Badge>
            </CardContent>
            <CardFooter>
                <Button className='w-full' variant='secondary' onClick={() => toast({ description: "Chat will be available soon." })} >
                    Chat
                </Button>
            </CardFooter>
        </Card>

    );
}
export default CompanionCard;