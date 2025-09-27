'use client'

import { FC } from 'react';
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/primitives/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'

const ModeToggle: FC = () => {
  const { setTheme } = useTheme()

  return (
	<DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">
			      Toggle theme
		      </span>
        </Button>
      </DropdownMenuTrigger>
	  <DropdownMenuContent asChild align="end">
      <div className="rounded-lg shadow-md bg-neutral-900 light:bg-white">
	  	  {['light', 'dark', 'system'].map((mode) => (
  			  <DropdownMenuItem key={mode} className="p-2" onClick={() => setTheme(mode)}>
    		    {mode}
  			  </DropdownMenuItem>
	  	  ))}
      </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ModeToggle;