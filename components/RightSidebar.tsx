import React from 'react'
import Image from 'next/image';

const RightSidebar = ({user, transactions, banks}:
    RightSidebarProps) => {
  return (
    <aside className='right-sidebar'>
        <section className='flex flex-col pb-8'>
            <div className='profile-banner'/>
            <div className='profile'>
                <div className='profile-img'>
                    <span className='text-5xl font-bold text-blue-500'>{user.firstName[0]}</span>
                </div>
                <div className='profile-details'>
                    <h1 className='profile-name'>
                        {user.firstName} {user.lastName}
                    </h1>
                    <p className='profile-email'>
                        {user.email}
                    </p>
                </div>
            </div>
        </section>
        <section className='banks'>
            <div className='flex w-full '>
                <h2 className='header-2'>My Banks</h2>
                <a href="/" className='flex gap-2'>
                    <Image
                        src='/icons/plus.svg'
                        width={20}
                        height={20}
                        alt='plus'
                        />
                    <h2 className='text-14 font-semibold text-gray-600'>
                        Add Bank
                    </h2>
                </a>
            </div>
            {banks?.length > 0 && (
                <div className='relative flex flex-1 flex-col justify-center gap-5 items-center'>
                    BANK CARD 1
                </div>)}
                {banks[1] && (
                    <div className='absolute right-0 top-8 z-0 w-[90%]'></div>
                )}
        </section>
    </aside>
  )
}

export default RightSidebar;