"use client";

import { useState, useRef, useEffect } from "react";
import { Maximize, Minimize, Maximize2 } from "lucide-react";
import YouTube from "react-youtube";

export default function Player({ isWideMode, setIsWideMode }) {
  const [isSticky, setIsSticky] = useState(false);
  const [initialOffset, setInitialOffset] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const ytPlayerRef = useRef(null);

  const videoId = "8LwodvRgyLE";

  const onPlayerStateChange = (event) => {
    if (event.data === 1) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
      setIsSticky(false);
    }
  };

  const onPlayerReady = (event) => {
    ytPlayerRef.current = event.target;
  };

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setInitialOffset(window.scrollY + rect.top);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024 && isPlaying) {
        const scrollPosition = window.scrollY;
        setIsSticky(scrollPosition > initialOffset);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [initialOffset, isPlaying]);

  const handleFullscreen = () => {
    if (playerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        playerRef.current.requestFullscreen().catch((err) => {
          console.error("Error attempting to enable fullscreen:", err);
        });
      }
    }
  };

  const handleWideMode = () => {
    setIsWideMode(!isWideMode);
  };

  return (
    <>
      <div
        ref={containerRef}
        className={isSticky ? "h-[250px] sm:h-[300px]" : ""}
      >
        <div
          ref={playerRef}
          className={`
            w-full bg-black overflow-hidden transition-all duration-300
            ${
              isSticky
                ? "fixed top-0 left-0 right-0 z-[9999] h-[250px] sm:h-[300px] rounded-none shadow-xl"
                : "relative rounded-sm"
            }
          `}
          style={!isSticky ? { paddingBottom: "56.25%" } : {}}
        >
          <YouTube
            videoId={videoId}
            className={
              isSticky ? "w-full h-full" : "absolute top-0 left-0 w-full h-full"
            }
            iframeClassName="w-full h-full"
            opts={{
              playerVars: {
                rel: 0,
                modestbranding: 1,
              },
            }}
            onReady={onPlayerReady}
            onStateChange={onPlayerStateChange}
          />

          {!isSticky && (
            <div className="absolute top-4 right-4 z-10 flex gap-2 pointer-events-none">
              <div className="pointer-events-auto flex gap-2">
                <button
                  onClick={handleFullscreen}
                  className="bg-black/60 hover:bg-black/80 text-white p-2 rounded-md transition-all backdrop-blur-sm"
                  title="Fullscreen"
                >
                  <Maximize className="w-5 h-5" />
                </button>

                <button
                  onClick={handleWideMode}
                  className="hidden lg:block bg-black/60 hover:bg-black/80 text-white p-2 rounded-md transition-all backdrop-blur-sm"
                  title={isWideMode ? "Normal Width" : "Wide Mode"}
                >
                  {isWideMode ? (
                    <Minimize className="w-5 h-5" />
                  ) : (
                    <Maximize2 className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          )}

          {isSticky && (
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsSticky(false);
              }}
              className="absolute top-2 left-2 z-20 bg-black/70 hover:bg-black/90 text-white w-8 h-8 flex items-center justify-center rounded-full text-lg font-bold backdrop-blur-sm"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </>
  );
}
