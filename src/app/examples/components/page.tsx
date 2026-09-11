"use client"

import { toast } from "sonner"

import { CodeBlock } from "@/components/examples/code-block"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

// 하나의 컴포넌트 데모를 "설명 + 미리보기 + 코드" 구조로 보여주는 섹션
function ShowcaseSection({
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

export default function ComponentsExamplePage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">컴포넌트 쇼케이스</h1>
        <p className="text-muted-foreground">
          설치된 shadcn/ui(base-ui 기반) 컴포넌트들의 실제 동작과 사용 코드를 확인하세요.
        </p>
      </div>

      <ShowcaseSection
        title="Button"
        description="variant/size 조합을 지원하는 버튼 컴포넌트"
        code={`
<Button>기본</Button>
<Button variant="outline">아웃라인</Button>
<Button variant="secondary">세컨더리</Button>
<Button variant="ghost">고스트</Button>
<Button variant="destructive">위험</Button>
<Button variant="link">링크</Button>
`}
      >
        <Button>기본</Button>
        <Button variant="outline">아웃라인</Button>
        <Button variant="secondary">세컨더리</Button>
        <Button variant="ghost">고스트</Button>
        <Button variant="destructive">위험</Button>
        <Button variant="link">링크</Button>
      </ShowcaseSection>

      <ShowcaseSection
        title="Card"
        description="제목/설명/본문 영역을 조합하는 카드 컴포넌트"
        code={`
<Card>
  <CardHeader>
    <CardTitle>카드 제목</CardTitle>
    <CardDescription>카드 설명 텍스트</CardDescription>
  </CardHeader>
  <CardContent>카드 본문 내용</CardContent>
</Card>
`}
      >
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>카드 제목</CardTitle>
            <CardDescription>카드 설명 텍스트</CardDescription>
          </CardHeader>
          <CardContent>카드 본문 내용</CardContent>
        </Card>
      </ShowcaseSection>

      <ShowcaseSection
        title="Dialog"
        description="모달 형태로 콘텐츠를 띄우는 다이얼로그"
        code={`
<Dialog>
  <DialogTrigger render={<Button variant="outline" />}>
    다이얼로그 열기
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>제목</DialogTitle>
      <DialogDescription>설명</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose render={<Button variant="outline" />}>닫기</DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
`}
      >
        <Dialog>
          <DialogTrigger render={<Button variant="outline" />}>
            다이얼로그 열기
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>다이얼로그 제목</DialogTitle>
              <DialogDescription>
                다이얼로그 본문에 들어갈 설명입니다.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose render={<Button variant="outline" />}>
                닫기
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ShowcaseSection>

      <ShowcaseSection
        title="Dropdown Menu"
        description="트리거를 클릭해 옵션 목록을 펼치는 드롭다운 메뉴"
        code={`
<DropdownMenu>
  <DropdownMenuTrigger render={<Button variant="outline" />}>
    메뉴 열기
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>수정</DropdownMenuItem>
    <DropdownMenuItem>복제</DropdownMenuItem>
    <DropdownMenuItem>삭제</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" />}>
            메뉴 열기
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>수정</DropdownMenuItem>
            <DropdownMenuItem>복제</DropdownMenuItem>
            <DropdownMenuItem>삭제</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ShowcaseSection>

      <ShowcaseSection
        title="Field / Input / Select"
        description="폼 프리미티브: 라벨과 입력 요소를 묶는 Field"
        code={`
<Field>
  <FieldLabel htmlFor="name">이름</FieldLabel>
  <Input id="name" placeholder="홍길동" />
</Field>
<Select defaultValue="ko">
  <SelectTrigger>
    <SelectValue placeholder="언어 선택" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="ko">한국어</SelectItem>
    <SelectItem value="en">English</SelectItem>
  </SelectContent>
</Select>
`}
      >
        <Field className="max-w-xs">
          <FieldLabel htmlFor="showcase-name">이름</FieldLabel>
          <Input id="showcase-name" placeholder="홍길동" />
        </Field>
        <Select defaultValue="ko">
          <SelectTrigger>
            <SelectValue placeholder="언어 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ko">한국어</SelectItem>
            <SelectItem value="en">English</SelectItem>
          </SelectContent>
        </Select>
      </ShowcaseSection>

      <ShowcaseSection
        title="Separator"
        description="콘텐츠 영역을 구분하는 얇은 구분선"
        code={`
<div>영역 A</div>
<Separator />
<div>영역 B</div>
`}
      >
        <div className="flex w-full max-w-xs flex-col gap-3">
          <div className="text-sm">영역 A</div>
          <Separator />
          <div className="text-sm">영역 B</div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection
        title="Sheet"
        description="화면 가장자리에서 슬라이드로 열리는 드로어"
        code={`
<Sheet>
  <SheetTrigger render={<Button variant="outline" />}>
    시트 열기
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>시트 제목</SheetTitle>
    </SheetHeader>
  </SheetContent>
</Sheet>
`}
      >
        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>
            시트 열기
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>시트 제목</SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </ShowcaseSection>

      <ShowcaseSection
        title="Tooltip"
        description="요소에 마우스를 올렸을 때 부가 설명을 보여주는 툴팁"
        code={`
<Tooltip>
  <TooltipTrigger render={<Button variant="outline" />}>
    호버해보세요
  </TooltipTrigger>
  <TooltipContent>툴팁 내용</TooltipContent>
</Tooltip>
`}
      >
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" />}>
            호버해보세요
          </TooltipTrigger>
          <TooltipContent>툴팁 내용</TooltipContent>
        </Tooltip>
      </ShowcaseSection>

      <ShowcaseSection
        title="Sonner (Toast)"
        description="화면 우측 하단에 알림을 띄우는 토스트"
        code={`
import { toast } from "sonner"

<Button onClick={() => toast.success("저장되었습니다.")}>
  토스트 띄우기
</Button>
`}
      >
        <Button onClick={() => toast.success("저장되었습니다.")}>
          토스트 띄우기
        </Button>
      </ShowcaseSection>
    </div>
  )
}
