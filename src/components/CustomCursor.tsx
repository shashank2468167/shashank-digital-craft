import { useEffect, useRef, useState } from "react";

type CursorVariant =
  | "default"
  | "project"
  | "video"
  | "download"
  | "button"
  | "external"
  | "text";

const LABELS: Record<CursorVariant, string> = {
  default: "",
  project: "View Project →",
  video: "▶ Play",
  download: "↓ Download",
  button: "Open →",
  external: "Visit ↗",
  text: "",
};

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const dot = useRef({ x: -100, y: -100 });
  const follower = useRef({ x: -100, y: -100 });
  const magnet = useRef<{ el: HTMLElement; rect: DOMRect } | null>(null);
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [enabled, setEnabled] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const isFinePointer =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFinePointer || reduced) return;
    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    const move = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;

      // magnetic detection
      const el = (e.target as HTMLElement)?.closest<HTMLElement>(
        "[data-cursor]"
      );
      if (el) {
        const v = (el.dataset.cursor as CursorVariant) || "default";
        setVariant(v);
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        const range = Math.max(rect.width, rect.height) / 2 + 30;
        if (dist < range) {
          const pull = 0.25;
          target.current.x = e.clientX - dx * pull;
          target.current.y = e.clientY - dy * pull;
        }
        magnet.current = { el, rect };
      } else {
        const a = (e.target as HTMLElement)?.closest("a, button");
        if (a && !a.closest("nav")) {
          const tag = a.tagName.toLowerCase();
          const href = (a as HTMLAnchorElement).href || "";
          const external = tag === "a" && /^https?:/.test(href) && !href.includes(location.host);
          setVariant(external ? "external" : "button");
        } else {
          setVariant("default");
        }
        magnet.current = null;
      }
    };

    const down = () => setPressed(true);
    const up = (e: MouseEvent) => {
      setPressed(false);
      if (rippleRef.current) {
        const r = rippleRef.current;
        r.style.transition = "none";
        r.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%) scale(0.2)`;
        r.style.opacity = "0.6";
        requestAnimationFrame(() => {
          r.style.transition = "transform 600ms cubic-bezier(0.16,1,0.3,1), opacity 600ms ease-out";
          r.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%) scale(2.4)`;
          r.style.opacity = "0";
        });
      }
    };

    let raf = 0;
    const tick = () => {
      dot.current.x += (target.current.x - dot.current.x) * 0.45;
      dot.current.y += (target.current.y - dot.current.y) * 0.45;
      follower.current.x += (target.current.x - follower.current.x) * 0.15;
      follower.current.y += (target.current.y - follower.current.y) * 0.15;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dot.current.x}px, ${dot.current.y}px) translate(-50%, -50%)`;
      }
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${follower.current.x}px, ${follower.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!enabled) return null;

  const label = LABELS[variant];
  const isPill = !!label;

  return (
    <>
      <div
        ref={rippleRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-10 w-10 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.55), rgba(139,92,246,0) 70%)",
          opacity: 0,
        }}
      />
      <div
        ref={followerRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9999] flex items-center justify-center"
        style={{
          transition:
            "width 260ms cubic-bezier(0.16,1,0.3,1), height 260ms cubic-bezier(0.16,1,0.3,1), padding 260ms cubic-bezier(0.16,1,0.3,1), border-radius 260ms cubic-bezier(0.16,1,0.3,1), background 260ms ease-out, box-shadow 260ms ease-out",
          height: isPill ? 36 : 32,
          width: isPill ? "auto" : 32,
          padding: isPill ? "0 14px" : 0,
          borderRadius: 9999,
          border: "1px solid rgba(139,92,246,0.5)",
          background: isPill
            ? "rgba(20,16,45,0.55)"
            : "rgba(139,92,246,0.04)",
          backdropFilter: isPill ? "blur(10px)" : "none",
          WebkitBackdropFilter: isPill ? "blur(10px)" : "none",
          boxShadow:
            variant === "default"
              ? "0 0 18px rgba(139,92,246,0.25)"
              : "0 8px 30px -8px rgba(139,92,246,0.55), 0 0 24px rgba(139,92,246,0.35)",
          transformOrigin: "center",
          scale: pressed ? "0.85" : variant === "button" || variant === "external" ? "1.05" : "1",
        }}
      >
        {label && (
          <span
            className="whitespace-nowrap text-[12px] font-medium tracking-wide text-white"
            style={{
              animation:
                variant === "video"
                  ? "cursorPulse 1.4s ease-in-out infinite"
                  : variant === "external"
                  ? "cursorTilt 2s ease-in-out infinite"
                  : undefined,
            }}
          >
            {label}
          </span>
        )}
      </div>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full"
        style={{
          background: "#8B5CF6",
          boxShadow:
            "0 0 10px rgba(139,92,246,0.9), 0 0 22px rgba(139,92,246,0.55)",
          opacity: variant === "text" ? 1 : 0.95,
        }}
      />
    </>
  );
}
