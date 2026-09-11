# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev     # 개발 서버 (Turbopack)
npm run build   # 프로덕션 빌드 + 타입 체크
npm run start   # 프로덕션 서버 실행
npm run lint    # ESLint 검사
```

테스트 러너는 아직 구성되어 있지 않습니다.

## Architecture

Next.js 15(16) App Router 기반 starter kit. TypeScript, Tailwind CSS v4, shadcn/ui, Zustand, React Hook Form + Zod를 미리 세팅해 바로 기능 개발에 들어갈 수 있게 구성.

### Tailwind v4 — `tailwind.config` 파일 없음
Tailwind 설정은 `src/app/globals.css`에 CSS로 존재한다. `postcss.config.mjs`가 `@tailwindcss/postcss` 플러그인을 적용하고, `globals.css`에서 `@import "tailwindcss"`, `@theme inline { ... }`, `:root`/`.dark` 블록으로 디자인 토큰(OKLCH 색상)을 정의한다. 새 토큰을 추가할 때 `tailwind.config.js`를 찾지 말고 `globals.css`를 수정할 것.

### shadcn/ui는 Radix가 아니라 Base UI 위에 구축됨
`components.json`의 `style`이 `base-nova`이며, `src/components/ui/*`는 `@base-ui/react`를 기반으로 생성되어 있다. Radix 패턴에서 흔한 `asChild` prop은 지원하지 않으며, 대신 `render={<Button ... />}` prop으로 하위 엘리먼트를 교체한다 (`src/components/theme-toggle.tsx`의 `DropdownMenuTrigger` 사용례 참고).

- `cn` 유틸은 `src/lib/utils.ts`에서 직접 구현하지 않고 `cn` npm 패키지를 그대로 재-export한다 (`export { cn } from "cn"`).
- 새 컴포넌트 추가: `npx shadcn@latest add <name>`. `components.json`의 `aliases`가 `@/components`, `@/components/ui`, `@/lib`, `@/hooks`로 매핑되어 있다.
- shadcn의 폼 컴포넌트는 더 이상 `Form`/`FormField` 래퍼 방식이 아니라 `src/components/ui/field.tsx`의 `Field`/`FieldLabel`/`FieldError` 프리미티브 + react-hook-form의 `Controller`를 조합하는 방식이다 (`src/components/examples/profile-form-example.tsx` 참고).

### 다크모드
`src/components/theme-provider.tsx`(next-themes 래퍼)가 `src/app/layout.tsx`에서 `attribute="class" defaultTheme="system" enableSystem`으로 적용되어 있다. `<html>`에는 `suppressHydrationWarning`이 필수. 테마 전환 UI는 `src/components/theme-toggle.tsx`, 토스트는 `src/components/ui/sonner.tsx`(`useTheme()`으로 다크모드 자동 반영)에 있다.

### 상태 관리 / 폼 패턴
- Zustand 스토어는 `src/store/`에 `use-*-store.ts` 형태로 둔다 (`use-counter-store.ts` 참고).
- 폼은 Zod 스키마 → `zodResolver` → `useForm` → `Controller` + `Field` 조합 패턴을 따른다.
- 두 패턴 모두 `src/components/examples/`에 참고용 예제로 존재하며, 실제 기능 구현 시 이 패턴을 재사용할 것.

### 경로 alias
`@/*` → `src/*` (tsconfig.json, components.json 양쪽에 설정됨).

### AGENTS.md에 대해
`AGENTS.md`는 `next dev`/`next build` 실행 시 Next.js가 자동으로 재생성하는 파일이다(브레이킹 체인지 안내). 수동으로 지우거나 내용을 고치지 말 것 — 다음 실행 시 다시 생성된다.
