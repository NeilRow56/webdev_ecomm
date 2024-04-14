import { PageHeader } from '@/components/dashboard-layout/PageHeader'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function AdminProductsPage() {
  return (
    <>
      <div className=" flex items-center justify-between gap-4">
        <PageHeader>Products</PageHeader>
        <Button asChild>
          <Link href="/dashboard/product/new">Add Product</Link>
        </Button>
      </div>
    </>
  )
}

export default AdminProductsPage
