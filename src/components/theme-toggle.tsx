"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface ThemeToggleProps {
  collapsed?: boolean
}

export function ThemeToggle({ collapsed }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={`flex items-center gap-3 rounded-md ${collapsed ? 'px-3' : 'px-4'} h-10 w-full`}>
        <div className="h-4 w-4 shrink-0 bg-muted animate-pulse rounded-full" />
        {!collapsed && <div className="h-4 w-20 bg-muted animate-pulse rounded" />}
      </div>
    )
  }

  return (
    <Tooltip>
      <TooltipTrigger
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`flex items-center gap-3 rounded-md ${collapsed ? 'px-3' : 'px-4'} h-10 hover:bg-sidebar-accent text-sm cursor-pointer w-full text-left`}
      >
        <div className="relative h-4 w-4 shrink-0">
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute top-0 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </div>
        {!collapsed && <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>}
      </TooltipTrigger>
      {collapsed && <TooltipContent side="right">{theme === "light" ? "Switch to Dark" : "Switch to Light"}</TooltipContent>}
    </Tooltip>
  )
}
