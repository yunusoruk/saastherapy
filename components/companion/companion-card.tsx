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
        // <Card className=' '>
        //     <CardHeader className='flex items-center justify-center'>
        //         <div className="relative aspect-square roundedn-md overflow-hidden">
        //             <Image
        //                 alt='Companion'
        //                 src={companion.image}
        //                 fill
        //                 className='object-cover aspect-square '
        //             />
        //         </div>
        //         <CardDescription>

        //         </CardDescription>
        //     </CardHeader>
        //     <CardContent>

        //     </CardContent>
        // </Card>
        // <div className='bg-card shadow-sm group cursor-pointer space-y-4 border rounded-lg'>
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
                <CardDescription className='line-clamp-3'>
                    {companion.description}
                </CardDescription>
            </CardHeader>

        </Card>
        // </div>

    );
}
export default CompanionCard;