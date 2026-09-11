import { create } from "zustand"

interface CounterState {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

// Zustand 사용 예제: 간단한 카운터 전역 상태
export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}))
