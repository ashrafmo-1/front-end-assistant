import React from 'react';
import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react';
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavgationBar = () => {
  return (
    <div className='brand bg-blue-600 text-stone-400 text-9xl'> brand name </div>
  )
}

export default NavgationBar;

