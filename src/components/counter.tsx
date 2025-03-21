/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
interface CounterItemProps {
  end: number;
  suffix: string;
  label: string;
  icon: string;
}

const CounterItem = ({ end, suffix, label, icon }: CounterItemProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepValue = end / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return (
    <div className="counter-item" ref={ref}>
      <div className="counter-icon">
        <img src={icon} alt={label} />
      </div>
      <div className="counter-value">
        {count}
        {suffix}+
      </div>
      <div className="counter-label">{label}</div>
    </div>
  );
};

export default async function Counter({ quoteData }: { quoteData: any }) {
  const counterData = quoteData;

  return (
    <section className="counter-section">
      <div className="counter-container">
        {counterData?.map((item: any, index: any) => (
          <CounterItem
            key={index}
            end={item.end}
            suffix={item.suffix}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}
