"use client"

import { Minus, Plus, RotateCcw } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useCounterStore } from "@/store/use-counter-store"

// Zustand 전역 스토어를 사용하는 카운터 예제 컴포넌트
export function CounterExample() {
  const { count, increment, decrement, reset } = useCounterStore()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Zustand 카운터 예제</CardTitle>
        <CardDescription>
          전역 상태 관리 라이브러리 Zustand로 만든 카운터입니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={decrement}>
          <Minus />
        </Button>
        <span className="w-12 text-center text-2xl font-semibold tabular-nums">
          {count}
        </span>
        <Button variant="outline" size="icon" onClick={increment}>
          <Plus />
        </Button>
        <Button variant="ghost" size="icon" onClick={reset}>
          <RotateCcw />
        </Button>
      </CardContent>
    </Card>
  )
}
