import { FC } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from './primitives/card';
import { FilterProps } from '@/types';

export const Filters: FC<FilterProps> = ({ streets }: FilterProps) => (
    <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-sm">
                    {streets.filter((s) => s.type === "politics").length}
                  </span>
                </div>
                politicians
              </CardTitle>
              <CardDescription>Women who held political office in Berlin</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">
                    {streets.filter((s) => s.type === "resistance").length}
                  </span>
                </div>
                resistance members
              </CardTitle>
              <CardDescription>Women who risked their lives for justice during WW2</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold text-sm">
                    {streets.filter((s) => s.type === "literature & arts").length}
                  </span>
                </div>
                writers & artists
              </CardTitle>
              <CardDescription>Women who have contributed to Berlin's rich cultural fabric</CardDescription>
            </CardHeader>
          </Card>
        </div>
)