import { useEffect, useRef, useState } from "react";
import Song from "../assets/song.mp3";

export default function Music() {
  const audioRef = useRef(null);
  const [musicOn, setMusicOn] = useState(true);

  useEffect(() => {
    const playMusic = () => {
      const audioEl = audioRef.current;
      if (!audioEl) return;

      if (!musicOn) {
        audioEl.pause();
        return;
      }

      // Enforce loop at runtime as well (some browsers can be finicky).
      audioEl.loop = true;

      audioEl.play().catch(() => {
        // Autoplay can still be blocked in some cases. ignore.
      });
    };

    window.addEventListener("click", playMusic, { once: true });
    return () => window.removeEventListener("click", playMusic);
  }, [musicOn]);

  const toggleMusic = () => {
    const audioEl = audioRef.current;
    setMusicOn((prev) => {
      const next = !prev;

      if (!audioEl) return next;

      if (next) {
        audioEl.loop = true;
        audioEl.muted = false;
        audioEl.play().catch(() => {
          // Still can be blocked until a user gesture in some browsers.
        });
      } else {
        audioEl.pause();
        audioEl.currentTime = 0;
      }

      return next;
    });
  };

  const handleEnded = () => {
    const audioEl = audioRef.current;
    if (!audioEl) return;
    if (!musicOn) return;
    audioEl.currentTime = 0;
    audioEl.play().catch(() => {
      // If it ended without a user gesture context, replay may be blocked.
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 z-50 rounded-full px-4 py-2 bg-rose-500 text-white shadow-md"
        aria-label={musicOn ? "Turn music off" : "Turn music on"}
      >
        {musicOn ? "🔊: On" : "🔊: Off"}
      </button>

      <audio ref={audioRef} loop preload="auto" onEnded={handleEnded}>
        <source src={Song} type="audio/mpeg" />
      </audio>
    </>
  );
}
