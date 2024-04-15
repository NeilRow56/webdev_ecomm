import { PageHeader } from '@/components/dashboard-layout/PageHeader'
import { ProductForm } from '../_components/ProductForm'
import { AdminProductForm } from '../_components/AdminProductForm.tsx'

export default function CreateProductPage() {
  return (
    <>
      <PageHeader>Add Product</PageHeader>
      <AdminProductForm />
    </>
  )
}
