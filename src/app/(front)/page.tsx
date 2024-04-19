import Hero from '@/components/frontend/Hero'
import { ProductGridSection } from '@/components/frontend/ProductGridSecion'
import db from '@/lib/db'

function getMostPopularProducts() {
  return db.product.findMany({
    where: {
      isAvailableForPurchase: true,
    },
    orderBy: {
      orders: { _count: 'desc' },
    },
    take: 6,
  })
}
function getNewestProducts() {
  return db.product.findMany({
    where: {
      isAvailableForPurchase: true,
    },
    orderBy: { createdAt: 'desc' },
    take: 6,
  })
}

export default async function LandingPage() {
  return (
    <section className="container mx-auto bg-background ">
      {/* <Hero /> */}
      <div className="space-y-12">
        <ProductGridSection
          productsFetcher={getMostPopularProducts}
          title="Most Popular"
        />
        <ProductGridSection
          productsFetcher={getNewestProducts}
          title="Newest"
        />
      </div>
    </section>
  )
}
