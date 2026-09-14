import Link from "next/link"

import { navItems } from "@/components/layout/nav-items"

// 모든 페이지 하단에 고정으로 노출되는 푸터 (저작권 + nav 링크)
export function Footer() {
  return (
    <footer className="border-t px-6 py-6">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} 견적서 웹뷰어</p>
        <nav className="flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
