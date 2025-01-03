"use client"

import { Companion, Message, User } from '@prisma/client';
import { useState, type FC, FormEvent } from 'react';
import ChatHeader from './chat-header';
import { useCompletion } from 'ai/react'
import { useRouter } from 'next/navigation';
import { ChatForm } from './chat-form';
import { ChatMessages } from './chat-messages';
import { toast } from '../ui/use-toast';

interface ChatClientProps {
    companion: Companion & {
        messages: Message[]
    }
    user: Pick<User, "name" | "image" | "email">
    isPro: boolean
}

const ChatClient: FC<ChatClientProps> = ({ companion, user, isPro }) => {

    const router = useRouter()
    const [messages, setMessages] = useState<any[]>(companion.messages)


    const {
        input,
        isLoading,
        handleSubmit,
        handleInputChange,
        setInput
    } = useCompletion({
        api: `/api/chat/${companion.id}`,
        onFinish(prompt, completion) {
            const systemMessage = {
                role: "system",
                content: completion,
            }

            setMessages((current) => [...current, systemMessage])
            setInput("")

            router.refresh()
        }
    })

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {

        if (!isPro && messages.length > 3) {
            return toast({
                description: "Please subscribe to sent more messages."
            })
        }

        const userMessage = {
            role: "user",
            content: input,
        }

        setMessages((current) => [...current, userMessage])
        handleSubmit(e)
    }

    return (
        <div className="flex flex-col h-full pt-4">
            <ChatHeader
                companion={companion}
            />
            <ChatMessages
                companion={companion}
                isLoading={isLoading}
                messages={messages}
                user={user}
            />
            <ChatForm
                isLoading={isLoading}
                input={input}
                onSubmit={onSubmit}
                handleInputChange={handleInputChange}
            />
        </div>
    );
}
export default ChatClient;