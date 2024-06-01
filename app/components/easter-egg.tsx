"use client";
import { useEffect, useState } from "react";

export function EasterEgg() {
  const [isMounted, setIsMounted] = useState(false);
  const [show, setShow] = useState(false);
  const textToReveal = useTypingEffect(
    "Coding for survival with a spark of passion on the side.",
    200,
    show
  );
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <span className="inline">
      {show && textToReveal}{" "}
      {!show && (
        <div
          className={`text-red-600 font-medium text-sm cursor-pointer inline-block`}
          onClick={() => setShow(!show)}
        >
          more
        </div>
      )}
    </span>
  );
}

const useTypingEffect = (
  text: string,
  duration: number,
  startTyping = false
) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const items = text.split(" ");

  useEffect(() => {
    setCurrentPosition(0);
  }, [text]);

  useEffect(() => {
    if (startTyping) {
      if (currentPosition >= items.length) return;

      const intervalId = setInterval(() => {
        setCurrentPosition((prevPosition) => prevPosition + 1);
      }, duration);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [currentPosition, items, duration, startTyping]);

  return items.slice(0, currentPosition).join(" ");
};
