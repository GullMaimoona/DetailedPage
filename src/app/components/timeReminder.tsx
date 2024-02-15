 'use client';
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Min: Math.floor((difference / 1000 / 60) % 60),
        Sec: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
 
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index, array) => {
    timerComponents.push(
      <div className="flex flex-col items-center " key={interval}>
        <span className="text-sm ">{timeLeft[interval]}</span>
        <span className="text-sm gap-7">{interval}</span>
      </div>
    );
 
    if (index < array.length - 1) {
      timerComponents.push(
        <span className="text-sm bg mx-1 " key={index}>:</span>
      );
    }
  });

  return (
    <div className="flex space-x-1 justify-center items-center gap-2">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

export default function Home() {
  // target time. I want to adjust. 
  const currentDate = new Date();
  const targetDate = new Date(currentDate.getTime() + 9 * 24 * 60 * 60 * 1000).toISOString();

  return (
    <div className="container mx-auto text-center p-10">
      <h1 className="text-lg font-medium mb-4 mr-14">Time Reminder</h1>
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
}
