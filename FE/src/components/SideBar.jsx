import React from 'react'
import { Search, ShoppingCartIcon } from 'lucide-react'

const SideBar = () => {
  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'Books', link: '/books' },
    { name: 'Categories', link: '/categories' },
    { name: 'Author', link: '/author' },
    { name: 'Contact', link: '/contact' }
  ];
  return (
    <header>
      <nav className='w-screen p-4 border-0 border-b-black flex justify-between px-20 items-center'>
        <div className=''>
          <img className = 'w-35 object-center' src="/BookNestLogo.png" alt="BookNestLogo" />
        </div>
        <ul className='flex gap-6 text-black/70'>
          {menuItems.map((items) => (<li key={items.name} className='transition-colors duration-200 cursor-pointer ease-in-out hover:text-blue-400'>{items.name}</li>))}
        </ul>
        <div className='flex gap-3'>
          <span><Search size={18} /></span>
          <span><ShoppingCartIcon size={18} /></span>
        </div>
      </nav>
    </header>
  )
}

export default SideBar
