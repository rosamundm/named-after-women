import { districts } from "@/data/districts";
import { streets } from '@/data/streets'
import Map from "@/components/Map"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default async function Home() {

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-start mb-8">
          <div className="text-center flex-1">
            <h1 className="text-4xl font-bold tracking-tight mb-4">named after women</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              mapping out women's history in berlin
            </p>
          </div>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Map</CardTitle>
              <CardDescription>
                Click on markers to learn more about each location. Use the filter buttons to show specific types of
                places.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Map streets={streets} districts={districts} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
