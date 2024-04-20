import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'

export function ProductCardSkeleton() {
  return (
    <Card className="flex animate-pulse flex-col overflow-hidden">
      <div className="aspect-video w-full bg-gray-300" />
      <CardHeader>
        <CardTitle className="px-6">
          <div className="h-6 w-3/4 rounded-full bg-gray-300" />
        </CardTitle>
        <CardDescription className="px-6">
          <div className="h-4 w-1/2 rounded-full bg-gray-300" />
        </CardDescription>
        <CardContent className="flex-grow space-y-2">
          <div className="h-4 w-full rounded-full bg-gray-300" />
          <div className="h-4 w-full rounded-full bg-gray-300" />
          <div className="h-4 w-3/4 rounded-full bg-gray-300" />
        </CardContent>
        <CardFooter>
          <Button disabled size="lg" className="w-full"></Button>
        </CardFooter>
      </CardHeader>
    </Card>
  )
}
