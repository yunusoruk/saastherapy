"use client";

import { ElementRef, useEffect, useRef, useState } from "react";
import { Companion, User } from "@prisma/client";

import { ChatMessage, ChatMessageProps } from "@/components/chat/chat-message";
import { ScrollArea } from "../ui/scroll-area";

interface ChatMessagesProps {
    messages: ChatMessageProps[];
    isLoading: boolean;
    companion: Companion
    user: Pick<User, "name" | "image" | "email">

}

export const ChatMessages = ({
    messages = [],
    isLoading,
    companion,
    user
}: ChatMessagesProps) => {
    const scrollRef = useRef<ElementRef<"div">>(null);

    const [fakeLoading, setFakeLoading] = useState(messages.length === 0 ? true : false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFakeLoading(false);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        }
    }, []);

    useEffect(() => {
        scrollRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages.length]);

    return (
        <div className="flex-1 overflow-y-auto pr-4 pl-2 ">
            <ChatMessage
                isLoading={fakeLoading}
                src={companion.image}
                role="system"
                content={`Hello, I am ${companion.name}, ${companion.description}`}
                user={user}
            />
            {messages.map((message) => (
                <ChatMessage
                    key={message.content}
                    src={companion.image}
                    content={message.content}
                    role={message.role}
                    user={user}

                />
            ))}
            {isLoading && (
                <ChatMessage
                    src={companion.image}
                    role="system"
                    isLoading
                    user={user}

                />
            )}
            <div ref={scrollRef} />
        </div>
    );
};