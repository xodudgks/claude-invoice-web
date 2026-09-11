import { QueryProvider } from "@/app/examples/data-fetching/query-provider"

export default function DataFetchingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <QueryProvider>{children}</QueryProvider>
}
