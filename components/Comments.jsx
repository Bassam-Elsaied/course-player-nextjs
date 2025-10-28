"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState, useEffect } from "react";
import { initialComments } from "@/lib/data";
import { format } from "date-fns";

export default function Comments() {
  const [comments, setComments] = useState(initialComments);
  const [commentText, setCommentText] = useState("");

  const fakeUsers = [
    { name: "Ahmed Mohammed", avatar: "/images/user1-image.webp" },
    { name: "Sara Ali", avatar: "/images/user2-image.webp" },
    { name: "Mohamed Hassan", avatar: "/images/user3-image.webp" },
  ];

  useEffect(() => {
    const savedComments = localStorage.getItem("courseComments");
    if (savedComments) {
      try {
        const parsed = JSON.parse(savedComments);
        setComments(parsed);
      } catch (error) {
        console.error("Error loading comments:", error);
      }
    }
  }, []);

  const formatDate = () => {
    return format(new Date(), "MMM d, yyyy");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!commentText.trim()) return;

    const randomUser = fakeUsers[Math.floor(Math.random() * fakeUsers.length)];

    const newComment = {
      id: Date.now(),
      name: randomUser.name,
      date: formatDate(),
      text: commentText,
      avatar: randomUser.avatar,
    };

    const updatedComments = [...comments, newComment];
    setComments(updatedComments);

    localStorage.setItem("courseComments", JSON.stringify(updatedComments));

    setCommentText("");
  };

  return (
    <section className="pt-9">
      <h2 className="text-4xl font-normal mb-0">Comments</h2>

      <div>
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="py-9 border-b border-gray-100 last:border-b-0"
          >
            <div className="flex gap-4 flex-col sm:flex-row">
              <div className="shrink-0">
                <div className="w-[85px] h-[85px] rounded-full bg-gray-200 overflow-hidden relative">
                  <Image
                    src={comment.avatar}
                    alt={comment.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-gray-600 sm:pl-6">
                <h5 className="text-lg text-gray-900">{comment.name}</h5>
                <h6 className="mt-3 text-base">{comment.date}</h6>
                <p className="mt-4 text-base leading-relaxed">{comment.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <form className="my-5" onSubmit={handleSubmit}>
        <Textarea
          placeholder="Write a comment"
          className="mb-4"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <Button
          type="submit"
          variant="success"
          className="w-[200px] h-[60px] text-lg font-semibold"
        >
          Submit Review <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </form>
    </section>
  );
}
