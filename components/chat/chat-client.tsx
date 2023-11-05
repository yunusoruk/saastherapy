import { Companion } from '@prisma/client';
import type { FC } from 'react';
import ChatHeader from './chat-header';

interface ChatClientProps {
    companion: Companion
}

const ChatClient: FC<ChatClientProps> = ({ companion }) => {
    return (
        <div className="max-w-3xl mx-auto h-full p-6">
            <ChatHeader
                companion={companion}
            />
        </div>
    );
}
export default ChatClient;