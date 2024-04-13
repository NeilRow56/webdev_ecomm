'use client'

import { Button } from '../ui/button'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { LogOut, Search } from 'lucide-react'
import { Input } from '../ui/input'
import { ThemeToggle } from './ThemeToggle'
import { useSession } from 'next-auth/react'

function DashboardNavbar() {
  // Holding userId ready for auth
  const { data: session } = useSession()

  const user = session?.user

  var myDate = new Date()
  var hrs = myDate.getHours()

  var greet

  if (hrs < 12) greet = 'Good Morning!'
  else if (hrs >= 12 && hrs <= 17) greet = 'Good Afternoon!'
  else if (hrs >= 17 && hrs <= 24) greet = 'Good Evening!'

  return (
    <div className="flex h-16 w-full items-center justify-between  border  border-gray-600  bg-white px-2 dark:bg-neutral-950  md:px-4 lg:px-8 xl:px-24">
      <div className="">
        <div>
          <p className="text-xl text-primary">{greet}</p>
        </div>
      </div>
      <div className="relative hidden lg:block ">
        <Search className="absolute left-4 top-3 hidden h-4 w-4 text-muted-foreground lg:block" />
        <Input
          placeholder="Search"
          name="search"
          className="primary/40 rounded-lg pl-10 dark:border-gray-300"
        />
      </div>
      <div className=" flex  items-center   gap-6 pr-6">
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
                    <Link href="/dashboard">Dashboard</Link>
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

export default DashboardNavbar
