import { ProductCard } from '@/components/frontend/ProductCard'
import { ProductCardSkeleton } from '@/components/frontend/ProductCardSkeleton'
import db from '@/lib/db'
import { Suspense } from 'react'

function getProducts() {
  return db.product.findMany({
    where: {
      isAvailableForPurchase: true,
    },
    orderBy: {
      name: 'asc',
    },
  })
}

export default function ProductsPage() {
  return (
    <div className=" container mx-auto grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3">
      <Suspense
        fallback={
          <>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </>
        }
      >
        <ProductSuspense />
      </Suspense>
    </div>
  )
}

async function ProductSuspense() {
  const products = await getProducts()

  return products.map((product) => (
    <ProductCard key={product.id} {...product} />
  ))
}
