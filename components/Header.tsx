import { UserButton } from '@clerk/nextjs';
import { UserResource } from '@clerk/types'
import Link from 'next/link';

interface HeaderProps {
    user: UserResource | null | undefined;
}

const Header = ({ user }: HeaderProps) => {
    return (
        <div className='bg-slate-800 h-[100px] text-white shadow-lg flex justify-between py-5 px-5'>
            <div>
                <h1>Logo</h1>
            </div>
            <div className='flex gap-2'>
                <h1 className='mt-5 '> Welcome
                <Link href="/profile">
                    {user?.username}
                </Link>
                </h1>
                <UserButton />
            </div>

        </div>
    )
}

export default Header