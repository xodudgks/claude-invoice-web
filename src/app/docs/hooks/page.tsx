import Link from "next/link"

import { CodeBlock } from "@/components/code-block"

export default function HooksDocPage() {
  return (
    <article className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">훅 라이브러리</h1>
        <p className="text-muted-foreground">
          상태 관리는 Zustand, 범용 유틸리티 훅은 usehooks-ts를 사용합니다.
        </p>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">Zustand 스토어 패턴</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1.5 py-0.5">
            src/store/use-*-store.ts
          </code>{" "}
          형태로 둡니다.{" "}
          <code className="rounded bg-muted px-1.5 py-0.5">
            use-counter-store.ts
          </code>
          가 참고용 예제입니다.
        </p>
        <CodeBlock
          code={`
import { create } from "zustand"

type CounterState = {
  count: number
  increment: () => void
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}))
`}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">usehooks-ts</h2>
        <p className="text-sm text-muted-foreground">
          useLocalStorage, useToggle, useDebounceValue 등 자주 쓰는 훅을
          직접 구현하지 않고{" "}
          <a
            href="https://usehooks-ts.com"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            usehooks-ts
          </a>
          에서 가져다 씁니다. 전체 목록은{" "}
          <Link
            href="/examples/hooks"
            className="underline underline-offset-4 hover:text-foreground"
          >
            usehooks-ts 예제
          </Link>
          에서 확인하세요.
        </p>
        <CodeBlock code={`import { useLocalStorage } from "usehooks-ts"`} />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-semibold">커스텀 훅</h2>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1.5 py-0.5">
            src/hooks/
          </code>
          에 프로젝트 전용 훅을 둡니다 (예:{" "}
          <code className="rounded bg-muted px-1.5 py-0.5">
            use-mobile.ts
          </code>
          ).
        </p>
      </section>
    </article>
  )
}
