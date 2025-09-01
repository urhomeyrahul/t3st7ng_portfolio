"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: React.ReactNode;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // measure container height and detect screen size
  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: isDesktop
      ? ["start 35%", "end 80%"] // desktop/laptop
      : ["start start", "end end"], // mobile
  });

  // Always call useTransform once to avoid conditional hooks
  const heightTransform = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, height, height] // desktop: smooth; mobile: grows then stays full
  );

  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full overflow-x-hidden" ref={containerRef}>
      <div ref={contentRef} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            {/* Left marker + desktop title */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-black dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            {/* Right content */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Vertical timeline line */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-4 md:left-8 top-0 w-[2px] 
                     overflow-hidden max-w-[2px] 
                     bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
                     from-transparent via-neutral-200 dark:via-neutral-700 to-transparent 
                     [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
