import DashboardCard from '@/components/dashboard-layout/DashboardCard'
import db from '@/lib/db'

import { formatCurrency, formatNumber } from '@/lib/formatters'

async function getSalesData() {
  const data = await db.order.aggregate({
    _sum: { pricePaidInCents: true },
    _count: true,
  })

  return {
    amount: (data._sum.pricePaidInCents || 0) / 100,
    numberOfSales: data._count,
  }
}

async function DashboardPage() {
  const salesData = await getSalesData()

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <DashboardCard
        title="Sales"
        subtitle={formatNumber(salesData.numberOfSales)}
        description={formatCurrency(salesData.amount)}
      />
    </div>
  )
}

export default DashboardPage
