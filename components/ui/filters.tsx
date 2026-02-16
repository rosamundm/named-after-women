import { FC } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from './primitives/card';
import { FilterProps } from '@/types';
import { getTagInfo } from '@/data/filterInfo';

const Filters: FC<FilterProps> = ({ streets }: FilterProps) => (
    <div className="grid gap-6 md:grid-cols-3">
        {getTagInfo(streets).map((tag, index) => (
            <Card key={index}>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-semibold text-sm">
                                {tag.count}
                            </span>
                        </div>
                        {tag.name}
                    </CardTitle>
                    <CardDescription>
                        {tag.description}
                    </CardDescription>
                </CardHeader>
            </Card>
        ))}
    </div>
)

export default Filters;
