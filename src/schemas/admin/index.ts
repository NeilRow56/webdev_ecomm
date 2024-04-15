import * as z from 'zod'

export const ProductSchema = z.object({
  name: z.string().min(2, {
    message: 'Product name must be at least 2 characters.',
  }),
  priceInCents: z.coerce
    .number({
      required_error: 'Pricein cents is required',
      invalid_type_error: 'Cents must be a number',
    })
    .int()
    .positive()
    .min(1, { message: 'Cents should be at least 1' }),
})
