import { User } from "../types";

interface MatchesListProps {
  matches: User[];
}

export function MatchesList({ matches }: MatchesListProps) {
//   if (matches.length === 0) return null;
  if (matches.length === 0) return "No matches found";

  return (
    <div className="mt-12">
      <div className="glass-card p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Matches</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {matches.map((match) => (
            <div key={match.id} className="flex-shrink-0 w-48 text-center">
              <img
                src={match.imageUrl}
                alt={match.name}
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <p className="mt-3 font-semibold text-gray-800">{match.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
