"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"

// 데이터 패칭 예제 전용 QueryClient 프로바이더
// (앱 전체가 아니라 이 예제를 쓰는 라우트에만 스코프)
export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
