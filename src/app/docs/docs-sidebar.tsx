"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "cn"

import { docNavItems } from "@/app/docs/doc-nav-items"

// 현재 경로에 맞춰 활성 항목을 강조하는 문서 사이드바
export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <nav className="flex gap-1 overflow-x-auto md:w-48 md:shrink-0 md:flex-col md:overflow-visible">
      {docNavItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "shrink-0 rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors",
              isActive
                ? "bg-muted text-foreground"
                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
