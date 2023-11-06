"use client";

import { BeatLoader } from "react-spinners";
import { Copy } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Avatar, AvatarImage } from "../ui/avatar";
import { User } from "@prisma/client";

export interface ChatMessageProps {
    role: "system" | "user",
    content?: string;
    isLoading?: boolean;
    src?: string;
    user: Pick<User, "name" | "image" | "email">

}

export const ChatMessage = ({
    role,
    content,
    isLoading,
    src,
    user
}: ChatMessageProps) => {
    const { toast } = useToast();
    const { theme } = useTheme();

    const onCopy = () => {
        if (!content) {
            return;
        }

        navigator.clipboard.writeText(content);
        toast({
            description: "Message copied to clipboard.",
            duration: 3000,
        })
    }

    return (
        <div className={cn(
            "group flex items-start gap-x-3 py-4 w-full",
            role === "user" && "justify-end"
        )}>
            {role !== "user" && src &&
                <Avatar className="h-12 w-12">
                    <AvatarImage src={src} />
                </Avatar>
            }
            <div className="rounded-md px-4 py-2 max-w-sm text-sm bg-primary/10">
                {isLoading
                    ? <BeatLoader color={theme === "light" ? "black" : "white"} size={5} />
                    : content
                }
            </div>
            {role === "user" &&
                <UserAvatar
                    user={{ name: user.name || null, image: user.image || null }}
                    className="h-12 w-12"
                />
            }
            {role !== "user" && !isLoading && (
                <Button
                    onClick={onCopy}
                    className="opacity-0 group-hover:opacity-100 transition"
                    size="icon"
                    variant="ghost"
                >
                    <Copy className="w-4 h-4" />
                </Button>
            )}
        </div>
    )
}