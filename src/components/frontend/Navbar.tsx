'use client'

import { ThemeToggle } from '../dashboard-layout/ThemeToggle'
import { Button } from '../ui/button'
import Link from 'next/link'
import { LogOut } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useSession } from 'next-auth/react'

function Navbar() {
  // Holding userId ready for auth
  const { data: session } = useSession()

  const user = session?.user

  const navbarLinks = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Doctors',
      href: '/doctors/1',
    },
    {
      title: 'Telehealth',
      href: '/teleheath-visit',
    },

    {
      title: 'Service',
      href: '/join/doctors',
    },
  ]

  var myDate = new Date()
  var hrs = myDate.getHours()

  var greet

  if (hrs < 12) greet = 'Good Morning!'
  else if (hrs >= 12 && hrs <= 17) greet = 'Good Afternoon!'
  else if (hrs >= 17 && hrs <= 24) greet = 'Good Evening!'

  return (
    <div className="flex h-14 items-center justify-between gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <div className="flex  items-start  gap-4 text-xl text-primary">
        <h2
          className={` hidden bg-gradient-to-r from-orange-800 to-orange-300 bg-clip-text text-2xl font-bold text-transparent lg:block`}
        >
          {greet}
        </h2>
      </div>

      <div className="items-center space-x-8 px-2 py-1 font-semibold leading-7 text-primary ">
        {navbarLinks.map((item) => (
          <Link
            key={item.title}
            className="hover:text-foreground"
            href={item.href}
          >
            {item.title}
          </Link>
        ))}
        {user ? <Link href="/dashboard">Dashboard</Link> : ''}
      </div>

      <div className=" flex  items-center   gap-6 pr-16">
        <ThemeToggle />
        {user ? (
          <div className="flex w-full">
            <div className=" space-x-2">
              <DropdownMenu>
                <DropdownMenuTrigger className=" text-primary">
                  <Avatar className="mt-2 h-12 w-12">
                    <AvatarImage src="/profile.jpg" />
                    <AvatarFallback>DR</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <h2>{user.email}</h2>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/user/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/edgestore">edgestore</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="menuItem" onClick={() => {}}>
                    <LogOut size={20} />
                    <Link
                      className=" tex-lg text-sky-500 transition-colors hover:text-sky-600"
                      href={'/api/auth/signout'}
                    >
                      Sign Out
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="pt-4">
              <Button asChild size="sm" className="ml-4  px-6 ">
                <Link href="/login">{user.firstName}-active</Link>
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <Button asChild size="sm" className="px-6  ">
              <Link href="/login">Login</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
