import type { FC } from 'react';
import { Button, buttonVariants } from './ui/button';
import { Icons } from './icons';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface PremiumButtonProps { }

const PremiumButton: FC<PremiumButtonProps> = ({ }) => {
    return (
        <Link
            className={cn("hidden sm:flex", buttonVariants({ size: 'premium', variant: 'premium' }))}
            href='/pricing'
        >
            Upgrade
            <Icons.sparkles className="h-4 w-4 fill-white text-white ml-2" />
        </Link>
    );
}
export default PremiumButton;