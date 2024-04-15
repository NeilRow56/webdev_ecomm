'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useState, useTransition } from 'react'
import { toast } from 'sonner'

import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { Button } from '@/components/ui/button'
import { CardWrapper } from '@/components/frontend/auth/CardWrapper'
import { ProductSchema } from '@/schemas/admin'
import { FormCard } from './FormCard'

export const ProductForm = () => {
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: '',
      priceInCents: 0,
    },
  })

  const onSubmit = (values: z.infer<typeof ProductSchema>) => {
    console.log(values)
  }

  return (
    <FormCard>
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className=" space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="name" className="flex w-full">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      id="name"
                      {...field}
                      disabled={isPending}
                      placeholder="Product name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="priceInCents"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="priceInCents" className="flex w-full">
                    Price In Cents
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      id="priceInCents"
                      {...field}
                      disabled={isPending}
                      placeholder="Price in cents"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button disabled={isPending} type="submit" className="w-full">
            Save
          </Button>
        </form>
      </Form>
    </FormCard>
  )
}
