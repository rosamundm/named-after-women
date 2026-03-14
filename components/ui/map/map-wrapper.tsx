"use client";

import { useState } from 'react';
import { Street } from '@/types';
import { DropdownGroup, DropdownState } from '../dropdowns';

import Map from './map';

type MapWrapperProps = {
  streets: Street[];
};

const dropdownInitialState: DropdownState = {
    tag: 'all',
    district: 'all'
}

const MapWrapper = ({ streets }: MapWrapperProps) => {
    const [dropdownFilters, setDropdownFilters] = useState<DropdownState>(dropdownInitialState);

    return (
        <>
            <DropdownGroup data={streets} filters={dropdownFilters} setFilters={setDropdownFilters} />
            <Map streets={streets} filters={dropdownFilters} />
        </>
    );
}

export default MapWrapper;