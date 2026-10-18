"use client";

import { useEffect, useRef, useState } from "react";

export function AmbientLight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 30 });
  const [isPointerActive, setIsPointerActive] = useState(false);

  useEffect(() => {
    // Only run on client
    const handlePointerMove = (e: PointerEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setPos({
        x: Math.max(0, Math.min(100, x)),
        y: Math.max(0, Math.min(100, y)),
      });
      setIsPointerActive(true);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Interactive mouse spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-700"
        style={{
          opacity: isPointerActive ? 0.9 : 0.6,
          background: `radial-gradient(ellipse 650px 480px at ${pos.x}% ${pos.y}%, rgba(213, 255, 85, 0.16), transparent 70%), radial-gradient(ellipse 500px 420px at ${100 - pos.x * 0.5}% ${pos.y * 0.8 + 20}%, rgba(217, 207, 255, 0.12), transparent 65%)`,
        }}
      />

      {/* Ambient drifting aura layers */}
      <div className="ambient-drift-1 pointer-events-none absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(213,255,85,0.18)_0%,transparent_70%)] blur-3xl" />
      <div className="ambient-drift-2 pointer-events-none absolute -bottom-32 -left-20 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(217,207,255,0.14)_0%,transparent_70%)] blur-3xl" />
    </div>
  );
}
