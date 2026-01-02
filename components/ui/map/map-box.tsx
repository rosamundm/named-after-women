import { FC } from 'react';

import { MapBoxProps } from '@/types';

const MapBox: FC<MapBoxProps> = ({ streets }) => (
    <div className="flex h-full w-full">
        <div className="flex w-64 flex-col gap-4 p-4">
            {/* todo: add items here */}
            <div className="rounded-lg bg-base-200 p-3">1</div>
        </div>
        <div className="flex-1">
            <Map streets={streets} />
        </div>
    </div>
)

export default MapBox;