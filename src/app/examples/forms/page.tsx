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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// 로그인 폼: 이메일 + 비밀번호
const loginSchema = z.object({
  email: z.email("올바른 이메일 형식이 아닙니다."),
  password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다."),
})
type LoginValues = z.infer<typeof loginSchema>

function LoginFormExample() {
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  })

  function onSubmit(values: LoginValues) {
    toast.success("로그인 폼이 제출되었습니다.", { description: values.email })
    form.reset()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>로그인 폼</CardTitle>
        <CardDescription>이메일/비밀번호 유효성 검사 예제</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="login-email">이메일</FieldLabel>
                  <Input
                    {...field}
                    id="login-email"
                    type="email"
                    placeholder="example@email.com"
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="login-password">비밀번호</FieldLabel>
                  <Input
                    {...field}
                    id="login-password"
                    type="password"
                    placeholder="********"
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />
            <Button type="submit">로그인</Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}

// 회원가입 폼: 이름/이메일/비밀번호 확인/가입 경로(Select)
const signupSchema = z
  .object({
    name: z.string().min(2, "이름은 2자 이상 입력해주세요."),
    email: z.email("올바른 이메일 형식이 아닙니다."),
    password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다."),
    confirmPassword: z.string(),
    referral: z.string().min(1, "가입 경로를 선택해주세요."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  })
type SignupValues = z.infer<typeof signupSchema>

function SignupFormExample() {
  const form = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      referral: "",
    },
  })

  function onSubmit(values: SignupValues) {
    toast.success("회원가입 폼이 제출되었습니다.", {
      description: `${values.name} · ${values.referral}`,
    })
    form.reset()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>회원가입 폼</CardTitle>
        <CardDescription>
          비밀번호 확인(refine)과 Select 필드를 함께 사용하는 예제
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
                  <FieldLabel htmlFor="signup-name">이름</FieldLabel>
                  <Input
                    {...field}
                    id="signup-name"
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
                  <FieldLabel htmlFor="signup-email">이메일</FieldLabel>
                  <Input
                    {...field}
                    id="signup-email"
                    type="email"
                    placeholder="example@email.com"
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="signup-password">비밀번호</FieldLabel>
                  <Input
                    {...field}
                    id="signup-password"
                    type="password"
                    placeholder="********"
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />
            <Controller
              name="confirmPassword"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="signup-confirm-password">
                    비밀번호 확인
                  </FieldLabel>
                  <Input
                    {...field}
                    id="signup-confirm-password"
                    type="password"
                    placeholder="********"
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />
            <Controller
              name="referral"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="signup-referral">가입 경로</FieldLabel>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger id="signup-referral" className="w-full">
                      <SelectValue placeholder="선택해주세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="search">검색</SelectItem>
                      <SelectItem value="sns">SNS</SelectItem>
                      <SelectItem value="referral">지인 추천</SelectItem>
                      <SelectItem value="etc">기타</SelectItem>
                    </SelectContent>
                  </Select>
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />
            <Button type="submit">가입하기</Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}

// 뉴스레터 구독 폼: 단일 이메일 필드
const newsletterSchema = z.object({
  email: z.email("올바른 이메일 형식이 아닙니다."),
})
type NewsletterValues = z.infer<typeof newsletterSchema>

function NewsletterFormExample() {
  const form = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  })

  function onSubmit(values: NewsletterValues) {
    toast.success("뉴스레터 구독이 완료되었습니다.", {
      description: values.email,
    })
    form.reset()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>뉴스레터 구독 폼</CardTitle>
        <CardDescription>단일 필드로 구성된 최소 폼 예제</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3 sm:flex-row sm:items-start"
        >
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="flex-1">
                <Input
                  {...field}
                  type="email"
                  placeholder="example@email.com"
                  aria-invalid={fieldState.invalid}
                />
                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />
          <Button type="submit">구독하기</Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default function FormsExamplePage() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-6 py-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">폼 예제</h1>
        <p className="text-muted-foreground">
          React Hook Form과 Zod를 조합한 다양한 폼 패턴을 확인하세요.
        </p>
      </div>
      <LoginFormExample />
      <SignupFormExample />
      <NewsletterFormExample />
    </div>
  )
}
