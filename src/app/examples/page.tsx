import Link from "next/link"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const examples = [
  {
    href: "/examples/components",
    title: "컴포넌트 쇼케이스",
    description: "모든 UI 컴포넌트의 실제 동작을 확인하고 코드 예제를 살펴볼 수 있습니다.",
  },
  {
    href: "/examples/forms",
    title: "폼 예제",
    description: "React Hook Form과 Zod를 활용한 다양한 폼 예제를 확인할 수 있습니다.",
  },
  {
    href: "/examples/layouts",
    title: "레이아웃 예제",
    description: "다양한 레이아웃과 반응형 디자인 패턴을 확인할 수 있습니다.",
  },
  {
    href: "/examples/hooks",
    title: "usehooks-ts 예제",
    description: "usehooks-ts 라이브러리의 다양한 훅 예제를 확인할 수 있습니다.",
  },
  {
    href: "/examples/data-fetching",
    title: "데이터 패칭",
    description: "API 호출, 로딩 상태, 에러 처리 등 데이터 관리 예제를 확인할 수 있습니다.",
  },
  {
    href: "/examples/optimization",
    title: "설정 및 최적화",
    description: "성능 최적화, SEO, PWA 구현 등 프로덕션 환경을 위한 설정을 확인할 수 있습니다.",
  },
] as const

export default function ExamplesPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">예제</h1>
        <p className="text-muted-foreground">
          스타터킷에 포함된 패턴과 라이브러리를 실제 화면으로 살펴보세요.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {examples.map((example) => (
          <Link key={example.href} href={example.href}>
            <Card className="h-full transition-colors hover:border-foreground/20">
              <CardHeader>
                <CardTitle>{example.title}</CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
