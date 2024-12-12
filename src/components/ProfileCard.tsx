import { Heart } from "lucide-react";
import { User } from "../types";

interface ProfileCardProps {
  user: User;
  onLike: (user: User) => void;
} 

const ProfileCard = ({ user, onLike }: ProfileCardProps) => {
  return (
    <div className="glass-card overflow-hidden transform transition-all duration-300 hover:-translate-y-1">
      <img
        src={user.imageUrl}
        alt={user.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">
          {user.name}, {user.age}
        </h3>
        <p className="text-gray-600 mt-2">{user.bio}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {user.interests.map((interest) => (
            <span key={interest} className="badge">
              {interest}
            </span>
          ))}
        </div>

        <button
          onClick={() => onLike(user)}
          className="primary-button w-full mt-6"
        >
          <Heart className="w-5 h-5" />
          Like Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
