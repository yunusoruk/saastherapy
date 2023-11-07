import { companionsConfig } from '@/config/companions';
import { cn } from '@/lib/utils';
import { Companion } from '@prisma/client';
import Link from 'next/link';
import type { FC } from 'react';
import ChatSidebarItem from './chat-sidebar-item';
import { Separator } from '../ui/separator';
import { buttonVariants } from '../ui/button';
import { Icons } from '../icons';

interface ChatSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
}

const ChatSidebar: FC<ChatSidebarProps> = ({ className }) => {

    return (
        <>
            <div className={cn("hidden lg:flex flex-col h-full bg-background", className)}>
                <Link
                    href='/companion'
                    className={cn("mt-4 mb-4", buttonVariants({ variant: 'outline' }))}
                >
                    <Icons.chevronLeft size={16} className='mr-2' />
                    See all companions
                </Link>
                <Separator />
                <nav className="grid items-start gap-2 py-4 w-60">
                    {companionsConfig.companions.map((companion) => (
                        <ChatSidebarItem
                            key={companion.id}
                            companion={companion}
                        />
                    )
                    )}
                </nav>
            </div>
        </>
    );
}
export default ChatSidebar