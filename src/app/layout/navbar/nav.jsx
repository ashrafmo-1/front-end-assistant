import React from 'react';
import Link from "next/link";

const navigation = [
  { name: 'home', href: '/' },
  { name: 'contributors', href: '/pages/admins' },
  { name: 'Projects', href: '/' },
  { name: 'learn', href: '/' },
];

const NavgationBar = () => {
  return (
    <section className='navgationBar bg-gradient-to-r from-blue-400 border-blue-400 border-b-2 py-2'>
      <div className='container_content w-4/5 m-auto flex items-center justify-between'>
        <Link href={"/"} className='brand text-3xl font-bold text-black capitalize'>front-end assistant</Link>
        <nav className='links flex gap-4'>
          {navigation.map((link) => (
            <>
              <Link href={link.href} className='link cursor-pointer text-black capitalize'>{link.name}</Link>
              <Link href={""}></Link>
            </>
          ))}
        </nav>
      </div>
    </section>
  )
}

export default NavgationBar;