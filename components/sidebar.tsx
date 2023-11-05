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
import { Button, buttonVariants } from "./ui/button";
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
            <aside className={cn("w-60 flex-col flex relative ",
                isResetting && "transition-all ease-in-out duration-200",
                isCollapsed && "w-0 border-none"
            )}>

                {/* <Button variant='outline' size='icon' onClick={collapse} className={cn("absolute top-2 right-2",
                    isResetting && "transition-all ease-in-out duration-200",
                    isCollapsed && "hidden disabled"
                )}>
                    <Icons.panelRight className="text-muted-foreground" />
                </Button> */}


                <div className="flex  justify-between pt-2 pr-2 pb-2 space-x-2">
                    <Button variant="outline" className={cn("space-x-2 w-[180px]",
                        isResetting && "transition-all ease-in-out duration-200",
                        isCollapsed ? "hidden disabled" : ""
                    )

                    } >
                        <Icons.add className="h-4 w-4  ml-2" />
                        <span className="">
                            New Patient
                        </span>
                    </Button>
                    <Button variant='outline' size='icon' onClick={collapse} className={cn("",
                        isResetting && "transition-all ease-in-out duration-200",
                        isCollapsed && "hidden disabled"
                    )}>
                        {/* <Icons.panelRight className="text-muted-foreground" /> */}
                        <Icons.left className="text-muted-foreground" />
                    </Button>
                </div>

            </aside>
            <main className="flex w-full  flex-1 flex-col overflow-hidden relative">
                <Button variant='outline' size='icon' onClick={resetWidth} className={cn("absolute top-2 left-2",
                    isResetting && "transition-all ease-in-out duration-200",
                    !isCollapsed && "hidden disabled",
                    isCollapsed && "left-0"

                )}>
                    {/* <Icons.panelLeft className="text-muted-foreground" /> */}
                    <Icons.right className="text-muted-foreground" />

                </Button>
                {children}
            </main>
        </>
    )
}