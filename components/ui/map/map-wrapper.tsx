"use client";

import { District, Street, Tag } from '@/types';
import { useState } from 'react';
import { DropdownGroup } from '../dropdowns';

import Map from './map';

type MapWrapperProps = {
  streets: Street[];
};

const MapWrapper = ({ streets }: MapWrapperProps) => {
    const [dropdownFilters, setDropdownFilters] = useState<{
        tag: Tag;
        district: District;
    }>({
        tag: '',
        district: ''
    });

    return (
        <>
            <DropdownGroup data={streets} filters={dropdownFilters} setFilters={setDropdownFilters} />
            <Map streets={streets} filters={dropdownFilters} />
        </>
    );
}

export default MapWrapper;