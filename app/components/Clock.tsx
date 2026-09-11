'use client';

import { useEffect, useState } from 'react';

function pad(value: number): string {
  return value.toString().padStart(2, '0');
}

export default function Clock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  if (!now) return null;

  const hour = pad(now.getHours());
  const minute = pad(now.getMinutes());
  const second = pad(now.getSeconds());

  return (
    <span className="clock" aria-label={`Local time ${hour}:${minute}:${second}`}>
      <span className="clock__dot" aria-hidden="true" />
      {hour}:{minute}:{second}
    </span>
  );
}