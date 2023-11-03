import CompanionList from '@/components/companion/companion-list';
import type { FC } from 'react';

interface CompanionPageProps {
    searchParams: {
        name: string
    }
}

const CompanionPage: FC<CompanionPageProps> = async ({ searchParams }) => {

    return (
        <div className="container">
            <CompanionList />

        </div>
    );
}
export default CompanionPage;