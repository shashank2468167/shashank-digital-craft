import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";

interface LazyVideoProps {
  src: string;
  poster: string;
  className?: string;
  aspectRatio?: string; // e.g. "16 / 9"
}

/**
 * Lazy-loaded HTML5 video:
 * - Renders poster immediately (no layout shift via aspect-ratio)
 * - Only attaches src when scrolled near viewport
 * - preload="metadata" so full file downloads only on Play click
 * - Native controls, no autoplay, not muted by default
 */
export function LazyVideo({ src, poster, className = "", aspectRatio }: LazyVideoProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!wrapperRef.current || inView) return;
    const el = wrapperRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView]);

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full overflow-hidden bg-black ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {/* Poster shown immediately */}
      {!ready && (
        <img
          src={poster}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      )}

      {inView && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          controls
          preload="metadata"
          playsInline
          onLoadedMetadata={() => setReady(true)}
          className="relative block w-full h-full object-cover"
        />
      )}

      {inView && !ready && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Loader2 className="w-8 h-8 text-white/70 animate-spin" />
        </div>
      )}
    </div>
  );
}

export default LazyVideo;
