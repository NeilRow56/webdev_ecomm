import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type DashboardCardProps = {
  title: string
  subtitle: string
  description: string
}

function DashboardCard({ title, subtitle, description }: DashboardCardProps) {
  return (
    <div className="">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </CardHeader>

        <CardContent>{description}</CardContent>
      </Card>
    </div>
  )
}

export default DashboardCard
