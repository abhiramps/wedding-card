import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: string): TimeLeft => {
  const difference = +new Date(targetDate) - +new Date();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds },
  ];

  return (
    <div
      className="inline-flex items-center justify-center gap-2.5 sm:gap-4 px-5 py-2.5 rounded-full bg-[#FBF8F2]/85 backdrop-blur-xs border border-[#B38A45]/45 shadow-[0_6px_24px_rgba(48,37,30,0.06)]"
      aria-label="Countdown to Wedding Muhurtham"
    >
      {units.map((unit, index) => (
        <React.Fragment key={unit.label}>
          <div className="flex flex-col items-center min-w-[42px] sm:min-w-[50px]">
            <span className="font-serif text-xl sm:text-2xl font-semibold text-[#29452F] tabular-nums leading-none">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.18em] text-[#5C4D42] mt-1">
              {unit.label}
            </span>
          </div>
          {index < units.length - 1 && (
            <span className="text-[#B38A45]/70 font-serif text-lg -mt-2 select-none">:</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
