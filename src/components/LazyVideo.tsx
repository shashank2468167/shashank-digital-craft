import { useEffect, useRef, useState } from "react";
import { Loader2, AlertCircle } from "lucide-react";

interface LazyVideoProps {
  src: string;
  poster: string;
  className?: string;
  aspectRatio?: string; // e.g. "16 / 9"
  type?: string; // MIME type override
}

/**
 * Lazy-loaded HTML5 video:
 * - Poster renders immediately (no layout shift via aspect-ratio)
 * - Video src attaches only when scrolled near viewport (IntersectionObserver)
 * - preload="metadata" so full file downloads only on Play click
 * - Native controls; no autoplay; no mute; no hover triggers
 * - Loading spinner while metadata loads, error fallback on failure
 */
export function LazyVideo({
  src,
  poster,
  className = "",
  aspectRatio = "16 / 9",
  type,
}: LazyVideoProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [ready, setReady] = useState(false);
  const [errored, setErrored] = useState(false);

  // Infer MIME type from extension when not provided
  const inferredType =
    type ??
    (src.endsWith(".webm")
      ? "video/webm"
      : src.endsWith(".mov")
      ? "video/quicktime"
      : "video/mp4");

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
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView]);

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full overflow-hidden bg-black ${className}`}
      style={{ aspectRatio }}
    >
      {/* Poster shown until the video is ready */}
      {!ready && !errored && (
        <img
          src={poster}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      )}

      {inView && !errored && (
        <video
          ref={videoRef}
          poster={poster}
          controls
          controlsList="nodownload"
          preload="metadata"
          playsInline
          crossOrigin="anonymous"
          onLoadedMetadata={() => setReady(true)}
          onError={() => setErrored(true)}
          className="relative block w-full h-full object-cover bg-black"
        >
          <source src={src} type={inferredType} />
          Your browser does not support the video tag.
        </video>
      )}

      {inView && !ready && !errored && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/30">
          <Loader2 className="w-8 h-8 text-white/80 animate-spin" />
        </div>
      )}

      {errored && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/70 text-white/80 text-sm p-6 text-center">
          <AlertCircle className="w-6 h-6" />
          <p>This video couldn't be loaded.</p>
          <a
            href={src}
            target="_blank"
            rel="noreferrer"
            className="underline text-white/70 hover:text-white text-xs"
          >
            Open video in a new tab
          </a>
        </div>
      )}
    </div>
  );
}

export default LazyVideo;
