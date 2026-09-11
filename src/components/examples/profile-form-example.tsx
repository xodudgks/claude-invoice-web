"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

// Zod 스키마: 폼 유효성 검사 규칙 정의
const profileFormSchema = z.object({
  name: z.string().min(2, "이름은 2자 이상 입력해주세요."),
  email: z.email("올바른 이메일 형식이 아닙니다."),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

// React Hook Form + Zod 조합 예제: 프로필 폼
export function ProfileFormExample() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: { name: "", email: "" },
  })

  function onSubmit(values: ProfileFormValues) {
    toast.success("프로필이 저장되었습니다.", {
      description: `${values.name} (${values.email})`,
    })
    form.reset()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>React Hook Form + Zod 예제</CardTitle>
        <CardDescription>
          폼 상태 관리는 React Hook Form, 유효성 검사는 Zod로 처리합니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="name">이름</FieldLabel>
                  <Input
                    {...field}
                    id="name"
                    placeholder="홍길동"
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email">이메일</FieldLabel>
                  <Input
                    {...field}
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />
            <Button type="submit">저장</Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
