import { prismadb } from '@/lib/prismadb';
import type { FC } from 'react';
import CompanionCard from './companion-card';
import Image from 'next/image';
import { Label } from '../ui/label';

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
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