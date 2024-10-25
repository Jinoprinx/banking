"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";


const MobileNav = ({user}: MobileNavProps) => {
  const pathName = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            height={30}
            width={30}
            alt="menu"
            className="cursor-pointer"/>
        </SheetTrigger>
        <SheetContent side='left' className='border-none bg-white'>
            <a  href="/" className='cursor-pointer items-center gap-1 px-4 flex'>
                <Image 
                    src="/icons/logo.svg" 
                    alt="qwikbank logo"
                    width={34}
                    height={34}
                    />
                <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>QwikBank</h1>
            </a>
            <div className='mobilenav-sheet'>
              <SheetClose asChild>
                <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                        {sidebarLinks.map((item)=>{
                        const isActive = pathName=== item.route || pathName.startsWith(`${item.route}/`)
                        return(
                          <SheetClose asChild key={item.route}>
                            <a href={item.route} key={item.label}
                                className={cn('mobilenav-sheet_close w-full', {
                                    'bg-bank-gradient':
                                    isActive
                                    })}>
                                        <Image 
                                            src={item.imgURL}
                                            alt={item.label}
                                            width={20}
                                            height={20}
                                            className={cn({
                                                'brightness-[3] invert-0':
                                                isActive
                                            })}/>
                                    <p className={cn(
                                        'text-16 font-semibold text-black-2', {'text-white' : isActive}
                                    )}>
                                        {item.label}
                                    </p>
                            </a>
                          </SheetClose>
                        )
                    })}
                    USER
                </nav>
              </SheetClose>
              FOOTER
            </div>
        </SheetContent>
      </Sheet>
  </section>
  )
}

export default MobileNav;