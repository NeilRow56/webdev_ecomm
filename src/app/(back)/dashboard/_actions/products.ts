'use server'

import db from '@/lib/db'
import { addProductSchema } from '@/schemas/admin'
import fs from 'fs/promises'
import { notFound, redirect } from 'next/navigation'

export async function addProduct(prevState: unknown, formData: FormData) {
  const result = addProductSchema.safeParse(
    Object.fromEntries(formData.entries())
  )

  if (result.success === false) {
    return result.error.formErrors.fieldErrors
  }

  const data = result.data

  const { name, description, priceInCents } = data

  await fs.mkdir('products', { recursive: true })
  const filePath = `products/${crypto.randomUUID}-${data.file.name}`
  await fs.writeFile(filePath, Buffer.from(await data.file.arrayBuffer()))

  await fs.mkdir('public/products', { recursive: true })
  const imagePath = `/products/${crypto.randomUUID}-${data.image.name}`
  await fs.writeFile(
    `public${imagePath}`,
    Buffer.from(await data.image.arrayBuffer())
  )

  await db.product.create({
    data: {
      isAvailableForPurchase: false,
      name,
      description,
      priceInCents,
      filePath,
      imagePath,
    },
  })

  redirect('/dashboard/products')
}

export async function toggleProductAvailability(
  id: string,
  isAvailableForPurchase: boolean
) {
  await db.product.update({
    where: { id: id },
    data: { isAvailableForPurchase },
  })
}

export async function deleteProduct(id: string) {
  const product = await db.product.delete({
    where: { id: id },
  })
  if (product == null) return notFound()
}
