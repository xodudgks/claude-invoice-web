import Link from "next/link"

import { MobileNav } from "@/components/layout/mobile-nav"
import { navItems } from "@/components/layout/nav-items"
import { ThemeToggle } from "@/components/theme-toggle"

// 모든 페이지 상단에 고정으로 노출되는 헤더 (타이틀 + nav + 테마 토글)
export function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">
          Next.js Starter Kit
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
