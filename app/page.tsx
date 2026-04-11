import { FC } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/primitives/card';
import WelcomeDialog from '@/components/ui/welcome-dialog';
import MapWrapper from '@/components/ui/map/map-wrapper';
import { getStreets } from '@/data/fetch';
import { Street } from '@/types';

const Home: FC = async () => {
  let streets: Street[] = []
  let error = null

  try {
    streets = await getStreets()
  } catch (err) {
    error = err instanceof Error ? err.message : 'Failed to load streets'
    console.error(error)
  }

  if (error) {
    return <div>Error loading streets: {error}</div>
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-start mb-8">
          <div className="text-center flex-1">
            <WelcomeDialog />
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              named after women
            </h1>
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
                Click on the markers to learn more about each street and the person
                it's named after.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <MapWrapper streets={streets} />
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default Home;
