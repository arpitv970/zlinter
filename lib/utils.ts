import { type ClassValue, clsx } from "clsx"
import { Home } from "lucide-react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sidebarMenuList = [
  {
    menu: 'Dashboard',
    url: '/',
    iconName: 'Home'
  },
  {
    menu: 'Bullion Operations',
    url: '/bullion-ops',
    iconName: 'Target'
  },
  {
    menu: 'Transactions',
    url: '/transaction',
    iconName: 'ArrowRightLeft'
  },
  {
    menu: 'Other Operations',
    url: '/other-ops',
    iconName: 'Layers'
  },
  {
    menu: 'Manage Bank Accounts',
    url: '/manage-bank-acc',
    iconName: 'Landmark'
  },
  {
    menu: 'FAQ',
    url: '/faq',
    iconName: 'HelpCircle'
  },
  {
    menu: 'Customise Dashboard',
    url: '/dashboard/edit',
    iconName: 'Settings'
  },
]

export const getMenuIcon = (menu: string, key: number): string => {
  if (menu === sidebarMenuList[key].menu) {
    return sidebarMenuList[key].iconName
  }
  else {
    return ''
  }
}
