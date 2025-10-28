"use client";

import { FileText, Lock } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { topics } from "@/lib/data";

export default function Topics() {
  return (
    <section>
      <header className="mb-10">
        <h2 className="text-4xl font-normal mb-10">Topics for This Course</h2>

        <div className="mb-4 mt-20">
          <div className="relative mb-4">
            <div
              className="absolute flex items-center justify-center w-10 h-10 border-[3px] border-[#C8C8C8] rounded-full text-[#485293] text-sm font-semibold bg-white"
              style={{ left: "calc(63% - 20px)", top: "-52px" }}
            >
              You
            </div>

            <div
              className="absolute w-0 h-0"
              style={{
                left: "calc(63% - 6px)",
                top: "-10px",
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderTop: "8px solid #C8C8C8",
              }}
            ></div>
          </div>
          <Progress value={63} className="mb-2" />
          <div
            className="text-[#485293] text-sm font-semibold"
            style={{ marginLeft: "calc(63% - 11px)" }}
          >
            63%
          </div>
        </div>
      </header>

      <Accordion type="multiple" defaultValue={["1", "2", "3"]}>
        {topics.map((topic) => (
          <AccordionItem key={topic.id} value={topic.id}>
            <AccordionTrigger value={topic.id}>
              <div>
                <h5 className="text-lg font-medium text-gray-900 mb-1">
                  {topic.week}
                </h5>
                <p className="text-base text-gray-600 font-normal">
                  {topic.description}
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent value={topic.id}>
              <div className="space-y-0">
                {topic.lessons.map((lesson, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-[15px] text-gray-600 border-t border-gray-100 first:border-t-0"
                  >
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      {lesson.title}
                    </span>

                    {lesson.locked ? (
                      <Lock className="w-4 h-4 ml-3" />
                    ) : (
                      <div className="flex gap-2 flex-wrap justify-end">
                        <div className="bg-[#F2FAF8] text-[#40C1CE] px-2 py-0.5 text-xs">
                          {lesson.questions} QUESTION
                        </div>
                        <div className="bg-[#FDF2F4] text-[#E55891] px-2 py-0.5 text-xs">
                          {lesson.minutes} MINUTES
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
