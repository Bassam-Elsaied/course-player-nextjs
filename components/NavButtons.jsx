"use client";

import { BookOpen, MessageSquare, HelpCircle, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AskQuestion from "./AskQuestion";
import Leaderboard from "./Leaderboard";

export default function NavButtons() {
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    let element = document.getElementById(`${sectionId}-desktop`);

    if (!element || element.offsetParent === null) {
      element = document.getElementById(sectionId);
    }

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <section className="flex gap-4 my-10">
        <Button
          variant="outline"
          className="w-10 h-10 rounded-full p-0 border-[#EDEDED] hover:bg-[#485293] hover:text-white hover:border-[#485293] transition-colors"
          aria-label="Curriculum"
          title="Go to Curriculum"
          onClick={() => scrollToSection("curriculum-section")}
        >
          <BookOpen className="w-[18px] h-[18px]" />
        </Button>

        <Button
          variant="outline"
          className="w-10 h-10 rounded-full p-0 border-[#EDEDED] hover:bg-[#485293] hover:text-white hover:border-[#485293] transition-colors"
          aria-label="Comments"
          title="Go to Comments"
          onClick={() => scrollToSection("comments-section")}
        >
          <MessageSquare className="w-[18px] h-[18px]" />
        </Button>

        <Button
          variant="outline"
          className="w-10 h-10 rounded-full p-0 border-[#EDEDED] hover:bg-[#485293] hover:text-white hover:border-[#485293] transition-colors"
          aria-label="Ask Question"
          title="Ask a Question"
          onClick={() => setIsQuestionOpen(true)}
        >
          <HelpCircle className="w-[18px] h-[18px]" />
        </Button>

        <Button
          variant="outline"
          className="w-10 h-10 rounded-full p-0 border-[#EDEDED] hover:bg-[#485293] hover:text-white hover:border-[#485293] transition-colors"
          aria-label="Leaderboard"
          title="View Leaderboard"
          onClick={() => setIsLeaderboardOpen(true)}
        >
          <Trophy className="w-[18px] h-[18px]" />
        </Button>
      </section>

      <AskQuestion
        isOpen={isQuestionOpen}
        onClose={() => setIsQuestionOpen(false)}
      />
      <Leaderboard
        isOpen={isLeaderboardOpen}
        onClose={() => setIsLeaderboardOpen(false)}
      />
    </>
  );
}
