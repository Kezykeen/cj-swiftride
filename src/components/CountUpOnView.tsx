import { useEffect, useState, useRef } from "react";

interface CountUpProps {
  end: number;
}

const CountUpOnView: React.FC<CountUpProps> = ({ end }) => {
  const [value, setValue] = useState<number>(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [started, setStarted] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const duration = 2000;
    const step = Math.ceil(end / (duration / 16));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setValue(end);
        clearInterval(timer);
      } else {
        setValue(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, end]);

  return <span ref={ref}>{value.toLocaleString()}</span>;
};

export default CountUpOnView;
