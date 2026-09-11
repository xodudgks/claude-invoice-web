import { CounterExample } from "@/components/examples/counter-example"
import { ProfileFormExample } from "@/components/examples/profile-form-example"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="flex items-center justify-between border-b px-6 py-4">
        <h1 className="text-lg font-semibold">Next.js Starter Kit</h1>
        <ThemeToggle />
      </header>
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 px-6 py-10">
        <CounterExample />
        <ProfileFormExample />
      </main>
    </div>
  )
}
