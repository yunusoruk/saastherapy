import { prismadb } from '@/lib/prismadb';
import type { FC } from 'react';
import CompanionCard from './companion-card';
import Image from 'next/image';
import SendEmail from '../send-email';

interface CompanionListProps { }

const CompanionList: FC<CompanionListProps> = async ({ }) => {

    const companions = await prismadb.companion.findMany({
        orderBy: {
            createdAt: "desc"
        },
        include: {
            _count: {
                select: {
                    messages: true
                }
            }
        }
    })

    if (companions.length === 0) {
        return (
            <div className="flex flex-col items-center pb-10 justify-center  h-full">
                <div className="aspect-square rounded-xl relative overflow-hidden w-[240px]">
                    <Image
                        alt='empty'
                        src="/images/empty2.png"
                        fill
                        className='aspect-square object-cover'
                    />
                </div>
                <p className="text-md font-medium text-muted-foreground">No companions found.</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-4">
            <SendEmail />
            {companions.map((companion) => (
                <CompanionCard
                    key={companion.id}
                    companion={companion}
                />
            ))}
        </div>
    );
}
export default CompanionList;