"use client";

import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";

export default function AskQuestion({ isOpen, onClose }) {
  const [questionText, setQuestionText] = useState("");

  useEffect(() => {
    if (isOpen) {
      const savedQuestion = localStorage.getItem("draftQuestion");
      if (savedQuestion) {
        setQuestionText(savedQuestion);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (questionText) {
      localStorage.setItem("draftQuestion", questionText);
    }
  }, [questionText]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!questionText.trim()) return;

    const questions = JSON.parse(localStorage.getItem("userQuestions") || "[]");
    questions.push({
      id: Date.now(),
      text: questionText,
      date: new Date().toISOString(),
    });
    localStorage.setItem("userQuestions", JSON.stringify(questions));

    localStorage.removeItem("draftQuestion");
    setQuestionText("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Ask a Question</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <Textarea
              placeholder="Write your question here..."
              className="mb-4 min-h-[150px]"
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
            />
            <Button
              type="submit"
              variant="success"
              className="w-[200px] h-[60px] text-lg font-semibold"
            >
              Submit Question <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
