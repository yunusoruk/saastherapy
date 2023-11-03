import { Companion } from '@prisma/client';
import type { FC } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';

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
        <Card className=''>
            <div className="aspect-square rounded-full relative overflow-hidden mt-4 mx-4">
                <Image
                    alt='Companion'
                    src={companion.image || '/images/avatars/avatar.png'}
                    fill
                    className='aspect-square object-cover rounded-full'
                />
            </div>
            <CardHeader>
                <CardTitle className='text-center'>
                    {companion.name}
                </CardTitle>
                <CardDescription className='text-justify'>
                    {companion.description}
                </CardDescription>
            </CardHeader>

        </Card>
        // </div>

    );
}
export default CompanionCard;