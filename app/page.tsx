import { FC } from 'react';
import { promises as fs } from 'fs';
import path from 'path';
import Map from '@/components/ui/map/map';
import { Street } from '@/types';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/primitives/card';
import WelcomeDialog from '@/components/ui/welcome-dialog';
import Filters from '@/components/ui/filters';

export const getStreets = async (): Promise<Street[]> => {
  const filePath = path.join(process.cwd(), 'data', 'streets.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
};

const Home: FC = async () => {
  // todo: can this be memoized?
  const streets = await getStreets();

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
              <Map streets={streets} />
            </CardContent>
          </Card>
        </div>

        {/* todo: put these in a collapsible? */}
        <Filters streets={streets} />

      </div>
    </div>
  );
};

export default Home;
