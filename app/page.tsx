'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import WelcomeSection from "@/components/Welcome";
import Highlights from "@/components/Highlights";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

export default function Home() {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true, 
      normalizeScroll: true,
    });

    // gsap.to('#test', {
    //   y: 0, 
    //   scrollTrigger: {
    //     trigger: '#test',
    //     start: 'center center',
    //     end: 'bottom top',
    //     scrub: 1,
    //     // pin: true,
    //     // markers:true,
    //   }
    // });
  });
  return (
    <div id="test smooth-wrapper" className="flex justify-between h-full">
      <div id="smooth-content">
        <WelcomeSection />
        <Highlights />
      </div>
    </div>
  );
}
