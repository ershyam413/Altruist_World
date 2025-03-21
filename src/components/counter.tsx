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
    <div className="counter-item d-flex flex-column justify-content-between" ref={ref}>
      <div className="counter-icon">
        <img src={icon} alt={label} />
      </div>
      <div className="d-flex align-items-center mt-4">
        <div className="counter-value d-flex align-items-center">
          <p className="m-0">{count}</p>
          <p className="m-0 plusss">{suffix}+</p>
        </div>
        <div className="counter-label">{label}</div>
      </div>
    </div>
  );
};

export default async function Counter({ quoteData }: { quoteData: any }) {
  const counterData = quoteData;

  return (
    <section id="counter-section">
      <div className="container">
        <div className="row">
          {counterData?.map((item: any, index: any) => (
            <div className="col-4">
              <CounterItem
                key={index}
                end={item.end}
                suffix={item.suffix}
                label={item.label}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
