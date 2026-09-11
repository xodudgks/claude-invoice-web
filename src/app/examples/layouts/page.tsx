import { CodeBlock } from "@/components/examples/code-block"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function DemoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-16 items-center justify-center rounded-md border bg-muted/50 text-xs text-muted-foreground">
      {children}
    </div>
  )
}

function LayoutSection({
  title,
  description,
  code,
  children,
}: {
  title: string
  description: string
  code: string
  children: React.ReactNode
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="rounded-lg border bg-background p-4">{children}</div>
        <CodeBlock code={code} />
      </CardContent>
    </Card>
  )
}

export default function LayoutsExamplePage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">레이아웃 예제</h1>
        <p className="text-muted-foreground">
          Tailwind 유틸리티만으로 구성한 반응형 레이아웃 패턴입니다. 브라우저
          너비를 줄여보며 각 breakpoint에서의 변화를 확인하세요.
        </p>
      </div>

      <LayoutSection
        title="반응형 그리드 (1 → 2 → 3열)"
        description="모바일 1열, sm 2열, lg 3열로 늘어나는 카드 그리드"
        code={`
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
`}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["1", "2", "3", "4", "5", "6"].map((n) => (
            <DemoBox key={n}>아이템 {n}</DemoBox>
          ))}
        </div>
      </LayoutSection>

      <LayoutSection
        title="사이드바 + 콘텐츠 (반응형 2단)"
        description="좁은 화면에서는 세로로 쌓이고, md 이상에서 좌우로 나뉘는 레이아웃"
        code={`
<div className="flex flex-col gap-4 md:flex-row">
  <aside className="md:w-56 md:shrink-0">사이드바</aside>
  <div className="flex-1">콘텐츠</div>
</div>
`}
      >
        <div className="flex flex-col gap-4 md:flex-row">
          <aside className="md:w-56 md:shrink-0">
            <DemoBox>사이드바</DemoBox>
          </aside>
          <div className="flex-1">
            <DemoBox>콘텐츠 영역</DemoBox>
          </div>
        </div>
      </LayoutSection>

      <LayoutSection
        title="중앙 정렬 + 최대 너비"
        description="본문 콘텐츠를 max-width로 제한하고 mx-auto로 가운데 정렬"
        code={`
<div className="mx-auto w-full max-w-md">본문 콘텐츠</div>
`}
      >
        <div className="mx-auto w-full max-w-md">
          <DemoBox>본문 콘텐츠 (max-w-md)</DemoBox>
        </div>
      </LayoutSection>

      <LayoutSection
        title="Holy Grail (헤더 / 콘텐츠 / 푸터)"
        description="이 스타터킷의 RootLayout이 실제로 사용하는 구조: flex-col + flex-1"
        code={`
<div className="flex min-h-svh flex-col">
  <header>헤더</header>
  <main className="flex-1">콘텐츠</main>
  <footer>푸터</footer>
</div>
`}
      >
        <div className="flex h-48 flex-col overflow-hidden rounded-md border">
          <div className="border-b bg-muted/50 p-2 text-center text-xs text-muted-foreground">
            헤더
          </div>
          <div className="flex flex-1 items-center justify-center text-xs text-muted-foreground">
            flex-1 콘텐츠
          </div>
          <div className="border-t bg-muted/50 p-2 text-center text-xs text-muted-foreground">
            푸터
          </div>
        </div>
      </LayoutSection>
    </div>
  )
}
