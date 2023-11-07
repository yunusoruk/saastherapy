import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

const ChatNoAccount = () => {
    return (
        <div className="bg-background w-full h-full flex flex-col items-center py-4 space-y-16">
            <PageHeader>
                <PageHeaderHeading>Welcome to Saas Therapy 👋</PageHeaderHeading>
                <PageHeaderDescription>
                    Join the conversation by creating an account.
                </PageHeaderDescription>
            </PageHeader>
            <div className="flex flex-col space-y-4">
                <Link href='/login' className={cn("w-[240px]", buttonVariants({ variant: 'default', className: "text-white" }))}>
                    Get Started
                </Link>
                <Link href={siteConfig.links.twitter} className={cn("w-[240px]", buttonVariants({ variant: 'outline' }))}>
                    Follow on X
                </Link>
            </div>
        </div>
    );
}

export default ChatNoAccount;