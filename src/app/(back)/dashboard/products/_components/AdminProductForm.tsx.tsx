'use client'

import { Label } from '@/components/ui/label'
import { FormCard } from './FormCard'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { formatCurrency } from '@/lib/formatters'
import { Textarea } from '@/components/ui/textarea'

import { addProduct } from '../../_actions/products'
import { SubmitButton } from '@/components/frontend/SubmitButton'

import { useFormState } from '@/react-dom-shim'

export function AdminProductForm() {
  const [error, action] = useFormState(addProduct, {})
  const [priceInCents, setPriceInCents] = useState<number>()
  return (
    <FormCard>
      <form action={action} className="space-y-8">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" required />
          {error.name && <div className="text-destructive">{error.name}</div>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="priceInCents">Price In Cents</Label>
          <Input
            type="number"
            id="priceInCents"
            name="priceInCents"
            required
            value={priceInCents}
            onChange={(e) =>
              setPriceInCents(Number(e.target.value) || undefined)
            }
          />
          {error.priceInCents && (
            <div className="text-destructive">{error.priceInCents}</div>
          )}
          <div className="text-muted-foreground">
            {formatCurrency((priceInCents || 0) / 100)}
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" required />
          </div>
          {error.description && (
            <div className="text-destructive">{error.description}</div>
          )}
          <div className="space-y-2">
            <Label htmlFor="file">File</Label>
            <Input type="file" id="file" name="file" required />
          </div>
          {error.file && <div className="text-destructive">{error.file}</div>}
          <div className="space-y-2">
            <Label htmlFor="image">File</Label>
            <Input type="file" id="image" name="image" required />
          </div>
          {error.image && <div className="text-destructive">{error.image}</div>}
          <SubmitButton />
        </div>
      </form>
    </FormCard>
  )
}
