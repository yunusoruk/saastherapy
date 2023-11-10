import Link from "next/link";
import Image from "next/image";

const ChatAddCard = () => {
    return (
        <div className="my-4 hidden xl:flex ">
            <Link
                href='/pricing'
                className="bg-card shadow-sm  group space-y-4 border rounded-lg w-60 h-60 transition-all"
            >
                <div className="aspect-square rounded-lg relative overflow-hidden ">
                    <Image
                        alt='Product Image'
                        src='/images/therapy/therapy-1.jpg'
                        fill
                        className='aspect-square object-cover rounded-lg transition'
                    />
                    <div className="absolute w-full h-full opacity-0 group-hover:opacity-100">
                        <div className="flex justify-center items-center h-full hover:bg-secondary/25 rounded-lg text-4xl font-bold">
                            GO PRO
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ChatAddCard;