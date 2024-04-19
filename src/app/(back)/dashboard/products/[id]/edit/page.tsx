import { PageHeader } from '@/components/dashboard-layout/PageHeader'
import { AdminProductForm } from '../../_components/AdminProductForm.tsx'
import db from '@/lib/db'

export default async function EditProductPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const product = await db.product.findUnique({
    where: {
      id: id,
    },
  })
  return (
    <>
      <PageHeader>Edit Product</PageHeader>
      <AdminProductForm product={product} />
    </>
  )
}
