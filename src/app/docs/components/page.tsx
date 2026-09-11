import Link from "next/link"

import { CodeBlock } from "@/components/code-block"

const installedComponents = [
  "button",
  "card",
  "dialog",
  "dropdown-menu",
  "field",
  "input",
  "label",
  "select",
  "separator",
  "sheet",
  "sonner",
  "tooltip",
]

export default function ComponentsDocPage() {
  return (
    <article className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">컴포넌트</h1>
        <p className="text-muted-foreground">
          이 스타터킷의 UI 컴포넌트는 Radix가 아니라{" "}
          <code className="rounded bg-muted px-1.5 py-0.5">@base-ui/react</code>{" "}
          위에 shadcn CLI(style: base-nova)로 생성되어 있습니다.
        </p>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">설치된 컴포넌트</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1.5 py-0.5">
            src/components/ui/
          </code>
          에 위치합니다. 실제 동작은{" "}
          <Link
            href="/examples/components"
            className="underline underline-offset-4 hover:text-foreground"
          >
            컴포넌트 쇼케이스
          </Link>
          에서 확인하세요.
        </p>
        <div className="flex flex-wrap gap-2">
          {installedComponents.map((name) => (
            <code
              key={name}
              className="rounded-md border bg-muted/50 px-2 py-1 text-xs"
            >
              {name}
            </code>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">새 컴포넌트 추가하기</h2>
        <CodeBlock code={`npx shadcn@latest add <component-name>`} />
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1.5 py-0.5">
            components.json
          </code>
          의 aliases 설정에 따라{" "}
          <code className="rounded bg-muted px-1.5 py-0.5">
            @/components/ui
          </code>
          에 생성됩니다.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Radix와의 차이</h2>
        <p className="text-sm text-muted-foreground">
          Radix 패턴에서 흔한{" "}
          <code className="rounded bg-muted px-1.5 py-0.5">asChild</code> prop
          은 지원하지 않으며, 대신{" "}
          <code className="rounded bg-muted px-1.5 py-0.5">
            render={"{"}...{"}"}
          </code>{" "}
          prop으로 하위 엘리먼트를 교체합니다.
        </p>
        <CodeBlock
          code={`
<DialogTrigger render={<Button variant="outline" />}>
  다이얼로그 열기
</DialogTrigger>
`}
        />
      </section>
    </article>
  )
}
