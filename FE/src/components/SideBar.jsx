import React from 'react'
import { Search, ShoppingCartIcon } from 'lucide-react'

const SideBar = () => {
  return (
    <header>
      <nav className='w-screen p-4 border-0 border-b-black flex justify-between px-20 items-center'>
        <div className=''>
            Logo
        </div>
        <ul className='flex gap-6 text-black/70'>
            <li className='transition-colors duration-200 cursor-pointer ease-in-out hover:text-blue-400'>Home</li>
            <li className='transition-colors duration-200 cursor-pointer ease-in-out hover:text-blue-400'>Books</li>
            <li className='transition-colors duration-200 cursor-pointer ease-in-out hover:text-blue-400'>Categories</li>
            <li className='transition-colors duration-200 cursor-pointer ease-in-out hover:text-blue-400'>Author</li>
            <li className='transition-colors duration-200 cursor-pointer ease-in-out hover:text-blue-400'>Contact</li>
        </ul>
        <div className='flex gap-3'>
            <span><Search size={18}/></span>
            <span><ShoppingCartIcon size={18}/></span>
        </div>
      </nav>
    </header>
  )
}

export default SideBar
