'use client'

import {
  Clapperboard,
  Cog,
  Compass,
  Heart,
  Home,
  LayoutDashboard,
  MessageCircle,
  PlusSquare,
  Search,
  User2,
} from 'lucide-react'
import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { buttonVariants } from '../ui/button'

const links = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  {
    name: 'Search',
    href: '/dashboard/search',
    icon: Search,
    hideOnMobile: true,
  },
  { name: 'Products', href: '/dashboard/products', icon: Compass },
  {
    name: 'Orders',
    href: '/dashboard/orders',
    icon: Clapperboard,
  },
  {
    name: 'Users',
    href: '/dashboard/users',
    icon: User2,
  },
  {
    name: 'Sales',
    href: '/dashboard/sales',
    icon: Heart,
    hideOnMobile: true,
  },
  {
    name: 'Customers',
    href: '/dashboard/customers',
    icon: PlusSquare,
  },
  {
    name: 'Settings',
    href: '/dashboard/settings',
    icon: Cog,
  },
]

function NavLinks() {
  const pathname = usePathname()

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon
        const isActive = pathname === link.href

        return (
          <Link
            key={link.name}
            href={link.href}
            className={buttonVariants({
              variant: isActive ? 'secondary' : 'ghost',
              className: cn('navLink', { 'hidden md:flex': link.hideOnMobile }),
              size: 'lg',
            })}
          >
            <LinkIcon className="w-6" />
            <p
              className={`${cn('hidden lg:block', {
                'font-extrabold': isActive,
              })}`}
            >
              {link.name}
            </p>
          </Link>
        )
      })}
    </>
  )
}

export default NavLinks
