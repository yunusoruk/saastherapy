import type { FC } from 'react';
import { Button } from './ui/button';
import { Icons } from './icons';

interface PremiumButtonProps { }

const PremiumButton: FC<PremiumButtonProps> = ({ }) => {
    return (
        <Button size='premium' variant="premium" className='hidden sm:flex'>
            Upgrade
            <Icons.sparkles className="h-4 w-4 fill-white text-white ml-2" />
        </Button>
    );
}
export default PremiumButton;