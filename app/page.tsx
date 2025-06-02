import { promises as fs } from "fs"
import path from "path"
import Map from "@/components/map"
import { ThemeToggle } from "@/components/themeToggle"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Location {
  id: number
  name: string
  type: "museum" | "park" | "shop"
  lat: number
  lng: number
  description: string
  address: string
}

async function getLocations(): Promise<Location[]> {
  const filePath = path.join(process.cwd(), "data", "locations.json")
  const fileContents = await fs.readFile(filePath, "utf8")
  return JSON.parse(fileContents)
}

export default async function Home() {
  const locations = await getLocations()

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
              <Map locations={locations} />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">
                    {locations.filter((l) => l.type === "museum").length}
                  </span>
                </div>
                Museums
              </CardTitle>
              <CardDescription>World-class museums with art, history, and science exhibitions</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">
                    {locations.filter((l) => l.type === "park").length}
                  </span>
                </div>
                Parks
              </CardTitle>
              <CardDescription>Beautiful green spaces and royal parks for relaxation and recreation</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold text-sm">
                    {locations.filter((l) => l.type === "shop").length}
                  </span>
                </div>
                Shopping
              </CardTitle>
              <CardDescription>From luxury department stores to unique markets and boutiques</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  )
}
