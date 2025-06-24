import React, { useState, useEffect } from 'react';

const HACKATHON_START = new Date('2025-07-14T09:00:00').getTime();
const HACKATHON_END = new Date('2025-07-18T17:00:00').getTime(); // 5pm on last day

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [phase, setPhase] = useState<'before' | 'during' | 'ended'>('before');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      let target = HACKATHON_START;
      let newPhase: typeof phase = 'before';

      if (now < HACKATHON_START) {
        target = HACKATHON_START;
        newPhase = 'before';
      } else if (now >= HACKATHON_START && now < HACKATHON_END) {
        target = HACKATHON_END;
        newPhase = 'during';
      } else {
        newPhase = 'ended';
      }

      let difference = target - now;
      if (difference < 0) difference = 0;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
      setPhase(newPhase);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  let label = '';
  if (phase === 'before') label = 'Time until start';
  else if (phase === 'during') label = 'Time until end';
  else label = 'Hackathon ended';

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-secondary font-extrabold text-lg mb-2">{label}</span>
      <div className="flex gap-6 justify-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center">
            <div className="bg-card rounded-lg p-4 min-w-[80px] shadow">
              <div className="text-3xl font-bold text-primary">{value.toString().padStart(2, '0')}</div>
              <div className="text-primary/70 text-sm uppercase tracking-wide">{unit}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
