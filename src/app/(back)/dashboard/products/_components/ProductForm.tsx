// 'use client'

// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import * as z from 'zod'
// import { useState, useTransition } from 'react'
// import { toast } from 'react-toastify'

// import { Input } from '@/components/ui/input'
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form'

// import { Button } from '@/components/ui/button'

// import { ProductSchema } from '@/schemas/admin'
// import { FormCard } from './FormCard'
// import { formatCurrency } from '@/lib/formatters'
// import { Textarea } from '@/components/ui/textarea'
// import { addProduct } from '../../_actions/products'
// import { useRouter } from 'next/navigation'

// export const ProductForm = () => {
//   const [isPending, startTransition] = useTransition()
//   const router = useRouter()
//   const [priceInCents, setPriceIncents] = useState<number>()
//   const form = useForm<z.infer<typeof ProductSchema>>({
//     resolver: zodResolver(ProductSchema),
//     defaultValues: {
//       name: '',
//       priceInCents: 0,
//       description: '',
//       // file: '',
//       // imagePath: '',
//     },
//   })

//   const onSubmit = (values: z.infer<typeof ProductSchema>) => {
//     startTransition(() => {
//       addProduct(values)
//         .then((data) => {
//           if (data?.error) {
//             form.reset()
//             toast.error(data.error)
//           }

//           if (data?.success) {
//             form.reset()
//             router.push('/dashboard')
//             toast.success(data.success)
//           }
//         })
//         .catch(() => toast.error('Something went wrong'))
//     })
//   }

//   return (
//     <FormCard>
//       <Form {...form}>
//         <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
//           <div className=" space-y-4">
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel htmlFor="name" className="flex w-full">
//                     Name
//                   </FormLabel>
//                   <FormControl>
//                     <Input
//                       type="text"
//                       id="name"
//                       {...field}
//                       disabled={isPending}
//                       placeholder="Product name"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="priceInCents"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel htmlFor="priceInCents" className="flex w-full">
//                     Price In Cents
//                   </FormLabel>
//                   <FormControl>
//                     <Input
//                       type="number"
//                       id="priceInCents"
//                       {...field}
//                       disabled={isPending}
//                       placeholder="Price in cents"
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <div className="text-muted-foreground">
//               {formatCurrency((priceInCents || 0) / 100)}
//             </div>
//           </div>
//           <FormField
//             control={form.control}
//             name="description"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel htmlFor="description" className="flex w-full">
//                   Description
//                 </FormLabel>
//                 <FormControl>
//                   <Textarea
//                     id="description"
//                     {...field}
//                     disabled={isPending}
//                     placeholder="Product description"
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="file"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel htmlFor="file" className="flex w-full">
//                   File
//                 </FormLabel>
//                 <FormControl>
//                   <Input
//                     type="file"
//                     id="file"
//                     {...field}
//                     disabled={isPending}
//                     placeholder="File"
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="imagePath"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel htmlFor="file" className="flex w-full">
//                   Image
//                 </FormLabel>
//                 <FormControl>
//                   <Input
//                     type="file"
//                     id="imagePath"
//                     {...field}
//                     disabled={isPending}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <Button disabled={isPending} type="submit" className="w-full">
//             Save
//           </Button>
//         </form>
//       </Form>
//     </FormCard>
//   )
// }
