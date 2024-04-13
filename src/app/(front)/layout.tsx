import MegaMenu from '@/components/frontend/MegaMenu'
import Navbar from '@/components/frontend/Navbar'
import React, { ReactNode } from 'react'

function FrontLayout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <Navbar />
      <div className=" fixed  top-16 z-50 w-full bg-background py-6 pl-4 md:pl-24 lg:pl-64">
        <MegaMenu />
      </div>
      <div className="pt-[150px]">{children}</div>
    </div>
  )
}
export default FrontLayout
