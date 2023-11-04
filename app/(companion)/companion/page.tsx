import CompanionList from '@/components/companion/companion-list';
import { Metadata } from 'next';
import type { FC } from 'react';

export const metadata: Metadata = {
    title: "Companion",
    description: "Engage with SaaS Therapy's AI Companions: Discover a new dimension of support and practice in the world of mental wellness.",
}

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