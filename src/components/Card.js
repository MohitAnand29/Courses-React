import { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card({ course }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    const newLikedState = !liked;
    setLiked(newLikedState);

    if (newLikedState) {
      toast.success(`"${course.title}" added to your favorites!`, {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    } else {
      toast.info(`"${course.title}" removed from favorites`, {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
    }
  };

  return (
    <div className="w-[320px] rounded-2xl overflow-hidden 
      bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 
      backdrop-blur-lg border border-gray-700 shadow-lg 
      transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      
      <div className="relative">
        <img
          src={course.image.url}
          alt={course.image?.alt || "Course image"}
          className="w-full h-48 object-cover"
        />
        <button
          className="w-[42px] h-[42px] bg-white/90 backdrop-blur-md 
          rounded-full absolute right-3 bottom-3 grid place-items-center 
          transition-all duration-300 hover:scale-110 shadow-md"
          onClick={toggleLike}
          aria-label={liked ? "Remove from favorites" : "Add to favorites"}
        >
          {liked ? (
            <FcLike fontSize="1.6rem" />
          ) : (
            <FcLikePlaceholder fontSize="1.6rem" />
          )}
        </button>
      </div>

      <div className="p-5">
        <p className="text-white font-bold text-lg leading-snug tracking-wide">
          {course.title}
        </p>
        <p className="mt-2 text-gray-300 text-sm leading-relaxed">
          {course.description}
        </p>
      </div>
    </div>
  );
}

export default Card;
