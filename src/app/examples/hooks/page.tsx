"use client"

import { useState } from "react"
import {
  useCopyToClipboard,
  useCounter,
  useDebounceValue,
  useLocalStorage,
  useMediaQuery,
  useToggle,
} from "usehooks-ts"

import { CodeBlock } from "@/components/examples/code-block"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

function HookSection({
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
        <div className="flex flex-wrap items-center gap-3 rounded-lg border bg-background p-6">
          {children}
        </div>
        <CodeBlock code={code} />
      </CardContent>
    </Card>
  )
}

function CounterDemo() {
  const { count, increment, decrement, reset } = useCounter(0)
  return (
    <div className="flex items-center gap-3">
      <Button variant="outline" size="icon" onClick={decrement}>
        -
      </Button>
      <span className="w-8 text-center text-sm font-medium">{count}</span>
      <Button variant="outline" size="icon" onClick={increment}>
        +
      </Button>
      <Button variant="ghost" onClick={reset}>
        초기화
      </Button>
    </div>
  )
}

function ToggleDemo() {
  const [isOn, toggle] = useToggle(false)
  return (
    <div className="flex items-center gap-3">
      <Button variant="outline" onClick={toggle}>
        {isOn ? "켜짐" : "꺼짐"}
      </Button>
      <span className="text-sm text-muted-foreground">
        클릭할 때마다 상태가 반전됩니다.
      </span>
    </div>
  )
}

function LocalStorageDemo() {
  const [name, setName] = useLocalStorage("usehooks-example-name", "")
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름을 입력하면 저장됩니다"
      />
      <p className="text-xs text-muted-foreground">
        새로고침해도 localStorage에 저장된 값이 유지됩니다.
      </p>
    </div>
  )
}

function CopyToClipboardDemo() {
  const [copiedText, copy] = useCopyToClipboard()
  return (
    <div className="flex items-center gap-3">
      <Button variant="outline" onClick={() => copy("Hello, Starter Kit!")}>
        텍스트 복사
      </Button>
      <span className="text-xs text-muted-foreground">
        {copiedText ? `복사됨: ${copiedText}` : "아직 복사되지 않았습니다."}
      </span>
    </div>
  )
}

function DebounceValueDemo() {
  const [inputValue, setInputValue] = useState("")
  const [debouncedValue] = useDebounceValue(inputValue, 500)
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="입력해보세요"
      />
      <p className="text-xs text-muted-foreground">
        500ms 후 반영: <span className="font-medium">{debouncedValue}</span>
      </p>
    </div>
  )
}

function MediaQueryDemo() {
  const isSmallScreen = useMediaQuery("(max-width: 640px)")
  return (
    <p className="text-sm">
      현재 화면은{" "}
      <span className="font-medium">
        {isSmallScreen ? "640px 이하" : "640px 초과"}
      </span>
      입니다.
    </p>
  )
}

export default function HooksExamplePage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">usehooks-ts 예제</h1>
        <p className="text-muted-foreground">
          자주 쓰이는 유틸리티 훅을 직접 구현하는 대신, 검증된{" "}
          <a
            href="https://usehooks-ts.com"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            usehooks-ts
          </a>{" "}
          라이브러리를 사용합니다.
        </p>
      </div>

      <HookSection
        title="useCounter"
        description="증가/감소/초기화 로직을 가진 카운터 훅"
        code={`
const { count, increment, decrement, reset } = useCounter(0)
`}
      >
        <CounterDemo />
      </HookSection>

      <HookSection
        title="useToggle"
        description="boolean 상태를 반전시키는 훅"
        code={`
const [isOn, toggle] = useToggle(false)
`}
      >
        <ToggleDemo />
      </HookSection>

      <HookSection
        title="useLocalStorage"
        description="localStorage와 동기화되는 상태 훅"
        code={`
const [name, setName] = useLocalStorage("name", "")
`}
      >
        <LocalStorageDemo />
      </HookSection>

      <HookSection
        title="useCopyToClipboard"
        description="클립보드 복사 결과를 상태로 제공하는 훅"
        code={`
const [copiedText, copy] = useCopyToClipboard()
copy("Hello, Starter Kit!")
`}
      >
        <CopyToClipboardDemo />
      </HookSection>

      <HookSection
        title="useDebounceValue"
        description="입력값을 일정 시간 지연시켜 반영하는 훅"
        code={`
const [debouncedValue] = useDebounceValue(inputValue, 500)
`}
      >
        <DebounceValueDemo />
      </HookSection>

      <HookSection
        title="useMediaQuery"
        description="미디어 쿼리 매칭 여부를 boolean으로 제공하는 훅"
        code={`
const isSmallScreen = useMediaQuery("(max-width: 640px)")
`}
      >
        <MediaQueryDemo />
      </HookSection>
    </div>
  )
}
