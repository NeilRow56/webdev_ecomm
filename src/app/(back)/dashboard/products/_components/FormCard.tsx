'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'

type CardWrapperProps = {
  children: React.ReactNode
}

export const FormCard = ({ children }: CardWrapperProps) => {
  return (
    <Card className=" mx-auto max-w-5xl shadow-md">
      <CardHeader></CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
