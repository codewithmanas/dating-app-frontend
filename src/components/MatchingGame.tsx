import { useEffect, useState } from "react";
import { User } from "../types";
import { generatePotentialMatches } from "../utils/matchingAlgorithm";
import { UserCard } from "./UserCard";

interface MatchingGameProps {
  likedUser: User;
  onMatch: (matchedUser: User) => void;
  onComplete: () => void;
}

const MatchingGame = ({
  likedUser,
  onMatch,
  onComplete,
}: MatchingGameProps) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [potentialMatches, setPotentialMatches] = useState<User[]>([]);

    useEffect(() => {

        const matches = generatePotentialMatches(likedUser);
        setPotentialMatches(matches);

    }, [likedUser]);

    const handleLike = () => {
        const currentUser = potentialMatches[currentIndex];
        if (currentUser.id === likedUser.id) {
          onMatch(currentUser);
        }
        handleNext();
      };


      const handleDislike = () => {
        handleNext();
      };


      const handleNext = () => {
        if (currentIndex < potentialMatches.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          onComplete();
        }
      };



    if (!potentialMatches.length) return null;


  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="glass-card max-w-md w-full p-6 text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Someone liked you! 💝
        </h2>
        <p className="text-gray-600">
          Can you guess who? Like them back to make it a match!
        </p>
      </div>

      <UserCard
        user={potentialMatches[currentIndex]}
        onLike={handleLike}
        onDislike={handleDislike}
      />

      <div className="mt-6 glass-card px-4 py-2">
        Profile {currentIndex + 1} of {potentialMatches.length}
      </div>
    </div>
  );
};

export default MatchingGame;
