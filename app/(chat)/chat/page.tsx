import CompanionList from '@/components/companion/companion-list';
import type { FC } from 'react';

interface TherapyPageProps {
    searchParams: {
        name: string
    }
}

const TherapyPage: FC<TherapyPageProps> = async ({ searchParams }) => {

    return (
        <div className="bg-secondary w-full h-full">
            <div className="max-w-3xl mx-auto h-full">
                <CompanionList />
            </div>

        </div>
    );
}
export default TherapyPage;