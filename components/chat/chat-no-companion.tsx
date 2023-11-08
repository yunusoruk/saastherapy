import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { Icons } from '../icons';

const ChatNoCompanion = () => {
    return (
        <div className="bg-background w-full h-full flex flex-col items-center py-4 space-y-16">
            <PageHeader>
                <PageHeaderHeading>Explore the World of SaaS Therapy</PageHeaderHeading>
                <PageHeaderDescription>
                    Ready for a premium experience? <br />

                </PageHeaderDescription>
            </PageHeader>
            <div className="flex flex-col space-y-4">
                <Link href='/pricing' className={cn("w-[240px]", buttonVariants({ variant: 'premium', size: 'lg', className: "text-white" }))}>
                    Upgrade
                    <Icons.sparkles className="h-4 w-4 fill-white text-white ml-2" />
                </Link>

            </div>
        </div>
    );
}

export default ChatNoCompanion;