import { formatCurrency } from '@/lib/formatters'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'

type ProductCardProps = {
  name: string
  priceInCents: number
  description: string
  id: string
  imagePath: string
}

export function ProductCard({
  name,
  priceInCents,
  description,
  id,
  imagePath,
}: ProductCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="relative aspect-video h-auto w-full">
        <Image src={imagePath} alt="Product Image" fill />
      </div>
      <CardHeader>
        <CardTitle className="px-6">{name}</CardTitle>
        <CardDescription className="px-6">
          {formatCurrency(priceInCents / 100)}
        </CardDescription>
        <CardContent className="flex-grow ">
          <p className="line-clamp-4">{description}</p>
        </CardContent>
        <CardFooter>
          <Button asChild size="lg" className="w-full">
            <Link href={`/products/${id}/purchase`}>Purchase</Link>
          </Button>
        </CardFooter>
      </CardHeader>
    </Card>
  )
}
