import { type ClassValue, clsx } from "clsx"
import { Home } from "lucide-react"
import { twMerge } from "tailwind-merge"
import { Payment } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sidebarMenuList = [
  {
    menu: 'Dashboard',
    url: '/dashboard',
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
    menu: 'Consumers',
    url: '/consumers',
    iconName: 'Users'
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

export const stockAssests = [
  {
    assest: 'Gold',
    rate: 6.18,
    errorCorrection: +1.82,
    weight: 7.3,
    unit: 'gm',
  },
  {
    assest: 'Silver',
    rate: 6.18,
    errorCorrection: -1.82,
    weight: 7.3,
    unit: 'gm',
  },
]

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "489e1d45",
    amount: 120,
    status: "processing",
    email: "arpitv970@gmail.com",
  },
]

