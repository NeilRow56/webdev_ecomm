import { File } from 'buffer'
import * as z from 'zod'

const fileSchema = z.any()

const imageSchema = fileSchema.refine(
  (file) => file.size === 0 || file.type.startsWith('image/')
)

export const addProductSchema = z.object({
  name: z.string().min(2, {
    message: 'Product name must be at least 2 characters.',
  }),
  description: z.string().min(2, {
    message: 'Product description must be at least 2 characters.',
  }),
  priceInCents: z.coerce
    .number({
      required_error: 'Pricein cents is required',
      invalid_type_error: 'Cents must be a number',
    })
    .int()
    .min(1, { message: 'Cents should be at least 1' }),

  file: fileSchema.refine((file) => file.size > 0, 'Required'),

  image: imageSchema.refine((file) => file.size > 0, 'Required'),
})

export const editProductSchema = addProductSchema.extend({
  file: fileSchema.optional(),
  image: imageSchema.optional(),
})
