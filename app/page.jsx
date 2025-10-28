"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Player from "@/components/Player";
import NavButtons from "@/components/NavButtons";
import Materials from "@/components/Materials";
import Topics from "@/components/Topics";
import Comments from "@/components/Comments";

export default function Home() {
  const [isWideMode, setIsWideMode] = useState(false);

  return (
    <>
      <Header />
      <div className="max-w-[1400px] mx-auto px-5 py-4 lg:px-8">
        <div
          className={`grid grid-cols-1 gap-8 ${
            !isWideMode ? "lg:grid-cols-[64%_auto] lg:gap-[70px]" : ""
          }`}
        >
          {isWideMode && (
            <div className="lg:col-span-full">
              <Player isWideMode={isWideMode} setIsWideMode={setIsWideMode} />
            </div>
          )}

          <div className="space-y-0 order-1 lg:order-none">
            {!isWideMode && (
              <div>
                <Player isWideMode={isWideMode} setIsWideMode={setIsWideMode} />
              </div>
            )}

            <div>
              <NavButtons />
            </div>

            <div className="lg:border-b-0 border-b border-gray-200 pb-8 lg:pb-0">
              <Materials />
            </div>

            <div id="comments-section-desktop" className="hidden lg:block">
              <Comments />
            </div>
          </div>

          {!isWideMode && (
            <div id="curriculum-section" className="order-2 lg:order-none">
              <Topics />
            </div>
          )}

          {isWideMode && (
            <div id="curriculum-section" className="lg:col-span-full order-2">
              <Topics />
            </div>
          )}

          <div
            id="comments-section"
            className={`order-3 lg:order-none ${
              !isWideMode ? "lg:hidden" : "lg:col-span-full"
            }`}
          >
            <Comments />
          </div>
        </div>
      </div>
    </>
  );
}
