import { CodeBlock } from "@/components/code-block"

export default function ConfigurationDocPage() {
  return (
    <article className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">구성 및 설정</h1>
        <p className="text-muted-foreground">
          Tailwind v4, shadcn/ui, 경로 별칭 설정 위치를 정리했습니다.
        </p>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Tailwind v4 (설정 파일 없음)</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1.5 py-0.5">
            tailwind.config.js
          </code>
          는 존재하지 않습니다. 디자인 토큰(OKLCH 색상)은{" "}
          <code className="rounded bg-muted px-1.5 py-0.5">
            src/app/globals.css
          </code>
          의{" "}
          <code className="rounded bg-muted px-1.5 py-0.5">
            @theme inline
          </code>{" "}
          블록에 CSS로 정의되어 있습니다.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">shadcn/ui 설정</h2>
        <CodeBlock
          code={`
// components.json
{
  "style": "base-nova",
  "tailwind": { "css": "src/app/globals.css", "baseColor": "neutral" },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
`}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">경로 별칭</h2>
        <CodeBlock
          code={`
// tsconfig.json
{
  "compilerOptions": {
    "paths": { "@/*": ["./src/*"] }
  }
}
`}
        />
      </section>
    </article>
  )
}
