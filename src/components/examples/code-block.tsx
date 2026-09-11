import { cn } from "cn"

// 예제 페이지에서 코드 스니펫을 보여줄 때 공통으로 쓰는 코드 블록
export function CodeBlock({
  code,
  className,
}: {
  code: string
  className?: string
}) {
  return (
    <pre
      className={cn(
        "overflow-x-auto rounded-lg border bg-muted/50 p-4 text-xs leading-relaxed",
        className
      )}
    >
      <code>{code.trim()}</code>
    </pre>
  )
}
