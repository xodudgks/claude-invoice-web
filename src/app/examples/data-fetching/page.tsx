"use client"

import { useQuery } from "@tanstack/react-query"

import { CodeBlock } from "@/components/code-block"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Post = {
  id: number
  title: string
}

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
  if (!res.ok) {
    throw new Error(`요청이 실패했습니다. (${res.status})`)
  }
  return res.json()
}

async function fetchBroken(): Promise<never> {
  const res = await fetch("https://jsonplaceholder.typicode.com/this-route-does-not-exist")
  if (!res.ok) {
    throw new Error(`요청이 실패했습니다. (${res.status})`)
  }
  throw new Error("도달할 수 없습니다.")
}

// 성공 케이스: 로딩 → 성공 상태 전환을 보여주는 목록 조회
function PostsQueryDemo() {
  const { data, isPending, isError, error, refetch, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  })

  if (isPending) {
    return <p className="text-sm text-muted-foreground">불러오는 중...</p>
  }

  if (isError) {
    return <p className="text-sm text-destructive">{error.message}</p>
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <ul className="flex flex-col gap-2">
        {data.map((post) => (
          <li
            key={post.id}
            className="rounded-md border bg-muted/50 px-3 py-2 text-sm"
          >
            {post.title}
          </li>
        ))}
      </ul>
      <Button
        variant="outline"
        size="sm"
        className="w-fit"
        onClick={() => refetch()}
        disabled={isFetching}
      >
        {isFetching ? "새로고침 중..." : "다시 불러오기"}
      </Button>
    </div>
  )
}

// 실패 케이스: 에러 상태와 재시도 버튼을 보여주는 예제
function ErrorQueryDemo() {
  const { isPending, isError, error, refetch, isFetching } = useQuery({
    queryKey: ["broken-posts"],
    queryFn: fetchBroken,
    retry: false,
  })

  return (
    <div className="flex w-full flex-col gap-3">
      {isPending && (
        <p className="text-sm text-muted-foreground">불러오는 중...</p>
      )}
      {isError && (
        <p className="text-sm text-destructive">
          에러 발생: {error.message}
        </p>
      )}
      <Button
        variant="outline"
        size="sm"
        className="w-fit"
        onClick={() => refetch()}
        disabled={isFetching}
      >
        재시도
      </Button>
    </div>
  )
}

function DataFetchingSection({
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
        <div className="rounded-lg border bg-background p-6">{children}</div>
        <CodeBlock code={code} />
      </CardContent>
    </Card>
  )
}

export default function DataFetchingExamplePage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">데이터 패칭</h1>
        <p className="text-muted-foreground">
          로딩/에러/캐싱 로직을 직접 구현하는 대신 TanStack Query로 API
          호출을 관리하는 예제입니다.
        </p>
      </div>

      <DataFetchingSection
        title="목록 조회 (로딩 → 성공)"
        description="useQuery로 외부 API를 호출하고 로딩/성공 상태를 처리합니다."
        code={`
const { data, isPending, isError, error } = useQuery({
  queryKey: ["posts"],
  queryFn: fetchPosts,
})

if (isPending) return <Loading />
if (isError) return <ErrorMessage error={error} />
return <PostList posts={data} />
`}
      >
        <PostsQueryDemo />
      </DataFetchingSection>

      <DataFetchingSection
        title="에러 처리 + 재시도"
        description="존재하지 않는 엔드포인트를 호출해 에러 상태와 refetch를 보여줍니다."
        code={`
const { isError, error, refetch } = useQuery({
  queryKey: ["broken-posts"],
  queryFn: fetchBroken,
  retry: false,
})

<Button onClick={() => refetch()}>재시도</Button>
`}
      >
        <ErrorQueryDemo />
      </DataFetchingSection>
    </div>
  )
}
