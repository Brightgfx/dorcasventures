'use client';
import { useState, useEffect, useCallback, useRef } from 'react';

export function useSlider(total, interval = 6500) {
  const [current, setCurrent] = useState(0);
  const [busy,    setBusy]    = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback((n) => {
    if (busy) return;
    setCurrent((n + total) % total);
    setBusy(true);
    setTimeout(() => setBusy(false), 1800);
  }, [busy, total]);

  const next = useCallback(() => goTo(current + 1), [goTo, current]);
  const prev = useCallback(() => goTo(current - 1), [goTo, current]);

  useEffect(() => {
    timerRef.current = setInterval(next, interval);
    return () => clearInterval(timerRef.current);
  }, [next, interval]);

  return { current, goTo, next, prev };
}
