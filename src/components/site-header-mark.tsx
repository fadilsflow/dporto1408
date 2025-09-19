"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { ChanhDaiMark } from "./chanhdai-mark";

export function SiteHeaderMark() {
  const pathname = usePathname();
  return pathname === "/" ? <ChanhDaiMarkMotion /> : <ChanhDaiMark />;
}

function ChanhDaiMarkMotion() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const distanceRef = useRef(160);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= distanceRef.current);
  });

  useEffect(() => {
    const coverMark = document.getElementById("js-cover-mark");
    if (!coverMark) return;

    distanceRef.current = calcDistance(coverMark);

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark);
    });
    resizeObserver.observe(coverMark);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      // --- PERUBAHAN DI SINI ---
      // viewBox lama: "0 0 810 809.999993"
      viewBox="0 200 810 450" // (x, y, width, height) - Bingkai digeser ke bawah dan dibuat lebih pendek
      // -----------------------
      fill="currentColor"
      width="64"
      // --- DAN DI SINI ---
      // height lama: "64"
      height="36" // Disesuaikan agar pas dengan viewBox baru (rasio ~810:450)
      // -------------------
      initial={{
        opacity: 0,
        transform: "translateY(8px)",
      }}
      animate={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(8px)",
      }}
      transition={{ duration: 0.3 }}
    >
      <g transform="translate(8.7789 629.89)">
        <path d="m84.156-168.31v168.31h-84.156v-420.38h336.22v84.156h-252.06v83.75h252.06v84.156z" />
      </g>
      <g transform="translate(378.7 629.89)">
        <path d="m420.38-336.22v252.06h-84.156v84.156h-336.22v-420.38h336.22v84.156zm-336.22 252.06h251.23v-252.06h-251.23z" />
      </g>
    </motion.svg>
  );
}

const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;
  const headerHeight = 56;
  return scrollTop + rect.top + rect.height - headerHeight;
};
