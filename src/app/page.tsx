import { CounterExample } from "@/components/examples/counter-example"
import { ProfileFormExample } from "@/components/examples/profile-form-example"

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 px-6 py-10">
      <CounterExample />
      <ProfileFormExample />
    </div>
  )
}
