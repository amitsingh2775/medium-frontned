import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

interface BlogCardProps {
  autherName: string;
  title: string;
  content: string;
  id: string;
  publishDate: string;
}

function BlogCard({ id, autherName, title, content, publishDate }: BlogCardProps) {

  const [readTime, setReadTime] = useState(0);

  useEffect(() => {
    // 100 words per minute ki speed se calculation
    setReadTime(Math.ceil(content.length / 100));
  }, [content]); // Jab content change ho tab update ho

  return (
    <Link to={`/blog/${id}`}>
      <div className="mt-3 border-b border-slate-200 pb-4 w-full max-w-2xl mx-auto px-4 sm:px-6 md:px-8 ">
        {/* Author Info */}
        <div className="flex items-center space-x-2">
          <Avtar autherName={autherName} size={10} />
          <div className="font-extralight text-sm sm:text-base">{autherName} | </div>
          <div className="text-slate-500 text-xs sm:text-sm">{publishDate}</div>
        </div>

        {/* Title */}
        <div className="text-lg sm:text-xl md:text-2xl font-semibold mt-3">
          {title}
        </div>

        {/* Content Preview */}
        <div className="text-sm sm:text-md md:text-lg font-thin">
          {content.slice(0, 100) + "..."}
        </div>

        {/* Read Time */}
        <div className="text-slate-500 text-xs sm:text-sm mt-4">
          {readTime} {readTime === 1 ? "minute" : "minutes"} read
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;

// Avatar Component
const sizeMap: Record<number, string> = {
  6: "w-6 h-6",
  7: "w-7 h-7",
  8: "w-8 h-8",
  10: "w-10 h-10",
  12: "w-12 h-12",
  25:"w-20 h-20"
};

export function Avtar({ autherName, size = 7 }: { autherName: string; size?: number }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        sizeMap[size] || "w-7 h-7"
      } overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span className="font-medium text-gray-600 dark:text-gray-300 text-xs sm:text-sm md:text-base">
        {autherName[0]}
      </span>
    </div>
  );
}
