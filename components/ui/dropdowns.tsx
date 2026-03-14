"use client";

import { FC, useMemo, useState } from 'react';

import * as Select from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";

import { District, Street, Tag } from '@/types';
import { districtNames, getTagInfo } from '@/data/filterInfo';

type Filters = {
    tag: Tag;
    district: District;
}

export interface DropdownState {
  tag: Tag;
  district: District;
}

interface DropdownGroupProps { 
    data: Street[];
    filters?: DropdownState;
    setFilters: React.Dispatch<React.SetStateAction<DropdownState>>;
}

// todo: maybe this would work better as a multi-select dropdown

export const DropdownGroup: FC<DropdownGroupProps> = ({ data, filters, setFilters }) => {
    const tagNames = getTagInfo(data).map(tag => tag.name);

    const handleFilterChange = (
        name: keyof Filters,
        value: Filters[keyof Filters]
    ) => {
        setFilters((prev: Filters) => ({
            ...prev,
            [name]: value,
        }));
    };
  
  return (
    <div className="dropdown-group">
        <div className="space-y-6">
            <div className="flex gap-4">

                {/* tag filter */}
                <Select.Root
                    value={filters?.tag || 'all'}
                    onValueChange={(value) => handleFilterChange('tag', value as Tag)}
                >
                    <Select.Trigger className="flex items-center justify-between w-48 px-3 py-2 border rounded">
                        <Select.Value placeholder="All tags" />
                        <Select.Icon>
                            <ChevronDownIcon />
                        </Select.Icon>
                    </Select.Trigger>

                    <Select.Portal>
                        <Select.Content className="bg-white shadow-md rounded">
                            <Select.Viewport>
                                <Select.Item value="all">
                                    <Select.ItemText>All tags</Select.ItemText>
                                </Select.Item>

                                    {tagNames.map((tagName, index) => (
                                        <Select.Item
                                            key={index}
                                            value={tagName}
                                            className="flex items-center justify-between px-3 py-2 hover:bg-gray-100"
                                        >
                                            <Select.ItemText>{tagName}</Select.ItemText>
                                            <Select.ItemIndicator>
                                                <CheckIcon />
                                            </Select.ItemIndicator>
                                        </Select.Item>
                                    ))}
                            </Select.Viewport>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>

                <Select.Root
                    value={filters?.district || 'all'}
                    onValueChange={(value) => handleFilterChange('district', value as District)}
                >
                    <Select.Trigger className="flex items-center justify-between w-48 px-3 py-2 border rounded">
                        <Select.Value placeholder="All districts" />
                        <Select.Icon>
                            <ChevronDownIcon />
                        </Select.Icon>
                    </Select.Trigger>


                    {/* district filter */}
                    <Select.Portal>
                        <Select.Content className="bg-white shadow-md rounded">
                            <Select.Viewport>
                                <Select.Item value="all">
                                    <Select.ItemText>All districts</Select.ItemText>
                                </Select.Item>

                                    {districtNames.map((district, index) => (
                                        <Select.Item
                                            key={index}
                                            value={district}
                                            className="flex items-center justify-between px-3 py-2 hover:bg-gray-100"
                                        >
                                            <Select.ItemText>{district}</Select.ItemText>
                                            <Select.ItemIndicator>
                                                <CheckIcon />
                                            </Select.ItemIndicator>
                                        </Select.Item>
                                    ))}
                            </Select.Viewport>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>

            </div>
        </div>
    </div>
  );
}