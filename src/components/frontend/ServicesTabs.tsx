import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function ServicesTabs() {
  const tabInfo = [
    {
      title: 'Symptoms',
      value: 'symptoms',
      content: [],
    },
    {
      title: 'Popular Services',
      value: 'popular_services',
      content: [],
    },
    {
      title: 'Doctors',
      value: 'doctors',
      content: [],
    },
    {
      title: 'Specialists',
      value: 'specialists',
      content: [],
    },
  ]

  return (
    <Tabs defaultValue="account" className="w-[600px]">
      <TabsList className="grid w-full grid-cols-4 bg-slate-300 text-primary">
        {tabInfo.map((tab, i) => {
          return (
            <TabsTrigger key={i} value={tab.value}>
              {tab.title}
            </TabsTrigger>
          )
        })}
      </TabsList>

      {tabInfo.map((tab, i) => {
        return (
          <TabsContent key={i} value={tab.value}>
            <Card>
              <CardHeader>
                <CardTitle>{tab.title}</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you&apos;re
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor={tab.value}>{tab.title}</Label>
                  <Input id={tab.value} defaultValue="placeholder" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@peduarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        )
      })}
    </Tabs>
  )
}
