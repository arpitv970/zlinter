import React from 'react'
import { Bell, Wallet } from 'lucide-react'
import SearchBar from '../utility/SearchBar'
import AvtarIcon from '../utility/AvtarIcon'
import DarkMode from '../utility/DarkMode'
import NotificationMenu from '../utility/NotificationMenu'
import UserMenu from '../utility/UserMenu'
import WalletMenu from '../utility/WalletMenu'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <span className='searchSpan '>
        <SearchBar inputType='text' />
      </span>
      <span className='actionSpan'>
        <WalletMenu />
        <NotificationMenu />
        <DarkMode />
        <UserMenu />
      </span>
    </nav>
  )
}

export default Navbar
