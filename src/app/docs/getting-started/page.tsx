import { CodeBlock } from "@/components/code-block"

export default function GettingStartedPage() {
  return (
    <article className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">시작하기</h1>
        <p className="text-muted-foreground">
          Next.js 15(16) + TypeScript + Tailwind v4 + shadcn/ui가 세팅된
          스타터킷입니다.
        </p>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">개발 서버 실행</h2>
        <CodeBlock
          code={`
npm install
npm run dev     # 개발 서버 (Turbopack)
`}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">주요 명령어</h2>
        <CodeBlock
          code={`
npm run dev     # 개발 서버
npm run build   # 프로덕션 빌드 + 타입 체크
npm run start   # 프로덕션 서버 실행
npm run lint    # ESLint 검사
`}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">프로젝트 구조</h2>
        <CodeBlock
          code={`
src/
  app/                 # 라우트 (App Router)
    examples/          # 예제 페이지
    docs/              # 문서 페이지
  components/
    ui/                # shadcn/ui(base-ui 기반) 프리미티브
    layout/            # Header, Footer, MobileNav
    examples/          # 예제 전용 데모 컴포넌트
  hooks/               # 커스텀 훅 (use-mobile 등)
  store/               # Zustand 스토어 (use-*-store.ts)
  lib/                 # cn 등 유틸리티
`}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">경로 별칭</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1.5 py-0.5">@/*</code>는{" "}
          <code className="rounded bg-muted px-1.5 py-0.5">src/*</code>로
          매핑되어 있습니다 (tsconfig.json, components.json 양쪽 설정).
        </p>
      </section>
    </article>
  )
}
