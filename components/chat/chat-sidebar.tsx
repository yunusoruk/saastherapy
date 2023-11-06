import { companionsConfig } from '@/config/companions';
import { cn } from '@/lib/utils';
import { Companion } from '@prisma/client';
import Link from 'next/link';
import type { FC } from 'react';
import ChatSidebarItem from './chat-sidebar-item';

interface ChatSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
}

const ChatSidebar: FC<ChatSidebarProps> = ({ className }) => {

    return (
        <>
            <div className={cn("hidden lg:flex flex-col h-full bg-background", className)}>
                {/* <div className=" h-10 w-60">
                </div> */}
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