import Link from "next/link"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { docNavItems } from "@/app/docs/doc-nav-items"

const descriptions: Record<(typeof docNavItems)[number]["href"], string> = {
  "/docs/getting-started": "설치, 개발 서버 실행, 프로젝트 구조를 안내합니다.",
  "/docs/components": "설치된 UI 컴포넌트 목록과 추가하는 방법을 안내합니다.",
  "/docs/hooks": "상태 관리(Zustand)와 usehooks-ts 사용 방법을 안내합니다.",
  "/docs/configuration": "Tailwind, shadcn, 경로 별칭 등 프로젝트 설정을 안내합니다.",
}

export default function DocsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">문서</h1>
        <p className="text-muted-foreground">
          이 스타터킷을 처음 접하는 분들을 위한 안내 문서입니다.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {docNavItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <Card className="h-full transition-colors hover:border-foreground/20">
              <CardHeader>
                <CardTitle>{item.label}</CardTitle>
                <CardDescription>{descriptions[item.href]}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
