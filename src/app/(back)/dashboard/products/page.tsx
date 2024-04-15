import { PageHeader } from '@/components/dashboard-layout/PageHeader'
import { ProductsTable } from '@/components/dashboard-layout/ProductsTable'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function AdminProductsPage() {
  return (
    <>
      <div className=" flex items-center justify-between gap-4">
        <PageHeader>Products</PageHeader>
        <Button asChild>
          <Link href="/dashboard/products/new">Add Product</Link>
        </Button>
      </div>
      <ProductsTable />
    </>
  )
}

export default AdminProductsPage
