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
    <div className="counter-item p-xl- flex-sm-column d-flex align-items-sm-start align-items-center justify-content-sm-between gap-" ref={ref}>
      <div className="counter-icon">
        <img src={icon} alt={label} />
      </div>
      <p className="counter-value d-block w-100 m-0 mt-">
        <span>{count}+</span>
        {/* {suffix}+ */}
        &nbsp;<span className="counter-label">{label}</span>
      </p>
      {/* <div className="counter-label">{label}</div> */}
    </div>
  );
};

export default async function Counter({ quoteData }: { quoteData: any }) {
  const counterData = quoteData;

  return (
    <section className="counter-section py-0">
      <section className="counter_box w-100 flex-wrap counter-containe unique_container container d-flex py-">
      {/* <div className="counter_row"> */}
        {counterData?.map((item: any, index: any) => (
          <CounterItem
            key={index}
            end={item.end}
            suffix={item.suffix}
            label={item.label}
            icon={item.icon}
          />
        ))}
      {/* </div> */}
    </section>
    </section>
  );
}
