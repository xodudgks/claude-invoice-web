import Image from "next/image"

import { CodeBlock } from "@/components/examples/code-block"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function OptimizationSection({
  title,
  description,
  code,
  children,
}: {
  title: string
  description: string
  code: string
  children?: React.ReactNode
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {children && (
          <div className="rounded-lg border bg-background p-6">
            {children}
          </div>
        )}
        <CodeBlock code={code} />
      </CardContent>
    </Card>
  )
}

export default function OptimizationExamplePage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">설정 및 최적화</h1>
        <p className="text-muted-foreground">
          프로덕션 환경을 위한 이미지/폰트 최적화, SEO, PWA 설정 기본 패턴을
          정리했습니다.
        </p>
      </div>

      <OptimizationSection
        title="이미지 최적화 (next/image)"
        description="자동 리사이징, lazy loading, WebP 변환을 제공하는 next/image 사용법"
        code={`
import Image from "next/image"

<Image
  src="/globe.svg"
  alt="설명"
  width={64}
  height={64}
  priority // 뷰포트 상단에 바로 보이는 이미지에만 사용
/>
`}
      >
        <Image src="/globe.svg" alt="예시 이미지" width={64} height={64} />
      </OptimizationSection>

      <OptimizationSection
        title="폰트 최적화 (next/font)"
        description="이 스타터킷의 layout.tsx가 실제로 사용 중인 패턴: 빌드 타임에 폰트를 self-host"
        code={`
import { Geist, Geist_Mono } from "next/font/google"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
`}
      />

      <OptimizationSection
        title="SEO 메타데이터"
        description="정적 metadata 객체 또는 동적 generateMetadata로 페이지별 SEO 설정"
        code={`
// 정적: layout.tsx / page.tsx
export const metadata: Metadata = {
  title: "페이지 제목",
  description: "검색 결과에 노출될 설명",
}

// 동적: 데이터에 따라 메타데이터를 생성해야 할 때
export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug)
  return { title: post.title, description: post.excerpt }
}
`}
      />

      <OptimizationSection
        title="PWA 기본 설정"
        description="manifest 파일과 metadata의 manifest 필드를 연결하는 최소 구성"
        code={`
// app/manifest.ts
import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Next.js Starter Kit",
    short_name: "Starter Kit",
    start_url: "/",
    display: "standalone",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  }
}

// app/layout.tsx
export const metadata: Metadata = {
  manifest: "/manifest.webmanifest",
}
`}
      />

      <OptimizationSection
        title="번들 크기 관리"
        description="무거운 컴포넌트/라이브러리는 필요한 시점에만 로드"
        code={`
import dynamic from "next/dynamic"

const HeavyChart = dynamic(() => import("@/components/heavy-chart"), {
  ssr: false,
  loading: () => <Skeleton className="h-64 w-full" />,
})
`}
      />
    </div>
  )
}
