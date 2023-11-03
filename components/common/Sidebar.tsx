import { getMenuIcon, sidebarMenuList } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import IconRender from '../utility/IconRender'

const Sidebar = () => {
  return (
    <section className='sidebar'>
      <section className='sidebar-subsec logo'>
        <img src='/logos/zintlr.svg' alt='zintlr' />
      </section>
      <section className='sidebar-subsec sidebar-menu-list'>
        {
          sidebarMenuList.map((item, key) => (
            <Link key={key} href={item.url}>
              <span className='menu-list-item'>
                <span className='menu-icon'>
                  <IconRender size={30} iconName={getMenuIcon(item.menu, key)} />
                </span>
                <span className='menu-name'>
                  {item.menu}
                </span>
              </span>
            </Link>
          ))
        }
      </section>
      <section className='sidebar-subsec stock-sec'>

      </section>
    </section>
  )
}

export default Sidebar
