import SectionHeading from '@/components/frontend/SectionHeading'
import { Card } from '@/components/ui/card'
import { getUserById } from '@/data/user'

import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React, { ReactNode } from 'react'

const Profile = async () => {
  const session = await getServerSession(authOptions)

  const user = session?.user

  const dbUser = await getUserById(user ? user.id : '')

  return (
    <div className="bg-white  pt-48">
      <div className="mx auto container">
        <Card className="">
          <div className="p-4">
            <SectionHeading title="Profile" />
          </div>
          <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
            <Attribute
              title="Name"
              value={`${dbUser?.firstName} ${dbUser?.lastName}`}
            />
            <Attribute title="Email" value={dbUser?.email} />
            <Attribute
              title="Registered On"
              value={dbUser?.createdAt.toLocaleDateString()}
            />
            <Attribute title="Properties Posted" value={1} />
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Profile

const Attribute = ({ title, value }: { title: string; value: ReactNode }) => (
  <div className="flex flex-col text-sm">
    <span className="font-semibold text-slate-800">{title}</span>
    <span className="text-slate-600">{value}</span>
  </div>
)
