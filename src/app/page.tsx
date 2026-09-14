// TODO: 로그인 여부에 따라 /login 또는 /dashboard로 리다이렉트하는 로직 구현 (docs/PRD.md 사용자 여정 참고)
export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-2 px-6 py-10 text-center">
      <h1 className="text-2xl font-semibold">견적서 웹뷰어</h1>
      <p className="text-muted-foreground">
        노션에 입력한 견적서를 클라이언트가 로그인 없이 웹에서 확인하고 다운로드할 수 있는 서비스입니다.
      </p>
    </div>
  )
}
