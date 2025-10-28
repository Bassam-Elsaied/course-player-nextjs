"use client";

import { X, Trophy, Medal, Award } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { leaderboardData } from "@/lib/data";
export default function Leaderboard({ isOpen, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const currentUserRank =
    leaderboardData.find((user) => user.isCurrentUser)?.rank || 0;

  const getMotivationalMessage = (rank) => {
    const messages = {
      1: {
        emoji: "🏆",
        text: "عظيم يا صديقي! أنت في الصدارة، استمر في التميز وحافظ على المركز الأول!",
      },
      2: {
        emoji: "🔥",
        text: "رائع جداً! أنت قريب جداً من القمة، بقى شوية مجهود توصل للمركز الأول!",
      },
      3: {
        emoji: "🎯",
        text: "ممتاز! أنت في المراكز المتقدمة، كمل بنفس الحماس وهتوصل للقمة قريب!",
      },
      "4-5": {
        emoji: "👏",
        text: "أحسنت! أداؤك جيد جداً، استمر في الدراسة وهتدخل ضمن أفضل 3 قريب!",
      },
      "6-8": {
        emoji: "✨",
        text: "كويس! بس محتاجين نزود التركيز شوية، أنت قادر على أكتر من كده بكتير!",
      },
      "9-12": {
        emoji: "💯",
        text: "يلا بينا! وقت الجد يا بطل، ركز في الدروس وحل التمارين وهتتقدم بسرعة!",
      },
      "13-15": {
        emoji: "🚀",
        text: "هيا يا بطل! محتاج تشتغل أكتر على نفسك، الوقت بيجري والفرصة لسه قدامك!",
      },
      default: {
        emoji: "💪",
        text: "يلا نشد الهمة! أنت متأخر شوية، بس مفيش حاجة مستحيلة، ابدأ دلوقتي وهتلحقهم!",
      },
    };

    if (rank === 1) return messages[1];
    if (rank === 2) return messages[2];
    if (rank === 3) return messages[3];
    if (rank >= 4 && rank <= 5) return messages["4-5"];
    if (rank >= 6 && rank <= 8) return messages["6-8"];
    if (rank >= 9 && rank <= 12) return messages["9-12"];
    if (rank >= 13 && rank <= 15) return messages["13-15"];
    return messages.default;
  };

  const getRankIcon = (rank) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Award className="w-6 h-6 text-amber-600" />;
    return null;
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <Trophy className="w-7 h-7 text-[#485293]" />
              <h2 className="text-2xl font-semibold">Leaderboard</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="bg-[#F5F9FA] text-[#485293] p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="text-3xl shrink-0 mt-1">
                {getMotivationalMessage(currentUserRank).emoji}
              </div>
              <div className="flex-1">
                <p className="text-base leading-relaxed" dir="rtl">
                  {getMotivationalMessage(currentUserRank).text}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-3">
            {leaderboardData.map((user) => (
              <div
                key={user.rank}
                className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
                  user.isCurrentUser
                    ? "bg-[#485293] text-white shadow-lg"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center justify-center w-12 shrink-0">
                  {getRankIcon(user.rank) || (
                    <span
                      className={`text-xl font-bold ${
                        user.isCurrentUser ? "text-white" : "text-gray-600"
                      }`}
                    >
                      {user.rank}
                    </span>
                  )}
                </div>

                {/* Avatar */}
                <div className="w-12 h-12 rounded-full overflow-hidden relative shrink-0">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name and Progress */}
                <div className="flex-1 min-w-0">
                  <h3
                    className={`font-semibold text-base truncate ${
                      user.isCurrentUser ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {user.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          user.isCurrentUser ? "bg-white" : "bg-[#485293]"
                        }`}
                        style={{ width: `${user.progress}%` }}
                      ></div>
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        user.isCurrentUser ? "text-white" : "text-gray-600"
                      }`}
                    >
                      {user.progress}%
                    </span>
                  </div>
                </div>

                {/* Points */}
                <div className="text-right shrink-0">
                  <div
                    className={`text-lg font-bold ${
                      user.isCurrentUser ? "text-white" : "text-[#485293]"
                    }`}
                  >
                    {user.points.toLocaleString()}
                  </div>
                  <div
                    className={`text-sm ${
                      user.isCurrentUser ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    points
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
