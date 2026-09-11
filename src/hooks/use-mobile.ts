"use client"

import { useEffect, useState } from "react"

const MOBILE_BREAKPOINT = 768

// 뷰포트 너비가 모바일 브레이크포인트 미만인지 여부를 반환하는 훅
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => setIsMobile(mql.matches)

    onChange()
    mql.addEventListener("change", onChange)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return isMobile
}
