import { useEffect, useState } from 'react'

const DAY = 24 * 60 * 60 * 1000
const HOUR = 60 * 60 * 1000
const MINUTE = 60 * 1000

const getRemaining = (targetTime) => {
  const diff = Math.max(0, targetTime - Date.now())
  return {
    totalMs: diff,
    days: Math.floor(diff / DAY),
    ceilDays: Math.ceil(diff / DAY),
    hours: Math.floor((diff % DAY) / HOUR),
    minutes: Math.floor((diff % HOUR) / MINUTE),
    seconds: Math.floor((diff % MINUTE) / 1000),
    isDone: diff <= 0,
  }
}

const useCountdown = (targetTime, { tickSeconds = false } = {}) => {
  const [remaining, setRemaining] = useState(() => getRemaining(targetTime))

  useEffect(() => {
    const interval = setInterval(
      () => setRemaining(getRemaining(targetTime)),
      tickSeconds ? 1000 : 60 * 1000,
    )
    return () => clearInterval(interval)
  }, [targetTime, tickSeconds])

  return remaining
}

export default useCountdown
