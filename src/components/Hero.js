import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Hero() {
  const titleRef = useRef();

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center py-16 bg-white">
      <h1 ref={titleRef} className="text-4xl font-bold mb-4 text-blue-700">
        Welcome to the College Printer Shop
      </h1>
      <p className="text-lg text-gray-700 max-w-xl text-center">
        Book your printing slot online and avoid the crowd. Fast, easy, and convenient!
      </p>
    </section>
  );
}

export default Hero;
