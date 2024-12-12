import { User } from "../types";
import { Heart, X } from "lucide-react";

interface UserCardProps {
  user: User;
  onLike: () => void;
  onDislike: () => void;
}

export function UserCard({ user, onLike, onDislike }: UserCardProps) {
  return (
    <div className="relative w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
      <img
        src={user.imageUrl}
        alt={user.name}
        className="w-full h-96 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold">
          {user.name}, {user.age}
        </h3>
        <p className="text-gray-600 mt-2">{user.bio}</p>

        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-700">Interests</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {user.interests.map((interest) => (
              <span
                key={interest}
                className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={onDislike}
            className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <X className="w-8 h-8 text-gray-600" />
          </button>
          <button
            onClick={onLike}
            className="p-4 rounded-full bg-pink-100 hover:bg-pink-200 transition-colors"
          >
            <Heart className="w-8 h-8 text-pink-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
