"use client";

import {
    ChevronsLeft,
    MenuIcon,
    Plus,
    PlusCircle,
    Search,
    Settings,
    Trash
} from "lucide-react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ElementRef, FC, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";



import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { DashboardNav } from "./nav";
import { dashboardConfig } from "@/config/dashboard";

interface SidebarProps {
    children: React.ReactNode
}



export const Sidebar: FC<SidebarProps> = ({ children }) => {

    const isMobile = useMediaQuery("(max-width: 768px)");
    const [isCollapsed, setIsCollapsed] = useState(isMobile)
    const [isResetting, setIsResetting] = useState(false);


    useEffect(() => {
        if (isMobile) {
            collapse();
        } else {
            resetWidth();
        }
    }, [isMobile]);

    const collapse = () => {
        setIsCollapsed(true);
        setIsResetting(true);
        setTimeout(() => {
            setIsResetting(false)
        }, 200);
    }

    const resetWidth = () => {
        setIsCollapsed(false);
        setIsResetting(true);
        setTimeout(() => {
            setIsResetting(false)
        }, 200);
    }



    return (
        <>
            <aside className={cn("w-60 flex-col md:flex  relative",
                isResetting && "transition-all ease-in-out duration-200",
                isCollapsed && "w-0 border-none"
            )}>

                <Button variant='outline' size='icon' onClick={collapse} className={cn("absolute top-2 right-2",
                    isResetting && "transition-all ease-in-out duration-200",
                    isCollapsed && "hidden disabled"
                )}>
                    <Icons.panelRight className="text-muted-foreground" />
                </Button>

            </aside>
            <main className="flex w-full flex-1 flex-col overflow-hidden relative">
                <Button variant='outline' size='icon' onClick={resetWidth} className={cn("absolute top-2 left-2",
                    isResetting && "transition-all ease-in-out duration-200",
                    !isCollapsed && "hidden disabled"
                )}>
                    <Icons.panelLeft className="text-muted-foreground" />
                </Button>
                {children}
            </main>
        </>
    )
}