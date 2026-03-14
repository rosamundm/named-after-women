'use client';

import { FC } from 'react';

import { useTheme } from 'next-themes';

import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';

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

// todo: would be better as a multi-select dropdown
// todo: add proper design system instead of inline styles

export const DropdownGroup: FC<DropdownGroupProps> = ({ data, filters, setFilters }) => {
    const { theme } = useTheme()
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
        <div className="flex flex-col lg:flex-row gap-4">
       
            {/* tag filter */}
            <div className="flex-1">
                <Select.Root
                    value={filters?.tag || 'all'}
                    onValueChange={(value) => handleFilterChange('tag', value as Tag)}
                >
                    <Select.Trigger className="flex items-center justify-between w-full px-3 py-2 border rounded">
                        <Select.Value placeholder="All tags" />
                        <Select.Icon>
                            <ChevronDownIcon />
                        </Select.Icon>
                    </Select.Trigger>

                    <Select.Portal>
                        <Select.Content className={`shadow-md rounded
                            ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}
                        `}>
                            <Select.Viewport>
                                <Select.Item value="all" className={`flex items-center justify-between px-3 py-2
                                    ${theme === "dark" ? "hover:bg-violet-500" : "hover:bg-violet-300"}
                                    focus:outline-none
                                `}>
                                    <Select.ItemText>All tags</Select.ItemText>
                                </Select.Item>

                                    {tagNames.map((tagName, index) => (
                                        <Select.Item
                                            key={index}
                                            value={tagName}
                                            className={`flex items-center justify-between px-3 py-2
                                                ${theme === "dark" ? "hover:bg-violet-500" : "hover:bg-violet-300"}
                                                focus:outline-none
                                        `}>
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
                </div>

            {/* district filter */}
            <div className="flex-1">
                <Select.Root
                    value={filters?.district || 'all'}
                    onValueChange={(value) => handleFilterChange('district', value as District)}
                    max-w
                >
                    <Select.Trigger className="flex items-center justify-between w-full px-3 py-2 border rounded">
                        <Select.Value placeholder="All districts" />
                        <Select.Icon>
                            <ChevronDownIcon />
                        </Select.Icon>
                    </Select.Trigger>
                                
                    <Select.Portal>
                        <Select.Content className={`shadow-md rounded
                            ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}
                        `}>
                            <Select.Viewport>
                                <Select.Item value="all" className={`flex items-center justify-between px-3 py-2
                                    ${theme === "dark" ? "hover:bg-violet-500" : "hover:bg-violet-300"}
                                    focus:outline-none
                                `}>
                                    <Select.ItemText>All districts</Select.ItemText>
                                </Select.Item>

                                    {districtNames.map((district, index) => (
                                        <Select.Item
                                            key={index}
                                            value={district}
                                            className={`flex items-center justify-between px-3 py-2
                                                ${theme === "dark" ? "hover:bg-violet-500" : "hover:bg-violet-300"}
                                                focus:outline-none
                                        `}>
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