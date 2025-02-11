"use client";

import Image from "@node_modules/next/image";
import Link from "@node_modules/next/link";
import {signIn,signOut,useSession,getProviders} from 'next-auth/react'

const Nav = () => {
  const isUserLoggedIn=true
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          width={30}
          height={30}
          src="/assets/images/logo.svg"
          alt="Promptopia Logo"
          className="object-contain"
        />
        <p className="logo_text">Promtopia</p>
      </Link>

      <div className="sm:flex hidden flex-row">
        {isUserLoggedIn ? (
          
            <div className="flex gap-3 md:gap-5">
              <Link href='/create-prompt' className="black_btn">Create Post</Link>
              <button type="button" onClick={signOut} className="outline_btn">Sign Out</button>
              <Link href="/profile"><Image width={37} height={37} className="rounded-full" alt="Profile" src="/assets/images/logo.svg"/></Link>
            </div>
         
      ):(<>
          <button className="black_btn" onClick={()=>signIn}>Sign In</button>
      </>)}
      </div>

      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? 
       ( <div className='flex'>
               <Image
          width={30}
          height={30}
          src="/assets/images/logo.svg"
          alt="Promptopia Logo"
          className="object-contain"
          // onClick={}
        />
        </div>  ):(
          <>
                    <button className="black_btn" onClick={()=>signIn}>Sign In</button>
                    </>
        )
      }
      </div>
    </nav>
  );
};

export default Nav;
