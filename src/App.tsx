
import { useState } from "react";
import { Header } from "./components/Header";
import { mockUsers } from "./data/mockUsers";
import { User } from "./types";
import ProfileCard from "./components/ProfileCard";
import { MatchesList } from "./components/MatchesList";
import MatchingGame from "./components/MatchingGame";

function App() {
  const [currentUser] = useState<User>(mockUsers[0]);
  const [likedUser, setLikedUser] = useState<User | null>(null);
  const [matches, setMatches] = useState<User[]>([]);
  const [showMatchingGame, setShowMatchingGame] = useState(false);


  const handleLikeUser = (user: User) => {
    setLikedUser(user);
    setShowMatchingGame(true);
    console.log("Liked user:", user);
  }


  const handleMatch = (matchedUser: User) => {
    setMatches([...matches, matchedUser]);
    setTimeout(() => {
      setShowMatchingGame(false);
      setLikedUser(null);
    }, 2000);
  };

  const handleGameComplete = () => {
    setShowMatchingGame(false);
    setLikedUser(null);
  };


  if (showMatchingGame && likedUser) {
    return (
      <MatchingGame
        likedUser={likedUser}
        onMatch={handleMatch}
        onComplete={handleGameComplete}
      />
    );
  }


  return (
    <div className="min-h-screen pb-12">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4">

      <MatchesList matches={matches} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockUsers
            .filter(user => user.id !== currentUser.id)
            .map(user => (
              <ProfileCard
                key={user.id}
                user={user}
                onLike={handleLikeUser}
              />
            ))}
        </div>

      </main>
    </div>
  );
}

export default App;
