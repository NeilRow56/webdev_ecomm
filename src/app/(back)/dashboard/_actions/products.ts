'use server'

import db from '@/lib/db'
import { addProductSchema, editProductSchema } from '@/schemas/admin'
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
  const filePath = `products/${crypto.randomUUID()}-${data.file.name}`
  await fs.writeFile(filePath, Buffer.from(await data.file.arrayBuffer()))

  await fs.mkdir('public/products', { recursive: true })
  const imagePath = `/products/${crypto.randomUUID()}-${data.image.name}`
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

  await fs.unlink(product.filePath ?? '{}')
  await fs.unlink(`public${product.imagePath ?? '{}'}`)

  //The double question mark (??) in JavaScript, also known as the nullish coalescing operator, is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, otherwise it returns the left-hand side. This operator provides a cleaner syntax for selecting the first "defined" value from a list.
}

export async function updateProduct(
  id: string,
  prevState: unknown,
  formData: FormData
) {
  const result = editProductSchema.safeParse(
    Object.fromEntries(formData.entries())
  )

  if (result.success === false) {
    return result.error.formErrors.fieldErrors
  }

  const data = result.data
  const product = await db.product.findUnique({
    where: {
      id: id,
    },
  })

  if (product == null) return notFound()

  let filePath = product.filePath

  if (data.file != null && data.file.size > 0) {
    await fs.unlink(product.filePath || '{}')
    filePath = `products/${crypto.randomUUID()}-${data.file.name}`
    await fs.writeFile(filePath, Buffer.from(await data.file.arrayBuffer()))
  }

  let imagePath = product.imagePath

  if (data.image != null && data.image.size > 0) {
    await fs.unlink(`public${product.imagePath}  `)
    imagePath = `/products/${crypto.randomUUID()}-${data.image.name}`
    await fs.writeFile(
      `public${imagePath}`,
      Buffer.from(await data.image.arrayBuffer())
    )
  }

  // const { name, description, priceInCents } = data

  await db.product.update({
    where: {
      id: id,
    },
    data: {
      name: data.name,
      description: data.description,
      priceInCents: data.priceInCents,
      filePath,
      imagePath,
    },
  })

  redirect('/dashboard/products')
}
