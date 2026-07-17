import { useCallback, useEffect, useRef, useState } from "react";

type VideoPlayerProps = {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  playsInline?: boolean;
  preload?: "none" | "metadata" | "auto";
  mimeType?: string;
  onReady?: () => void;
};

function inferMime(src: string, fallback?: string) {
  if (fallback) return fallback;
  const clean = src.split("?")[0].toLowerCase();
  if (clean.endsWith(".webm")) return "video/webm";
  if (clean.endsWith(".mov")) return "video/quicktime";
  if (clean.endsWith(".ogg") || clean.endsWith(".ogv")) return "video/ogg";
  return "video/mp4";
}

/**
 * Stable video player: preserves the underlying <video> element across renders
 * (uses <source>, not a src prop), shows a loading spinner until metadata is
 * ready, surfaces a poster + retry UI on error, and logs load failures.
 */
export function VideoPlayer({
  src,
  poster,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  controls = true,
  playsInline = true,
  preload = "metadata",
  mimeType,
  onReady,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [attempt, setAttempt] = useState(0);
  const type = inferMime(src, mimeType);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const onLoaded = () => {
      setStatus("ready");
      onReady?.();
      if (autoPlay) {
        el.play().catch((err) => {
          // Autoplay may be blocked; leave controls visible so the user can start it.
          console.warn("[VideoPlayer] autoplay blocked", src, err);
        });
      }
    };
    const onError = () => {
      const mediaErr = el.error;
      console.error("[VideoPlayer] failed to load", src, mediaErr?.code, mediaErr?.message);
      setStatus("error");
    };
    const onStalled = () => console.warn("[VideoPlayer] stalled", src);

    setStatus("loading");
    el.load();

    el.addEventListener("loadedmetadata", onLoaded);
    el.addEventListener("loadeddata", onLoaded);
    el.addEventListener("canplay", onLoaded);
    el.addEventListener("error", onError);
    el.addEventListener("stalled", onStalled);
    // Safety: if metadata never fires within 8s, drop the spinner so controls are usable.
    const timeout = window.setTimeout(() => {
      setStatus((s) => (s === "loading" ? "ready" : s));
    }, 8000);
    return () => {
      window.clearTimeout(timeout);
      el.removeEventListener("loadedmetadata", onLoaded);
      el.removeEventListener("loadeddata", onLoaded);
      el.removeEventListener("canplay", onLoaded);
      el.removeEventListener("error", onError);
      el.removeEventListener("stalled", onStalled);
      if (!el.paused) el.pause();
    };
  }, [src, attempt, autoPlay, onReady]);

  const retry = useCallback(() => {
    setStatus("loading");
    setAttempt((n) => n + 1);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline={playsInline}
        preload={preload}
        
        className="block w-full h-full object-cover"
      >
        <source src={src} type={type} />
      </video>

      {status === "loading" && (
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
          <div className="h-10 w-10 rounded-full border-2 border-white/25 border-t-white animate-spin" />
        </div>
      )}

      {status === "error" && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-3 bg-black/75 text-center px-6">
          {poster && (
            <img
              src={poster}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover opacity-30"
            />
          )}
          <p className="relative text-sm text-white/80">Video unavailable</p>
          <button
            type="button"
            onClick={retry}
            className="relative px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] border border-white/25 bg-white/10 hover:bg-white/20 transition"
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
