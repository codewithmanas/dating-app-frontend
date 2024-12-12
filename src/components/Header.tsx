import { Heart } from "lucide-react";

export function Header() {
  return (
    <header className="text-center py-12 px-4">
      <div className="glass-card max-w-2xl mx-auto p-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Heart className="w-6 h-6 text-pink-500" />
          <span className="text-sm font-medium text-pink-500">Dating App</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Find your perfect match
        </h1>
        <p className="text-gray-600 text-lg">
          Connect with like-minded people and discover meaningful relationships
        </p>
      </div>
    </header>
  );
}
